import { _ as __nuxt_component_0 } from './full-30hiHSHR.mjs';
import { _ as _sfc_main$4 } from './index-C-qkCW1q.mjs';
import { withCtx, unref, createVNode, useSSRContext, ref, reactive, watch, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
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

const isUrlEncoded = (str) => {
  try {
    const result = decodeURIComponent(str);
    return result !== str;
  } catch (error) {
    return false;
  }
};
function block0$3(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "btn.parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse" } },
        "btn.copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } },
        "btn.paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paste" } },
        "btn.delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete" } },
        "btn.encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode" } },
        "btn.decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decode" } },
        "btn.clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } },
        "URL.Protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Protocol" } },
        "URL.Hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hostname" } },
        "URL.Port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port" } },
        "URL.Path": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Path" } },
        "URL.QueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query Parameters" } },
        "URL.Fragment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fragment" } },
        "Params.add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add Parameter" } },
        "Params.update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Update URL" } },
        "input.label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
        "placeholder": {
          "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter URL to parse..." } },
          "protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "https" } },
          "hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "example.com" } },
          "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "443" } },
          "path": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "/path/to/resource" } },
          "fragment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "section-id" } },
          "paramName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter name" } },
          "paramValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter value" } }
        },
        "messages": {
          "parseError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL parsing failed. Please check the URL format." } },
          "clipboardError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cannot access clipboard. Please paste manually." } },
          "emptyUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please enter a URL." } },
          "decodeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decoding failed." } },
          "updateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL update failed. Please check your input." } }
        }
      },
      "zh": {
        "btn.parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790" } },
        "btn.copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236" } },
        "btn.paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7C98\u8D34" } },
        "btn.delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5220\u9664" } },
        "btn.encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801" } },
        "btn.decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u7801" } },
        "btn.clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6E05\u7A7A" } },
        "URL.Protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u534F\u8BAE" } },
        "URL.Hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E3B\u673A\u540D" } },
        "URL.Port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7AEF\u53E3" } },
        "URL.Path": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8DEF\u5F84" } },
        "URL.QueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u67E5\u8BE2\u53C2\u6570" } },
        "URL.Fragment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7247\u6BB5\u6807\u8BC6\u7B26" } },
        "Params.add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6DFB\u52A0\u53C2\u6570" } },
        "Params.update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u66F4\u65B0URL" } },
        "input.label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165URL" } },
        "placeholder": {
          "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8BF7\u8F93\u5165\u8981\u89E3\u6790\u7684URL..." } },
          "protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "https" } },
          "hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "example.com" } },
          "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "443" } },
          "path": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "/path/to/resource" } },
          "fragment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "section-id" } },
          "paramName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u53C2\u6570\u540D" } },
          "paramValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u53C2\u6570\u503C" } }
        },
        "messages": {
          "parseError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u7684 URL \u683C\u5F0F\u662F\u5426\u6B63\u786E" } },
          "clipboardError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u65E0\u6CD5\u8BBF\u95EE\u526A\u8D34\u677F\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34" } },
          "emptyUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8BF7\u8F93\u5165URL" } },
          "decodeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u7801\u5931\u8D25" } },
          "updateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u7684\u53C2\u6570" } }
        }
      }
    }
  });
}
const _sfc_main$3 = {
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const urlInput = ref("");
    const parsedUrl = reactive({
      protocol: "",
      hostname: "",
      port: "",
      pathname: "",
      hash: ""
    });
    const queryParams = ref([]);
    watch(urlInput, (newUrl) => {
      if (newUrl && newUrl.trim()) {
        parseUrl(newUrl);
      }
    }, { debounce: 500 });
    const parseUrl = (url) => {
      try {
        const urlObj = new URL(url);
        parsedUrl.protocol = urlObj.protocol.replace(":", "");
        parsedUrl.hostname = urlObj.hostname;
        parsedUrl.port = urlObj.port || (urlObj.protocol === "https:" ? "443" : "80");
        parsedUrl.pathname = urlObj.pathname;
        parsedUrl.hash = urlObj.hash;
        queryParams.value = [];
        urlObj.searchParams.forEach((value, name) => {
          queryParams.value.push({
            name,
            value,
            encoded: isUrlEncoded(value)
          });
        });
        return true;
      } catch (error) {
        console.error("URL \u89E3\u6790\u9519\u8BEF:", error);
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 space-y-8" }, _attrs))}><div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6"><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("input.label"))}</label><div class="flex space-x-2"><button id="pasteBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg" alt="\u7C98\u8D34" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("btn.paste"))}</button><button id="clearBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/trash.svg"${ssrRenderAttr("alt", unref(t)("btn.clear"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("btn.clear"))}</button></div></div><input type="text" id="urlInput"${ssrRenderAttr("value", urlInput.value)} class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 p-3 text-sm"${ssrRenderAttr("placeholder", unref(t)("placeholder.url"))}></div><div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4"><div class="md:col-span-3"><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Protocol"))}</label><div class="flex items-center space-x-2"><input type="text" id="protocol"${ssrRenderAttr("value", parsedUrl.protocol)}${ssrRenderAttr("placeholder", unref(t)("placeholder.protocol"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div class="md:col-span-6"><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Hostname"))}</label><div class="flex items-center space-x-2"><input type="text" id="hostname"${ssrRenderAttr("value", parsedUrl.hostname)}${ssrRenderAttr("placeholder", unref(t)("placeholder.hostname"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div class="md:col-span-3"><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Port"))}</label><div class="flex items-center space-x-2"><input type="text" id="port"${ssrRenderAttr("value", parsedUrl.port)}${ssrRenderAttr("placeholder", unref(t)("placeholder.port"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div></div><div><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Path"))}</label><div class="flex items-center space-x-2"><input type="text" id="path"${ssrRenderAttr("value", parsedUrl.pathname)}${ssrRenderAttr("placeholder", unref(t)("placeholder.path"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("URL.QueryParams"))}</label><div class="space-x-2"><button class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/plus.svg"${ssrRenderAttr("alt", unref(t)("Params.add"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("Params.add"))}</button></div></div><div class="space-y-2">`);
      if (queryParams.value.length === 0) {
        _push(`<div class="flex flex-wrap items-center gap-2"><div class="flex items-center space-x-2 flex-1 min-w-0"><input type="text" class="w-1/3 rounded border border-slate-300 p-2 text-sm"${ssrRenderAttr("placeholder", unref(t)("placeholder.paramName"))}><span class="text-slate-400">=</span><input type="text" class="flex-1 min-w-0 rounded border border-slate-300 p-2 text-sm"${ssrRenderAttr("placeholder", unref(t)("placeholder.paramValue"))}></div><div class="flex items-center gap-1"><button class="p-1.5 text-slate-400 hover:text-primary-600 flex-shrink-0 opacity-50 cursor-not-allowed"${ssrRenderAttr("title", unref(t)("btn.encode"))} disabled><img src="https://unpkg.com/lucide-static@latest/icons/code.svg"${ssrRenderAttr("alt", unref(t)("btn.encode"))} class="w-4 h-4"></button><button class="p-1.5 text-slate-400 hover:text-primary-600 flex-shrink-0 opacity-50 cursor-not-allowed"${ssrRenderAttr("title", unref(t)("btn.copy"))} disabled><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button><button class="p-1.5 text-slate-400 hover:text-red-600 flex-shrink-0 opacity-50 cursor-not-allowed"${ssrRenderAttr("title", unref(t)("btn.delete"))} disabled><img src="https://unpkg.com/lucide-static@latest/icons/trash-2.svg"${ssrRenderAttr("alt", unref(t)("btn.delete"))} class="w-4 h-4"></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(queryParams.value, (param, index) => {
        _push(`<div class="flex flex-wrap items-center gap-2"><div class="flex items-center space-x-2 flex-1 min-w-0"><input type="text"${ssrRenderAttr("value", param.name)} class="w-1/3 rounded border border-slate-300 p-2 text-sm"${ssrRenderAttr("placeholder", unref(t)("placeholder.paramName"))}><span class="text-slate-400">=</span><input type="text"${ssrRenderAttr("value", param.value)} class="flex-1 min-w-0 rounded border border-slate-300 p-2 text-sm"${ssrRenderAttr("placeholder", unref(t)("placeholder.paramValue"))}></div><div class="flex items-center gap-1"><button class="p-1.5 text-slate-400 hover:text-primary-600 flex-shrink-0"${ssrRenderAttr("title", param.encoded ? unref(t)("btn.decode") : unref(t)("btn.encode"))}><img src="https://unpkg.com/lucide-static@latest/icons/code.svg"${ssrRenderAttr("alt", param.encoded ? unref(t)("btn.decode") : unref(t)("btn.encode"))} class="w-4 h-4"></button><button class="p-1.5 text-slate-400 hover:text-primary-600 flex-shrink-0"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button><button class="p-1.5 text-slate-400 hover:text-red-600 flex-shrink-0"${ssrRenderAttr("title", unref(t)("btn.delete"))}><img src="https://unpkg.com/lucide-static@latest/icons/trash-2.svg"${ssrRenderAttr("alt", unref(t)("btn.delete"))} class="w-4 h-4"></button></div></div>`);
      });
      _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Fragment"))}</label><div class="flex items-center space-x-2"><input type="text" id="fragment"${ssrRenderAttr("value", parsedUrl.hash)}${ssrRenderAttr("placeholder", unref(t)("placeholder.fragment"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div class="pt-4"><button id="updateBtn" class="w-full px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"><img src="https://unpkg.com/lucide-static@latest/icons/refresh-cw.svg"${ssrRenderAttr("alt", unref(t)("Params.update"))} class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("Params.update"))}</button></div></div></div></div>`);
    };
  }
};
if (typeof block0$3 === "function") block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-parser/components/main.vue");
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
        "url": {
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL encoding and decoding tool" } }
          }
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
        "url": {
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u89E3\u7801" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u7F16\u7801\u548C\u89E3\u7801\u5DE5\u5177" } }
          }
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
        href: unref($localePath)("url-coder"),
        title: unref(t)("url.coder.title"),
        desc: unref(t)("url.coder.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        alt: "URL encode & decode"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-parser/components/tools.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "guide_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser Tool Guide" } },
        "info_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Information" } },
        "url_components_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Components Detail" } },
        "url_components_intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A complete URL (Uniform Resource Locator) typically consists of the following parts:" } },
        "protocol_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Protocol: " } },
        "protocol_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": " such as http, https, which specifies the communication rules between the browser and server" } },
        "hostname_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hostname: " } },
        "hostname_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": " such as www.example.com, which points to a specific server on the network" } },
        "port_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port: " } },
        "port_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": " such as :443, specifies the communication port to connect to the server, usually hidden by default" } },
        "path_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Path: " } },
        "path_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": " such as /blog/article, points to a specific resource on the server" } },
        "query_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query Parameters: " } },
        "query_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": " such as ?id=123&name=test, key-value pairs passed to the server" } },
        "fragment_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fragment Identifier: " } },
        "fragment_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": " such as #section1, points to a specific part of the page" } },
        "example_url_prefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Example URL:" } },
        "functions_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Functions" } },
        "functions_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser Tool Functions" } },
        "function_parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse URL components, clearly display protocol, hostname, path and other elements" } },
        "function_edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edit and copy individual components for easier development and debugging" } },
        "function_encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter encoding/decoding, automatically handle special characters and Unicode" } },
        "function_params": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add/remove/modify query parameters without manual position calculation" } },
        "function_generate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recombine and generate complete URLs, simplifying the building process" } },
        "function_validate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL validation, instant detection of format issues" } },
        "function_complex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Support complex URL structure analysis, suitable for API development and testing" } },
        "scenarios_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Use Cases" } },
        "scenarios_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Application Scenarios" } },
        "scenario_web_dev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Web developers analyzing and building API request URLs" } },
        "scenario_seo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SEO specialists analyzing website URL structures" } },
        "scenario_network": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Network engineers debugging URL-related issues" } },
        "scenario_pm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Product managers creating and sharing web links with parameters" } },
        "scenario_security": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Security analysts checking potential vulnerability parameters in URLs" } },
        "scenario_marketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketers creating and analyzing UTM parameter links" } },
        "conclusion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Whether you are a professional developer or everyday internet user, this URL parser tool can help you better understand and manipulate web address structures." } }
      },
      "zh": {
        "guide_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5DE5\u5177\u4F7F\u7528\u8BF4\u660E" } },
        "info_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8BF4\u660E" } },
        "url_components_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u7684\u7EC4\u6210\u90E8\u5206\u8BE6\u89E3" } },
        "url_components_intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E00\u4E2A\u5B8C\u6574\u7684URL\uFF08\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF09\u901A\u5E38\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\uFF1A" } },
        "protocol_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u534F\u8BAE\uFF08Protocol\uFF09\uFF1A" } },
        "protocol_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5982http\u3001https\uFF0C\u6307\u5B9A\u4E86\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u901A\u4FE1\u7684\u89C4\u5219" } },
        "hostname_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E3B\u673A\u540D\uFF08Hostname\uFF09\uFF1A" } },
        "hostname_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5982www.example.com\uFF0C\u6307\u5411\u7F51\u7EDC\u4E0A\u7684\u7279\u5B9A\u670D\u52A1\u5668" } },
        "port_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7AEF\u53E3\u53F7\uFF08Port\uFF09\uFF1A" } },
        "port_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5982:443\uFF0C\u6307\u5B9A\u8FDE\u63A5\u670D\u52A1\u5668\u7684\u901A\u4FE1\u7AEF\u53E3\uFF0C\u901A\u5E38\u9ED8\u8BA4\u4E3A\u9690\u85CF" } },
        "path_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8DEF\u5F84\uFF08Path\uFF09\uFF1A" } },
        "path_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5982/blog/article\uFF0C\u6307\u5411\u670D\u52A1\u5668\u4E0A\u7684\u5177\u4F53\u8D44\u6E90" } },
        "query_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u67E5\u8BE2\u53C2\u6570\uFF08Query Parameters\uFF09\uFF1A" } },
        "query_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5982?id=123&name=test\uFF0C\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u7684\u952E\u503C\u5BF9" } },
        "fragment_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7247\u6BB5\u6807\u8BC6\u7B26\uFF08Fragment\uFF09\uFF1A" } },
        "fragment_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5982#section1\uFF0C\u6307\u5411\u9875\u9762\u4E2D\u7684\u7279\u5B9A\u90E8\u5206" } },
        "example_url_prefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u793A\u4F8BURL:" } },
        "functions_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7528\u9014" } },
        "functions_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5DE5\u5177\u529F\u80FD" } },
        "function_parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790URL\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\uFF0C\u6E05\u6670\u663E\u793A\u534F\u8BAE\u3001\u4E3B\u673A\u540D\u3001\u8DEF\u5F84\u7B49\u5143\u7D20" } },
        "function_edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u8F91\u548C\u590D\u5236\u5355\u4E2A\u90E8\u5206\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8C03\u8BD5" } },
        "function_encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u53C2\u6570\u7F16\u7801/\u89E3\u7801\uFF0C\u81EA\u52A8\u5904\u7406\u7279\u6B8A\u5B57\u7B26\u548CUnicode" } },
        "function_params": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6DFB\u52A0/\u5220\u9664/\u4FEE\u6539\u67E5\u8BE2\u53C2\u6570\uFF0C\u65E0\u9700\u624B\u52A8\u8BA1\u7B97\u4F4D\u7F6E" } },
        "function_generate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u91CD\u65B0\u7EC4\u5408\u751F\u6210\u5B8C\u6574URL\uFF0C\u7B80\u5316\u6784\u5EFA\u8FC7\u7A0B" } },
        "function_validate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u6709\u6548\u6027\u9A8C\u8BC1\uFF0C\u5373\u65F6\u68C0\u6D4B\u683C\u5F0F\u95EE\u9898" } },
        "function_complex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u652F\u6301\u590D\u6742URL\u7ED3\u6784\u5206\u6790\uFF0C\u9002\u7528\u4E8EAPI\u5F00\u53D1\u548C\u6D4B\u8BD5" } },
        "scenarios_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5E94\u7528\u573A\u666F" } },
        "scenarios_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5E94\u7528\u573A\u666F" } },
        "scenario_web_dev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Web\u5F00\u53D1\u8005\u5206\u6790\u548C\u6784\u5EFAAPI\u8BF7\u6C42URL" } },
        "scenario_seo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SEO\u4F18\u5316\u4E13\u5BB6\u5206\u6790\u7F51\u7AD9URL\u7ED3\u6784" } },
        "scenario_network": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F51\u7EDC\u5DE5\u7A0B\u5E08\u8C03\u8BD5URL\u76F8\u5173\u95EE\u9898" } },
        "scenario_pm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4EA7\u54C1\u7ECF\u7406\u521B\u5EFA\u548C\u5171\u4EAB\u5E26\u53C2\u6570\u7684\u7F51\u9875\u94FE\u63A5" } },
        "scenario_security": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B89\u5168\u5206\u6790\u5E08\u68C0\u67E5URL\u4E2D\u7684\u6F5C\u5728\u6F0F\u6D1E\u53C2\u6570" } },
        "scenario_marketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8425\u9500\u4EBA\u5458\u521B\u5EFA\u548C\u5206\u6790UTM\u53C2\u6570\u94FE\u63A5" } },
        "conclusion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u65E0\u8BBA\u60A8\u662F\u4E13\u4E1A\u5F00\u53D1\u8005\u8FD8\u662F\u65E5\u5E38\u7F51\u7EDC\u7528\u6237\uFF0C\u8FD9\u6B3EURL\u89E3\u6790\u5DE5\u5177\u90FD\u80FD\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u7406\u89E3\u548C\u64CD\u4F5C\u7F51\u5740\u7ED3\u6784\u3002" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("guide_title"))}</h3><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg"${ssrRenderAttr("alt", unref(t)("info_alt"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("url_components_title"))}</p><p>${ssrInterpolate(unref(t)("url_components_intro"))}</p><ul class="list-disc list-inside mt-2 ml-2 space-y-1"><li><strong>${ssrInterpolate(unref(t)("protocol_label"))}</strong>${ssrInterpolate(unref(t)("protocol_desc"))}</li><li><strong>${ssrInterpolate(unref(t)("hostname_label"))}</strong>${ssrInterpolate(unref(t)("hostname_desc"))}</li><li><strong>${ssrInterpolate(unref(t)("port_label"))}</strong>${ssrInterpolate(unref(t)("port_desc"))}</li><li><strong>${ssrInterpolate(unref(t)("path_label"))}</strong>${ssrInterpolate(unref(t)("path_desc"))}</li><li><strong>${ssrInterpolate(unref(t)("query_label"))}</strong>${ssrInterpolate(unref(t)("query_desc"))}</li><li><strong>${ssrInterpolate(unref(t)("fragment_label"))}</strong>${ssrInterpolate(unref(t)("fragment_desc"))}</li></ul><p class="mt-2">${ssrInterpolate(unref(t)("example_url_prefix"))} <code class="bg-slate-100 px-2 py-0.5 rounded">https://www.example.com:443/path/page?id=123&amp;name=test#section1</code></p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/help-circle.svg"${ssrRenderAttr("alt", unref(t)("functions_alt"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("functions_title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("function_parse"))}</li><li>${ssrInterpolate(unref(t)("function_edit"))}</li><li>${ssrInterpolate(unref(t)("function_encode"))}</li><li>${ssrInterpolate(unref(t)("function_params"))}</li><li>${ssrInterpolate(unref(t)("function_generate"))}</li><li>${ssrInterpolate(unref(t)("function_validate"))}</li><li>${ssrInterpolate(unref(t)("function_complex"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/check-circle.svg"${ssrRenderAttr("alt", unref(t)("scenarios_alt"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("scenarios_title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("scenario_web_dev"))}</li><li>${ssrInterpolate(unref(t)("scenario_seo"))}</li><li>${ssrInterpolate(unref(t)("scenario_network"))}</li><li>${ssrInterpolate(unref(t)("scenario_pm"))}</li><li>${ssrInterpolate(unref(t)("scenario_security"))}</li><li>${ssrInterpolate(unref(t)("scenario_marketing"))}</li></ul><p class="mt-2 text-sm italic">${ssrInterpolate(unref(t)("conclusion"))}</p></div></div></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-parser/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser - URL Parser Tool Online, URL Editor" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser is an online tool for parsing various parts of a URL, including host, domain, port, protocol, parameters, etc. It also supports adding, updating, deleting parameters of the URL, generating JSON and new URL." } },
        "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser, URL Parse Tool, URL Parser Online, URI Parser, URI Parse Tool, URI Parser Online, URL Editor, URL Edit, URL Edit Tool, URL Editor Online" } },
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } },
        "btn.parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse" } },
        "btn.copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } },
        "Parse.result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basic Information" } },
        "URL.Host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
        "URL.Hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hostname" } },
        "URL.Port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port" } },
        "URL.Protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Protocol" } },
        "URL.Origin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Origin" } },
        "Params.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paramaters" } },
        "Params.add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add Param" } },
        "Params.update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Update URL" } },
        "btn.parse.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse URL" } },
        "parse.error.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse Error" } },
        "input": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser - URL Parser Tool Online, URL Editor" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser is an online tool for parsing various parts of a URL, including host, domain, port, protocol, parameters, etc. It also supports adding, updating, deleting parameters of the URL, generating JSON and new URL." } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser, URL Parse Tool, URL Parser Online, URI Parser, URI Parse Tool, URI Parser Online, URL Editor, URL Edit, URL Edit Tool, URL Editor Online" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } }
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5668 - URL\u5728\u7EBF\u89E3\u6790\u5DE5\u5177,URL\u7F16\u8F91\u5668" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5668\u662F\u4E00\u4E2A\u5728\u7EBF\u5DE5\u5177\uFF0C\u7528\u4E8E\u89E3\u6790 URL \u7684\u5404\u4E2A\u90E8\u5206\uFF0C\u5305\u62EC\u4E3B\u673A\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u3001\u534F\u8BAE\u3001\u53C2\u6570\u7B49\u3002\u8FD8\u652F\u6301\u5BF9 URL \u7684\u53C2\u6570\u8FDB\u884C\u6DFB\u52A0\u3001\u66F4\u65B0\u3001\u5220\u9664, \u751F\u6210 JSON \u548C\u65B0 URL \u7B49\u64CD\u4F5C\u3002" } },
        "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5668, URL\u89E3\u6790, URL\u89E3\u6790\u5DE5\u5177, URL\u89E3\u6790\u5668\u5728\u7EBF, URI\u89E3\u6790\u5668, URI\u89E3\u6790, URI\u89E3\u6790\u5DE5\u5177, URI\u89E3\u6790\u5668\u5728\u7EBF, URL\u7F16\u8F91\u5668, URL\u7F16\u8F91, URL\u7F16\u8F91\u5DE5\u5177, URL\u7F16\u8F91\u5668\u5728\u7EBF" } },
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790\u5668" } },
        "btn.parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790" } },
        "btn.copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236" } },
        "Parse.result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790\u7ED3\u679C" } },
        "URL.Host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E3B\u673A" } },
        "URL.Hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u57DF\u540D" } },
        "URL.Port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7AEF\u53E3" } },
        "URL.Protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u534F\u8BAE" } },
        "URL.Origin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6E90" } },
        "Params.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u53C2\u6570\u4FE1\u606F" } },
        "Params.add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6DFB\u52A0\u53C2\u6570" } },
        "Params.update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u66F4\u65B0URL" } },
        "btn.parse.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790URL" } },
        "parse.error.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790\u9519\u8BEF" } },
        "input": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5668 - URL\u5728\u7EBF\u89E3\u6790\u5DE5\u5177,URL\u7F16\u8F91\u5668" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5668\u662F\u4E00\u4E2A\u5728\u7EBF\u5DE5\u5177\uFF0C\u7528\u4E8E\u89E3\u6790 URL \u7684\u5404\u4E2A\u90E8\u5206\uFF0C\u5305\u62EC\u4E3B\u673A\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u3001\u534F\u8BAE\u3001\u53C2\u6570\u7B49\u3002\u8FD8\u652F\u6301\u5BF9 URL \u7684\u53C2\u6570\u8FDB\u884C\u6DFB\u52A0\u3001\u66F4\u65B0\u3001\u5220\u9664, \u751F\u6210 JSON \u548C\u65B0 URL \u7B49\u64CD\u4F5C\u3002" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u89E3\u6790\u5668, URL\u89E3\u6790, URL\u89E3\u6790\u5DE5\u5177, URL\u89E3\u6790\u5668\u5728\u7EBF, URI\u89E3\u6790\u5668, URI\u89E3\u6790, URI\u89E3\u6790\u5DE5\u5177, URI\u89E3\u6790\u5668\u5728\u7EBF, URL\u7F16\u8F91\u5668, URL\u7F16\u8F91, URL\u7F16\u8F91\u5DE5\u5177, URL\u7F16\u8F91\u5668\u5728\u7EBF" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790\u5668" } }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/url-parser/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-SbskmGh8.mjs.map
