import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Arrow,
} from '@radix-ui/react-dropdown-menu';

import { navOptions } from '../data/nav-options';
import { MenuIcon } from 'lucide-react';

export function Select() {
  return (
    <Root>
      <Trigger asChild>
        <button
          aria-label="Abrir menu de navegação"
          aria-haspopup="menu"
          type="button"
          className="cursor-pointer rounded-full p-2 transition-colors duration-200 ease-linear hover:bg-black/20 md:hidden"
        >
          <MenuIcon className="text-primary" />
        </button>
      </Trigger>

      <Portal>
        <Content className="bg-background/20 z-99999 flex flex-col gap-2 rounded-md backdrop-blur-2xl">
          <nav
            aria-label="Menu principal"
            className="flex flex-col p-2 text-white"
          >
            {navOptions.map((route) => (
              <Item
                asChild
                key={route.id}
                className="hover:text-primary rounded-sm px-4 py-2 text-sm transition-colors duration-100 ease-linear hover:bg-black/20"
              >
                <a href={route.href}>{route.label}</a>
              </Item>
            ))}
          </nav>

          <Arrow className="fill-background/20 backdrop-blur-2xl" />
        </Content>
      </Portal>
    </Root>
  );
}
