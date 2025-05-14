import { s as setupSeoMeta, _ as _sfc_main$3 } from './seo-BNkHY44x.mjs';
import { mergeProps, unref, useSSRContext } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
import { b as useNuxtApp, e as useI18n } from './server.mjs';
import { u as useSeoMeta } from './index-BR4-xsG4.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main$2 = {
  __name: "HotItem",
  __ssrInlineRender: true,
  props: {
    title: String,
    icon: String,
    href: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        class: "flex flex-col items-center p-4 rounded-xl hover:bg-primary-50 transition-colors group"
      }, _attrs))}><div class="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors"><img${ssrRenderAttr("src", __props.icon)}${ssrRenderAttr("alt", __props.title)} class="w-6 h-6 text-primary-700"></div><span class="mt-3 font-medium text-slate-700 group-hover:text-primary-700">${ssrInterpolate(__props.title)}</span></a>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/HotItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "features": {
          "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Features" } },
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Advantages" } },
          "secure": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Security" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secure & Reliable" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "All tools run locally in your browser. Your data never leaves your device, ensuring complete privacy and security." } }
          },
          "efficient": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Speed" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fast & Convenient" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clean, intuitive interface with no software installation required. Ready to use instantly to boost your productivity." } }
          },
          "free": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Free" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completely Free" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "All tools are available at no cost, with no ads or interruptions, providing a clean experience for both developers and regular users." } }
          }
        }
      },
      "zh": {
        "features": {
          "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u529F\u80FD\u7279\u70B9" } },
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6211\u4EEC\u7684\u4F18\u52BF" } },
          "secure": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B89\u5168" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B89\u5168\u53EF\u9760" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6240\u6709\u5DE5\u5177\u5747\u5728\u672C\u5730\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u4FDD\u8BC1\u60A8\u7684\u4FE1\u606F\u5B89\u5168\u3002" } }
          },
          "efficient": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5FEB\u901F" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9AD8\u6548\u4FBF\u6377" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7B80\u6D01\u76F4\u89C2\u7684\u754C\u9762\u8BBE\u8BA1\uFF0C\u65E0\u9700\u5B89\u88C5\u4EFB\u4F55\u8F6F\u4EF6\uFF0C\u5373\u5F00\u5373\u7528\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002" } }
          },
          "free": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u514D\u8D39" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B8C\u5168\u514D\u8D39" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6240\u6709\u5DE5\u5177\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u65E0\u5E7F\u544A\u5E72\u6270\uFF0C\u4E3A\u5F00\u53D1\u8005\u548C\u666E\u901A\u7528\u6237\u63D0\u4F9B\u7EAF\u51C0\u4F53\u9A8C\u3002" } }
          }
        }
      }
    }
  });
}
const _sfc_main$1 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mb-16" }, _attrs))}><div class="flex items-center mb-6"><img src="https://unpkg.com/lucide-static@latest/icons/square-check.svg" alt="{{ t(&#39;features.alt&#39;) }}" class="w-5 h-5 text-primary-600 mr-2"><h2 class="text-2xl font-bold">${ssrInterpolate(unref(t)("features.title"))}</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-md"><div class="flex items-center text-primary-600 mb-4"><img src="https://unpkg.com/lucide-static@latest/icons/shield.svg" alt="{{ t(&#39;features.secure.alt&#39;) }}" class="w-8 h-8"><h3 class="text-lg font-semibold ml-3">${ssrInterpolate(unref(t)("features.secure.title"))}</h3></div><p class="text-slate-600">${ssrInterpolate(unref(t)("features.secure.description"))}</p></div><div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-md"><div class="flex items-center text-primary-600 mb-4"><img src="https://unpkg.com/lucide-static@latest/icons/zap.svg" alt="{{ t(&#39;features.efficient.alt&#39;) }}" class="w-8 h-8"><h3 class="text-lg font-semibold ml-3">${ssrInterpolate(unref(t)("features.efficient.title"))}</h3></div><p class="text-slate-600">${ssrInterpolate(unref(t)("features.efficient.description"))}</p></div><div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-md"><div class="flex items-center text-primary-600 mb-4"><img src="https://unpkg.com/lucide-static@latest/icons/infinity.svg" alt="{{ t(&#39;features.free.alt&#39;) }}" class="w-8 h-8"><h3 class="text-lg font-semibold ml-3">${ssrInterpolate(unref(t)("features.free.title"))}</h3></div><p class="text-slate-600">${ssrInterpolate(unref(t)("features.free.description"))}</p></div></div></section>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/Features.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online Tools Collection" } },
        "metaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online Tools Collection - Free and Efficient Tools" } },
        "hero": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Practical Online Tools Collection" } },
          "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Free, efficient, and secure online tools to make your daily work more convenient" } }
        },
        "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search" } },
        "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search tools..." } },
        "popularTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Popular Tools" } },
        "categories": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Categories" } },
          "encoding": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding & Encryption" } }
          },
          "parse": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parsing Tools" } }
          },
          "converter": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conversion Tools" } }
          }
        },
        "tools": {
          "md5": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 Encryption" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 encryption and decryption" } }
          },
          "base64": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encoding" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 encoding and decoding" } }
          },
          "urlParser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse different components of URLs" } }
          },
          "urlCoder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode and decode special characters in URLs" } }
          },
          "hmac": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate HMAC authentication codes" } }
          },
          "baseConverter": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base Converter" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convert between binary, octal, decimal and hexadecimal" } }
          }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online Tools Collection - Free Developer Tools" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Free and efficient online developer tools collection. Including MD5, Base64, URL parser, HMAC generator and more tools to make your development work easier." } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "online tools, developer tools, free tools, MD5, Base64, URL encoder, HMAC" } },
          "author": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tools100" } },
          "ogTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online Tools Collection - Free Developer Tools" } },
          "ogDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collection of free online developer tools for encoding, encryption, parsing and more" } },
          "twitterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online Tools Collection - Developer Tools" } },
          "twitterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Free online tools for developers - MD5, Base64, URL tools and more" } },
          "canonical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "https://tools100.dev" } }
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B9E\u7528\u5728\u7EBF\u5DE5\u5177\u96C6\u5408" } },
        "metaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B9E\u7528\u5728\u7EBF\u5DE5\u5177\u96C6\u5408 - \u514D\u8D39\u9AD8\u6548\u7684\u5DE5\u5177" } },
        "hero": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B9E\u7528\u5728\u7EBF\u5DE5\u5177\u96C6\u5408" } },
          "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u514D\u8D39\u3001\u9AD8\u6548\u3001\u5B89\u5168\u7684\u5728\u7EBF\u5DE5\u5177\uFF0C\u8BA9\u60A8\u7684\u65E5\u5E38\u5DE5\u4F5C\u66F4\u52A0\u4FBF\u6377" } }
        },
        "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u641C\u7D22" } },
        "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u641C\u7D22\u5DE5\u5177..." } },
        "popularTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u70ED\u95E8\u5DE5\u5177" } },
        "categories": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5DE5\u5177\u5206\u7C7B" } },
          "encoding": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801\u4E0E\u52A0\u5BC6" } }
          },
          "parse": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790\u5DE5\u5177" } }
          },
          "converter": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F6C\u6362\u5DE5\u5177" } }
          }
        },
        "tools": {
          "md5": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 \u52A0\u5BC6" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 \u52A0\u5BC6\u4E0E\u89E3\u5BC6" } }
          },
          "base64": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801\u4E0E\u89E3\u7801" } }
          },
          "urlParser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790 URL \u5404\u4E2A\u7EC4\u6210\u90E8\u5206" } }
          },
          "urlCoder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F51\u5740\u7279\u6B8A\u5B57\u7B26\u7F16\u89E3\u7801" } }
          },
          "hmac": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BC6\u94A5\u76F8\u5173\u54C8\u5E0C\u8BA4\u8BC1\u7801" } }
          },
          "baseConverter": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8FDB\u5236\u8F6C\u6362\u5DE5\u5177" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E8C\u8FDB\u5236/\u516B\u8FDB\u5236/\u5341\u8FDB\u5236/\u5341\u516D\u8FDB\u5236\u8F7B\u677E\u8F6C\u6362" } }
          }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u7EBF\u5DE5\u5177\u96C6\u5408 - \u514D\u8D39\u5F00\u53D1\u8005\u5DE5\u5177" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u514D\u8D39\u3001\u9AD8\u6548\u3001\u5B89\u5168\u7684\u5728\u7EBF\u5F00\u53D1\u5DE5\u5177\u96C6\u5408\u3002\u5305\u542BMD5\u52A0\u5BC6\u3001Base64\u7F16\u7801\u3001URL\u89E3\u6790\u3001HMAC\u751F\u6210\u7B49\u5B9E\u7528\u5DE5\u5177\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u5DE5\u4F5C\u66F4\u52A0\u4FBF\u6377\u3002" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u7EBF\u5DE5\u5177, \u5F00\u53D1\u8005\u5DE5\u5177, \u514D\u8D39\u5DE5\u5177, MD5, Base64, URL\u7F16\u7801, HMAC" } },
          "author": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tools100" } },
          "ogTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u7EBF\u5DE5\u5177\u96C6\u5408 - \u514D\u8D39\u5F00\u53D1\u8005\u5DE5\u5177" } },
          "ogDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u96C6\u5408\u7F16\u7801\u3001\u52A0\u5BC6\u3001\u89E3\u6790\u7B49\u591A\u79CD\u5728\u7EBF\u5F00\u53D1\u5DE5\u5177" } },
          "twitterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u7EBF\u5DE5\u5177\u96C6\u5408 - \u5F00\u53D1\u8005\u5DE5\u5177" } },
          "twitterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u514D\u8D39\u5728\u7EBF\u5F00\u53D1\u5DE5\u5177 - MD5\u3001Base64\u3001URL\u5DE5\u5177\u7B49" } },
          "canonical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "https://tools100.dev" } }
        }
      }
    }
  });
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $localePath } = useNuxtApp();
    const { t } = useI18n({
      useScope: "local"
    });
    setupSeoMeta(useSeoMeta, t);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tools_card = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 pt-8 max-w-7xl" }, _attrs))}><section class="py-10 md:py-16"><div class="text-center"><h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-indigo-600 text-transparent bg-clip-text">${ssrInterpolate(unref(t)("hero.title"))}</h1><p class="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">${ssrInterpolate(unref(t)("hero.subtitle"))}</p><div class="relative max-w-2xl mx-auto"><div class="flex items-center rounded-full border border-slate-300 bg-white shadow-sm overflow-hidden"><img src="https://unpkg.com/lucide-static@latest/icons/search.svg"${ssrRenderAttr("alt", unref(t)("search"))} class="w-5 h-5 ml-4 text-slate-400"><input type="text"${ssrRenderAttr("placeholder", unref(t)("searchPlaceholder"))} class="w-full px-4 py-3 focus:outline-none"></div></div></div></section><section class="mt-6 mb-16"><div class="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-md p-6"><div class="flex items-center mb-6"><img src="https://unpkg.com/lucide-static@latest/icons/star.svg"${ssrRenderAttr("alt", unref(t)("popularTools"))} class="w-5 h-5 text-amber-500"><h2 class="text-xl font-bold ml-2">${ssrInterpolate(unref(t)("popularTools"))}</h2></div><div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: unref(t)("tools.md5.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/key-square.svg",
        href: unref($localePath)("md5")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: unref(t)("tools.base64.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/code.svg",
        href: unref($localePath)("base64")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: unref(t)("tools.urlParser.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        href: unref($localePath)("url-parser")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: unref(t)("tools.urlCoder.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        href: unref($localePath)("url-coder")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: unref(t)("tools.hmac.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/key.svg",
        href: unref($localePath)("hmac")
      }, null, _parent));
      _push(`</div></div></section><section class="mb-16"><div class="flex items-center mb-8"><img src="https://unpkg.com/lucide-static@latest/icons/list.svg"${ssrRenderAttr("alt", unref(t)("categories.title"))} class="w-5 h-5 text-primary-600 mr-2"><h2 class="text-2xl font-bold">${ssrInterpolate(unref(t)("categories.title"))}</h2></div><div class="mb-10"><div class="flex items-center mb-4"><div class="w-1 h-8 bg-primary-500 rounded-full mr-3"></div><h3 class="text-xl font-semibold">${ssrInterpolate(unref(t)("categories.encoding.title"))}</h3></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_tools_card, {
        title: unref(t)("tools.md5.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/key-square.svg",
        desc: unref(t)("tools.md5.desc"),
        href: unref($localePath)("md5")
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        title: unref(t)("tools.base64.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/code.svg",
        desc: unref(t)("tools.base64.desc"),
        href: unref($localePath)("base64")
      }, null, _parent));
      _push(`<a${ssrRenderAttr("href", unref($localePath)("url-coder"))} class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center"><div class="bg-primary-50 p-3 rounded-lg"><img src="https://unpkg.com/lucide-static@latest/icons/link.svg" alt="URL" class="w-6 h-6 text-primary-600"></div><div class="ml-3"><h3 class="font-medium text-slate-800">${ssrInterpolate(unref(t)("tools.urlCoder.title"))}</h3><p class="text-xs text-slate-500 mt-0.5">${ssrInterpolate(unref(t)("tools.urlCoder.desc"))}</p></div></a><a${ssrRenderAttr("href", unref($localePath)("hmac"))} class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center"><div class="bg-primary-50 p-3 rounded-lg"><img src="https://unpkg.com/lucide-static@latest/icons/key.svg" alt="HMAC" class="w-6 h-6 text-primary-600"></div><div class="ml-3"><h3 class="font-medium text-slate-800">${ssrInterpolate(unref(t)("tools.hmac.title"))}</h3><p class="text-xs text-slate-500 mt-0.5">${ssrInterpolate(unref(t)("tools.hmac.desc"))}</p></div></a></div></div><div class="mb-10"><div class="flex items-center mb-4"><div class="w-1 h-8 bg-indigo-500 rounded-full mr-3"></div><h3 class="text-xl font-semibold">${ssrInterpolate(unref(t)("categories.parse.title"))}</h3></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_tools_card, {
        title: unref(t)("tools.urlParser.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        desc: unref(t)("tools.urlParser.desc"),
        href: unref($localePath)("json")
      }, null, _parent));
      _push(`</div></div><div class="mb-10"><div class="flex items-center mb-4"><div class="w-1 h-8 bg-indigo-500 rounded-full mr-3"></div><h3 class="text-xl font-semibold">${ssrInterpolate(unref(t)("categories.converter.title"))}</h3></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_tools_card, {
        title: unref(t)("tools.baseConverter.title"),
        icon: "https://unpkg.com/lucide-static@latest/icons/arrow-right-left.svg",
        desc: unref(t)("tools.baseConverter.desc"),
        href: unref($localePath)("base-converter")
      }, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
if (typeof block0 === "function") block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CnTEdrbI.mjs.map
