import { _ as __nuxt_component_0 } from './full-30hiHSHR.mjs';
import { _ as _sfc_main$4 } from './index-C-qkCW1q.mjs';
import { withCtx, unref, createVNode, useSSRContext, ref, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
import { e as useI18n, b as useNuxtApp } from './server.mjs';
import { s as setupSeoMeta, _ as _sfc_main$5 } from './seo-BNkHY44x.mjs';
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

function block0$3(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder/Decoder" } },
        "input": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input Text" } },
          "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter text to encode or URL encoded string to decode..." } }
        },
        "buttons": {
          "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paste" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } },
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } },
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode" } },
          "decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decode" } }
        },
        "output": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Result" } }
        },
        "errors": {
          "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding error, please check input content" } },
          "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decoding error, please ensure input is valid URL encoded string" } }
        }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801/\u89E3\u7801\u5DE5\u5177" } },
        "input": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u6587\u672C" } },
          "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u8981\u7F16\u7801\u7684\u6587\u672C\u6216\u8981\u89E3\u7801\u7684 URL \u7F16\u7801\u5B57\u7B26\u4E32..." } }
        },
        "buttons": {
          "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7C98\u8D34" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236" } },
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6E05\u7A7A" } },
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801" } },
          "decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u7801" } }
        },
        "output": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u51FA\u7ED3\u679C" } }
        },
        "errors": {
          "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9" } },
          "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u7801\u9519\u8BEF\uFF0C\u8BF7\u786E\u4FDD\u8F93\u5165\u662F\u6709\u6548\u7684 URL \u7F16\u7801\u5B57\u7B26\u4E32" } }
        }
      }
    }
  });
}
const _sfc_main$3 = {
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    const inputText = ref("");
    const outputText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 space-y-8" }, _attrs))}><div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8"><div class="space-y-6"><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("input.label"))}</label><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg" alt="\u7C98\u8D34" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("buttons.paste"))}</button><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="\u590D\u5236" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("buttons.copy"))}</button><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg" alt="\u6E05\u7A7A" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("buttons.clear"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-y p-3 text-slate-800 font-mono text-sm"${ssrRenderAttr("placeholder", unref(t)("input.placeholder"))}>${ssrInterpolate(inputText.value)}</textarea></div><div class="flex justify-center space-x-4"><button class="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/arrow-down.svg" alt="\u7F16\u7801" class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("buttons.encode"))}</button><button class="px-6 py-2.5 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/arrow-down.svg" alt="\u89E3\u7801" class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("buttons.decode"))}</button></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("output.label"))}</label><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="\u590D\u5236" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("buttons.copy"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 font-mono text-sm" readonly>${ssrInterpolate(outputText.value)}</textarea></div></div></div></div>`);
    };
  }
};
if (typeof block0$3 === "function") block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-coder/components/main.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
function block0$2(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "base64": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encoding" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convert text to/from Base64" } }
        },
        "md5": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 Hash" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate MD5 hash from text" } }
        },
        "sha": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA Encryption" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA-1/256/512 encryption tools" } }
        },
        "url": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL parsing and encoding" } }
        },
        "hmac": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hash-based message authentication code" } }
        }
      },
      "zh": {
        "base64": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u672C\u4E0EBase64\u76F8\u4E92\u8F6C\u6362" } }
        },
        "md5": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 \u54C8\u5E0C" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u751F\u6210\u6587\u672C\u7684MD5\u54C8\u5E0C\u503C" } }
        },
        "sha": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA \u52A0\u5BC6" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA-1/256/512\u52A0\u5BC6\u5DE5\u5177" } }
        },
        "url": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u548C\u7F16\u7801" } }
        },
        "hmac": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BC6\u94A5\u76F8\u5173\u54C8\u5E0C\u8BA4\u8BC1\u7801" } }
        }
      }
    }
  });
}
const _sfc_main$2 = {
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const { $localePath } = useNuxtApp();
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tools_card = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("base64"),
        title: unref(t)("base64.title"),
        desc: unref(t)("base64.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/code.svg",
        alt: "Base64"
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("md5"),
        title: unref(t)("md5.title"),
        desc: unref(t)("md5.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/key-square.svg",
        alt: "md5"
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("url-parser"),
        title: unref(t)("url.title"),
        desc: unref(t)("url.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        alt: "URL Parser"
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("hmac"),
        title: unref(t)("hmac.title"),
        desc: unref(t)("hmac.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/key.svg",
        alt: "HMAC"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
if (typeof block0$2 === "function") block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-coder/components/tools.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder/Decoder Tool Instructions" } },
        "what-is-url-encode-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What is URL Encoding?" } },
        "what-is-url-encode-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL encoding converts characters that are not allowed in URLs into a format that can be transmitted over the Internet. It replaces unsafe ASCII characters with a '%' followed by two hexadecimal digits. This process is also known as percent-encoding." } },
        "use-cases-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Common Use Cases" } },
        "use-cases": {
          "special-chars": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Safely including special characters in URLs" } },
          "query-params": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding URL query parameters and values" } },
          "unicode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Handling non-ASCII characters and Unicode in URLs" } },
          "forms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Processing form data for web submissions" } }
        },
        "tool-features-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tool Features" } },
        "tool-features": {
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode text to URL-safe format" } },
          "decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decode URL-encoded text back to original form" } },
          "batch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Process multiple URLs simultaneously" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quick copy results to clipboard" } }
        },
        "tips-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usage Tips" } },
        "tips-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Some characters like space, ?, &, =, %, and + need special handling in URLs. This tool helps you properly encode these characters for use in URLs while ensuring they can be correctly decoded by web servers. All processing is done locally in your browser." } }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801/\u89E3\u7801\u5DE5\u5177\u4F7F\u7528\u8BF4\u660E" } },
        "what-is-url-encode-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4EC0\u4E48\u662F URL \u7F16\u7801\uFF1F" } },
        "what-is-url-encode-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'URL \u7F16\u7801\u5C06 URL \u4E2D\u4E0D\u5141\u8BB8\u4F7F\u7528\u7684\u5B57\u7B26\u8F6C\u6362\u4E3A\u53EF\u4EE5\u5728\u4E92\u8054\u7F51\u4E0A\u4F20\u8F93\u7684\u683C\u5F0F\u3002\u5B83\u7528"%"\u7B26\u53F7\u540E\u8DDF\u4E24\u4E2A\u5341\u516D\u8FDB\u5236\u6570\u5B57\u6765\u66FF\u4EE3\u4E0D\u5B89\u5168\u7684 ASCII \u5B57\u7B26\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u4E5F\u88AB\u79F0\u4E3A\u767E\u5206\u53F7\u7F16\u7801\u3002' } },
        "use-cases-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5E38\u89C1\u4F7F\u7528\u573A\u666F" } },
        "use-cases": {
          "special-chars": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728 URL \u4E2D\u5B89\u5168\u5730\u5305\u542B\u7279\u6B8A\u5B57\u7B26" } },
          "query-params": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801 URL \u67E5\u8BE2\u53C2\u6570\u548C\u503C" } },
          "unicode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5904\u7406 URL \u4E2D\u7684\u975E ASCII \u5B57\u7B26\u548C Unicode" } },
          "forms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5904\u7406\u7F51\u9875\u8868\u5355\u63D0\u4EA4\u6570\u636E" } }
        },
        "tool-features-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u672C\u5DE5\u5177\u529F\u80FD" } },
        "tool-features": {
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5C06\u6587\u672C\u7F16\u7801\u4E3A URL \u5B89\u5168\u683C\u5F0F" } },
          "decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5C06 URL \u7F16\u7801\u7684\u6587\u672C\u89E3\u7801\u56DE\u539F\u59CB\u5F62\u5F0F" } },
          "batch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u540C\u65F6\u5904\u7406\u591A\u4E2A URL" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5FEB\u901F\u590D\u5236\u7ED3\u679C\u5230\u526A\u8D34\u677F" } }
        },
        "tips-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4F7F\u7528\u63D0\u793A" } },
        "tips-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u67D0\u4E9B\u5B57\u7B26\u5982\u7A7A\u683C\u3001?\u3001&\u3001=\u3001% \u548C + \u5728 URL \u4E2D\u9700\u8981\u7279\u6B8A\u5904\u7406\u3002\u672C\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u60A8\u6B63\u786E\u7F16\u7801\u8FD9\u4E9B\u5B57\u7B26\u4EE5\u5728 URL \u4E2D\u4F7F\u7528\uFF0C\u540C\u65F6\u786E\u4FDD\u7F51\u7EDC\u670D\u52A1\u5668\u80FD\u591F\u6B63\u786E\u89E3\u7801\u3002\u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\u3002" } }
      }
    }
  });
}
const _sfc_main$1 = {
  __name: "description",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("title"))}</h3><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg"${ssrRenderAttr("alt", unref(t)("what-is-url-encode-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("what-is-url-encode-title"))}</p><p>${ssrInterpolate(unref(t)("what-is-url-encode-content"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/help-circle.svg"${ssrRenderAttr("alt", unref(t)("use-cases-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("use-cases-title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("use-cases.special-chars"))}</li><li>${ssrInterpolate(unref(t)("use-cases.query-params"))}</li><li>${ssrInterpolate(unref(t)("use-cases.unicode"))}</li><li>${ssrInterpolate(unref(t)("use-cases.forms"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/tool.svg"${ssrRenderAttr("alt", unref(t)("tool-features-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("tool-features-title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("tool-features.encode"))}</li><li>${ssrInterpolate(unref(t)("tool-features.decode"))}</li><li>${ssrInterpolate(unref(t)("tool-features.batch"))}</li><li>${ssrInterpolate(unref(t)("tool-features.copy"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/lightbulb.svg"${ssrRenderAttr("alt", unref(t)("tips-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("tips-title"))}</p><p>${ssrInterpolate(unref(t)("tips-content"))}</p></div></div></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-coder/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder/Decoder" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encode Online" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encode Online is a free online tool to encode and decode Base64 strings." } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL, Encode, Decode, Online, Tool" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encode" } }
        }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801/\u89E3\u7801\u5DE5\u5177" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801\u5728\u7EBF" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801\u5728\u7EBF\u662F\u4E00\u4E2A\u514D\u8D39\u7684\u5728\u7EBF\u5DE5\u5177\uFF0C\u7528\u4E8E\u7F16\u7801\u548C\u89E3\u7801 URL \u5B57\u7B26\u4E32\u3002" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL, \u7F16\u7801, \u89E3\u7801, \u5728\u7EBF, \u5DE5\u5177" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801" } }
        }
      }
    }
  });
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    setupSeoMeta(useSeoMeta, t);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_page_layout_full = __nuxt_component_0;
      const _component_tools_title = _sfc_main$4;
      _push(ssrRenderComponent(_component_page_layout_full, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_tools_title, {
              title: unref(t)("name"),
              icon: "https://unpkg.com/lucide-static@latest/icons/link.svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_tools_title, {
                title: unref(t)("name"),
                icon: "https://unpkg.com/lucide-static@latest/icons/link.svg"
              }, null, 8, ["title"])
            ];
          }
        }),
        main: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3)
            ];
          }
        }),
        tools: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
if (typeof block0 === "function") block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-coder/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CpoOAMgE.mjs.map
