import { MailIcon, PhoneIcon } from 'lucide-react';

import instagramIcon from '#/assets/icons/instagram.svg';
import { brand, contact, links, messages, nav, whatsapp } from '#/content/site';
import { Img } from '#/components/img';
import { Container, SmartLink } from '#/components/ui';

const titleClass = 'text-sm font-bold tracking-[0.14em] text-white uppercase';
const linkClass = 'hover:text-primary text-gray-400 transition-colors';

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-start">
            <Img
              name="logo-scalare-horizontal"
              sizes="168px"
              alt="Scalare Mídia"
              className="h-auto w-42"
            />
            <p className="max-w-sm text-sm text-gray-400">{brand.description}</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col items-center gap-4 md:items-start">
            <h2 className={titleClass}>Navegação</h2>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <h2 className={titleClass}>Contato</h2>
            <ul className="flex flex-col items-center gap-3 md:items-start">
              <li className="flex items-center gap-2">
                <MailIcon className="text-primary size-4" aria-hidden="true" />
                <a href={links.email} className={linkClass}>
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="text-primary size-4" aria-hidden="true" />
                <SmartLink
                  href={whatsapp(messages.footer)}
                  aria-label={`WhatsApp ${contact.phoneDisplay} (abre em nova aba)`}
                  className={linkClass}
                >
                  {contact.phoneDisplay}
                </SmartLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <h2 className={titleClass}>Instagram</h2>
            <div className="flex items-center gap-2">
              <img src={instagramIcon} alt="" aria-hidden="true" className="size-6" />
              <SmartLink me href={links.instagram} className={linkClass}>
                @{contact.instagram}
              </SmartLink>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center md:flex-row md:text-start">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <small className="text-primary/80 text-sm">
              &copy; {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
            </small>
            <small className="text-sm text-gray-400">
              {brand.legalName} · CNPJ {brand.taxId}
            </small>
          </div>
          <small className="text-sm text-gray-400">Método Inktensity</small>
        </div>
      </Container>
    </footer>
  );
}
