// Dati centralizzati del sito Marcheto
export const siteData = {
  // Info aziendali
  name: 'Marcheto',
  fullName: 'Marcheto - Macelleria e Griglieria',
  tagline: 'Il sapore che lascia il segno',
  description: 'Marcheto è la macelleria e griglieria di Malonno (Brescia) dove gustare carni fresche selezionate, tagli pregiati alla brace e street food di qualità. Tradizione e passione dal cuore della Valle Camonica.',

  // Contatti
  phone: '+39 0364 657048',
  phoneClean: '+390364657048',
  phoneDisplay: '0364 657048',
  email: 'info@marcheto.it',

  // Indirizzo
  address: {
    street: 'Via Nazionale 133',
    cap: '25040',
    city: 'Malonno',
    province: 'BS',
    region: 'Lombardia',
    country: 'Italia',
    full: 'Via Nazionale 133, 25040 Malonno (BS)',
    formatted: 'Via Nazionale 133 25040, Malonno (B.S.)'
  },

  // Orari
  openingHours: {
    general: 'Dalle 9:00 alle 22:00 tutti i giorni',
    closed: 'Mercoledì chiuso',
    display: 'Vi aspettiamo dalle 9 alle 22 tutti i giorni. (mercoledì chiuso)',
    schema: [
      'Mo 09:00-22:00',
      'Tu 09:00-22:00',
      'We Closed',
      'Th 09:00-22:00',
      'Fr 09:00-22:00',
      'Sa 09:00-22:00',
      'Su 09:00-22:00'
    ]
  },

  // Social
  social: {
    facebook: 'https://facebook.com/marcheto',
    instagram: 'https://instagram.com/marcheto'
  },

  // URL sito
  url: 'https://marcheto.it',

  // SEO
  seo: {
    title: 'Marcheto - Macelleria e Griglieria a Malonno | Carni Fresche e Brace',
    description: 'Marcheto è la macelleria e griglieria di Malonno (Brescia) dove gustare carni fresche selezionate, tagli pregiati alla brace e street food di qualità. Tradizione e passione dal cuore della Valle Camonica.',
    keywords: 'macelleria malonno, griglieria brescia, carne alla brace, bistecca fiorentina, street food carne, valle camonica ristorante, carne fresca brescia, tagliata manzo, picanha, asado argentino',
    ogImage: '/og-image.jpg'
  },

  // Legal
  legal: {
    piva: '', // Da compilare
    cf: '', // Da compilare
    rea: '', // Da compilare
    lastUpdate: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
  },

  // Cookie
  cookie: {
    consentKey: 'marcheto-v3-cookie-consent'
  }
}

export default siteData
