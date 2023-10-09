// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-security'],
  security: {
    enabled: true,
    nonce: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': ["'nonce-{{nonce}}'", "'strict-dynamic'"],
      },
    },
  },
})
