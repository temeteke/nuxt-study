// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
