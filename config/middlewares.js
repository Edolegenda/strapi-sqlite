module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',       // lokale Entwicklung
        'https://dealcheck.ch',        // deine spätere Live-Domain
        // Vercel-Previews (Regex, NICHT als String!)
        /\.vercel\.app$/
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS','HEAD'],
      headers: ['Content-Type','Authorization','Origin','Accept'],
      keepHeadersOnError: true
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];