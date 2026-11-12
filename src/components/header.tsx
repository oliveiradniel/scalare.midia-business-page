import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from 'lucide-react';

import { nav } from '#/content/site';
import { Img } from '#/components/img';
import { Shimmer } from '#/components/ui';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  function toggle() {
    const header = headerRef.current?.getBoundingClientRect();
    const button = buttonRef.current?.getBoundingClientRect();
    if (header && button) {
      setPosition({
        top: button.bottom - header.top,
        left: button.left + button.width / 2 - header.left,
      });
    }
    setOpen((value) => !value);
  }

  useEffect(() => {
    if (!open) return;

    menuRef.current?.querySelector('a')?.focus();

    const close = (returnFocus: boolean) => {
      setOpen(false);
      if (returnFocus) buttonRef.current?.focus();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close(true);
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      close(false);
    };
    const onFocus = (event: FocusEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && target !== buttonRef.current) {
        close(false);
      }
    };
    const onResize = () => close(false);

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('focusin', onFocus);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('focusin', onFocus);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="animate-enter-down fixed z-20 w-full p-4">
      <div className="border-primary/12 bg-background/75 mx-auto flex h-20 max-w-350 items-center justify-between gap-4 rounded-full border p-4 backdrop-blur-2xl">
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="/" aria-label="Scalare Mídia, página inicial" className="flex shrink-0 rounded-full">
            <Img
              name="logo-scalare-horizontal"
              sizes="173px"
              alt=""
              className="hidden h-12 w-auto sm:flex"
            />
            <Img
              name="logo-scalare-simbolo"
              sizes="48px"
              alt=""
              className="h-12 w-auto sm:hidden"
            />
          </a>

          <button
            ref={buttonRef}
            type="button"
            aria-label="Menu de navegação"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={toggle}
            className="cursor-pointer rounded-full p-2 transition-colors duration-200 ease-linear hover:bg-black/20 md:hidden"
          >
            <MenuIcon className="text-primary" aria-hidden="true" />
          </button>

          <nav aria-label="Menu principal" className="hidden md:flex">
            <ul className="flex items-center gap-4">
              {nav.map((item) => (
                <li key={item.href} className="text-center">
                  <a
                    href={item.href}
                    className="hover:text-primary text-white transition-all ease-linear"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a
          href="/#offer"
          className="bg-primary relative overflow-hidden rounded-full p-2 px-3 text-center text-sm font-medium transition-transform hover:scale-106 sm:text-base"
        >
          <Shimmer className="animate-shimmer -translate-x-[80%]" />
          Comprar agora
        </a>
      </div>

      {/* Fora do container com backdrop-blur para o blur do menu enxergar a página. */}
      {open && (
        <nav
          ref={menuRef}
          id="menu-mobile"
          aria-label="Menu principal"
          style={{ top: position.top, left: position.left }}
          className="bg-background/20 absolute z-50 flex -translate-x-1/2 flex-col gap-2 rounded-md backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col p-2 text-white">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary block rounded-sm px-4 py-2 text-sm transition-colors duration-100 ease-linear hover:bg-black/20"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <svg
            aria-hidden="true"
            width="10"
            height="5"
            viewBox="0 0 30 10"
            preserveAspectRatio="none"
            className="fill-background/20 absolute bottom-full left-1/2 -translate-x-1/2 rotate-180"
          >
            <polygon points="0,0 30,0 15,10" />
          </svg>
        </nav>
      )}
    </header>
  );
}
