export function formatPhoneBR(phone: string) {
  const cleaned = phone.replace(/\D/g, '');

  return cleaned.replace(/^55(\d{2})(\d{5})(\d{4})$/, '+55 ($1) $2-$3');
}
