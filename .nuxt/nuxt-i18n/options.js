

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","name":"الانجليزية","iso":"en","file":"en.json","dir":"ltr"},{"code":"ar","name":"Arabic","iso":"ar","file":"ar.json","dir":"rtl"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/khalil-gazairly/workspace/zidapp/hr/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: true,
  normalizedLocales: [{"code":"en","name":"الانجليزية","iso":"en","file":"en.json","dir":"ltr"},{"code":"ar","name":"Arabic","iso":"ar","file":"ar.json","dir":"rtl"}],
  localeCodes: ["en","ar"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.json': () => import('../../lang/en.json' /* webpackChunkName: "lang-en.json" */),
  'ar.json': () => import('../../lang/ar.json' /* webpackChunkName: "lang-ar.json" */),
}
