// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Erfan Shahabi - AI Researcher',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/logo.svg' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Pro:wght@400;600;700&display=swap' }
      ],
      meta: [
        { name: 'description', content: "Master's student in IT Engineering at University of Tehran, researching NLP, LLMs, and Machine Behavior." },
        { name: 'google-site-verification', content: 'yc-6k8sx2Q1evW53FMfhIwzdmOqgNxCe33WKg9JWGkg' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/blog']
    }
  }
})
