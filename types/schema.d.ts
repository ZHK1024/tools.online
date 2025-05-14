import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["/Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: {
               lastmod: string,
            },

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },

      autoI18n: {
         differentDomains: boolean,

         defaultLocale: string,

         locales: Array<{

         }>,

         strategy: string,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },
  }
  interface PublicRuntimeConfig {
   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<{

      }>,

      locales: {
         en: {
            domain: any,
         },

         zh: {
            domain: any,
         },
      },

      detectBrowserLanguage: {
         alwaysRedirect: boolean,

         cookieCrossOrigin: boolean,

         cookieDomain: any,

         cookieKey: string,

         cookieSecure: boolean,

         fallbackLocale: string,

         redirectOn: string,

         useCookie: boolean,
      },

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,
      },

      multiDomainLocales: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }