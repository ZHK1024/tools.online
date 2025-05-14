import { s as setupSeoMeta, _ as _sfc_main$3 } from "./seo-BNkHY44x.js";
import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { e as useI18n, b as useNuxtApp } from "../server.mjs";
import { a as useSeoMeta } from "./index-BR4-xsG4.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "consola";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
          "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "功能特点" } },
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "我们的优势" } },
          "secure": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "安全" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "安全可靠" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "所有工具均在本地浏览器中运行，数据不会上传至服务器，保证您的信息安全。" } }
          },
          "efficient": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "快速" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "高效便捷" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "简洁直观的界面设计，无需安装任何软件，即开即用，提高工作效率。" } }
          },
          "free": {
            "alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "免费" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "完全免费" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "所有工具完全免费使用，无广告干扰，为开发者和普通用户提供纯净体验。" } }
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
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "实用在线工具集合" } },
        "metaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "实用在线工具集合 - 免费高效的工具" } },
        "hero": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "实用在线工具集合" } },
          "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "免费、高效、安全的在线工具，让您的日常工作更加便捷" } }
        },
        "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "搜索" } },
        "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "搜索工具..." } },
        "popularTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "热门工具" } },
        "categories": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "工具分类" } },
          "encoding": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编码与加密" } }
          },
          "parse": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析工具" } }
          },
          "converter": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "转换工具" } }
          }
        },
        "tools": {
          "md5": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 加密" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 加密与解密" } }
          },
          "base64": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码与解码" } }
          },
          "urlParser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析 URL 各个组成部分" } }
          },
          "urlCoder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 编码" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "网址特殊字符编解码" } }
          },
          "hmac": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "密钥相关哈希认证码" } }
          },
          "baseConverter": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换工具" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "二进制/八进制/十进制/十六进制轻松转换" } }
          }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在线工具集合 - 免费开发者工具" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "免费、高效、安全的在线开发工具集合。包含MD5加密、Base64编码、URL解析、HMAC生成等实用工具，让您的开发工作更加便捷。" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在线工具, 开发者工具, 免费工具, MD5, Base64, URL编码, HMAC" } },
          "author": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tools100" } },
          "ogTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在线工具集合 - 免费开发者工具" } },
          "ogDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "集合编码、加密、解析等多种在线开发工具" } },
          "twitterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在线工具集合 - 开发者工具" } },
          "twitterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "免费在线开发工具 - MD5、Base64、URL工具等" } },
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CnTEdrbI.js.map
