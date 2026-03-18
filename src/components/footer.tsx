import { MailIcon, PhoneIcon } from 'lucide-react';
import bannerImage from '../assets/images/banner.png';
import instagramIcon from '../assets/images/instagram.svg';

import { formatPhoneBR } from '../utils/format-phone-br';

import {
  email,
  emailLink,
  instagram,
  instagramLink,
  phoneNumber,
} from '../data/personal-informations';
import { whatsappMessage } from '../utils/whatsapp-message';

export function Footer() {
  const whatsappText = whatsappMessage(
    'Olá! Queria saber mais sobre a Scalare Mídia e seus serviços.',
  );

  return (
    <footer className="w-full px-4 pb-8">
      <div className="mx-auto flex w-full max-w-350 flex-col gap-16 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-2 md:items-start">
          <img src={bannerImage} alt="" className="mb-8 h-auto w-42 md:mb-0" />

          <p className="text-center text-sm text-gray-400 md:text-start">
            A Scalare Mídia é uma agência focada em crescimento digital,
            especializada em posicionar marcas e atrair clientes por meio de
            estratégias inteligentes de marketing. Com uma abordagem orientada a
            resultados, ajuda empresas a ganharem visibilidade, aumentarem sua
            presença online e escalarem suas vendas de forma consistente.
          </p>

          <small className="text-primary text-center md:text-start">
            &copy; Todos os direitos reservados a Scalare Mídia
          </small>
        </div>

        <div className="flex flex-1 flex-col items-center gap-2 md:items-start">
          <h3 className="mb-4 text-center text-xl font-medium text-white md:text-start">
            Contato
          </h3>

          <div className="flex items-center gap-2">
            <MailIcon className="text-primary size-4" />

            <a href={emailLink} className="text-gray-400">
              {email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <PhoneIcon className="text-primary size-4" />

            <a href={whatsappText} className="text-gray-400">
              {formatPhoneBR(String(phoneNumber))}
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-2 md:items-start">
          <h3 className="mb-4 text-center text-xl font-medium text-white md:text-start">
            Instagram
          </h3>

          <div className="flex items-center gap-2">
            <img src={instagramIcon} alt="" className="size-6" />

            <a href={instagramLink} className="text-gray-400">
              {instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
