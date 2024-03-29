// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      title: 'Gospeltune',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Site de Cifras' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/gospeltunelogo.png' },
        // { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&display=swap" },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" }


      ]
    },
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  ssr: false,
  vite: {
    optimizeDeps: {
      exclude: [
        'date-fns'
      ]
    }
  }
})
