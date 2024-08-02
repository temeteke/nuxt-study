// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  build: {
    transpile: ['vuetify'],
  },
})
