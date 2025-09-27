// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   baseURL: process.env.NODE_ENV === 'production' ? '/thinktribe' : '',
  // },
  ssr: true, // or just omit it (default is true)
  nitro: {
    preset: 'static'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
