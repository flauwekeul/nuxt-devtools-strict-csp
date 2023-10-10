// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // this ensures nuxt-security adds the nonce attribute to the devtools inline script tag
  modules: ['@nuxt/devtools', 'nuxt-security'],
  security: {
    enabled: true,
    nonce: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': ["'nonce-{{nonce}}'", "'strict-dynamic'"],
      },
      // disabling this header makes the devtools iframe work
      // the default value is 'require-corp'
      // see: https://nuxt-security.vercel.app/security/headers#cross-origin-embedder-policy
      crossOriginEmbedderPolicy: false,
    },
  },
})
