export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'Product Sign Up',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      ]
    }
  },
  css: [
    "~/assets/css/global.css",
    "@provetcloud/css"
  ],
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('provet-')
        }
      }
    }
  }
});