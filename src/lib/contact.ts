export const WHATSAPP_NUMBER = '5548998030856'
export const INSTAGRAM_URL = 'https://www.instagram.com/lojapraticavirtual/'

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
