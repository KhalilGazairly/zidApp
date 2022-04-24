import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'static',
  router: {
     base: '/zidApp/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ZidApp Market',
    title: 'ZidApp Market',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuetify.js',
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // i18n module configuration
  i18n: {
    defaultLocale: 'en',
    seo:true,
    locales:
    [
      { code: 'en',name: 'الانجليزية',  iso: 'en', file: 'en.json', dir: 'ltr' },
      { code: 'ar',name: 'Arabic', iso: 'ar', file: 'ar.json', dir: 'rtl' },
    ],
    lazy: true,
    langDir: 'lang/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
