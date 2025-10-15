module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',            // lokal (falls du lokal entwickelst)
        'https://dealcheck.ch',             // deine Website
        'https://strapi-ifra.onrender.com', // << Strapi-Admin/Backend selbst
        /\.vercel\.app$/                    // optional: Vercel-Previews
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS','HEAD'],
      headers: ['Content-Type','Authorization','Origin','Accept'],
      keepHeadersOnError: true,
      credentials: true
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