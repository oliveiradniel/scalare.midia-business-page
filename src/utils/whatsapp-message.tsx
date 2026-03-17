import { whatsappLink } from '../data/personal-informations';

export function whatsappMessage(text: string) {
  const message = encodeURIComponent(text);

  return `${whatsappLink}?text=${message}`;
}
