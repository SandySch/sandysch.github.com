// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Praxis Berührt im Sein',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Praxis für Biodynamische Craniosacral Therapie & Rhythmische Einreibungen in Winterthur. Raum für Ruhe und innere Balance.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/png', // Specify the image type as PNG
          href: '/logo.png' // Path relative to the public directory
        }
      ],
    },
  },
  css: ['~/assets/css/main.css'],
})
