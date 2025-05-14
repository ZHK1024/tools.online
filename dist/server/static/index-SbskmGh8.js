import { _ as __nuxt_component_0 } from "./full-30hiHSHR.js";
import { _ as _sfc_main$5 } from "./index-C-qkCW1q.js";
import { ref, reactive, watch, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { e as useI18n, b as useNuxtApp } from "../server.mjs";
import { _ as _sfc_main$4, s as setupSeoMeta } from "./seo-BNkHY44x.js";
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
        "btn.parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析" } },
        "btn.copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制" } },
        "btn.paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "粘贴" } },
        "btn.delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "删除" } },
        "btn.encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编码" } },
        "btn.decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解码" } },
        "btn.clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "清空" } },
        "URL.Protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "协议" } },
        "URL.Hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "主机名" } },
        "URL.Port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "端口" } },
        "URL.Path": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "路径" } },
        "URL.QueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "查询参数" } },
        "URL.Fragment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "片段标识符" } },
        "Params.add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "添加参数" } },
        "Params.update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "更新URL" } },
        "input.label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入URL" } },
        "placeholder": {
          "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "请输入要解析的URL..." } },
          "protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "https" } },
          "hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "example.com" } },
          "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "443" } },
          "path": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "/path/to/resource" } },
          "fragment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "section-id" } },
          "paramName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "参数名" } },
          "paramValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "参数值" } }
        },
        "messages": {
          "parseError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析失败，请检查输入的 URL 格式是否正确" } },
          "clipboardError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "无法访问剪贴板，请手动粘贴" } },
          "emptyUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "请输入URL" } },
          "decodeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解码失败" } },
          "updateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 更新失败，请检查输入的参数" } }
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
        console.error("URL 解析错误:", error);
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 space-y-8" }, _attrs))}><div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6"><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("input.label"))}</label><div class="flex space-x-2"><button id="pasteBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg" alt="粘贴" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("btn.paste"))}</button><button id="clearBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/trash.svg"${ssrRenderAttr("alt", unref(t)("btn.clear"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("btn.clear"))}</button></div></div><input type="text" id="urlInput"${ssrRenderAttr("value", urlInput.value)} class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 p-3 text-sm"${ssrRenderAttr("placeholder", unref(t)("placeholder.url"))}></div><div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4"><div class="md:col-span-3"><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Protocol"))}</label><div class="flex items-center space-x-2"><input type="text" id="protocol"${ssrRenderAttr("value", parsedUrl.protocol)}${ssrRenderAttr("placeholder", unref(t)("placeholder.protocol"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div class="md:col-span-6"><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Hostname"))}</label><div class="flex items-center space-x-2"><input type="text" id="hostname"${ssrRenderAttr("value", parsedUrl.hostname)}${ssrRenderAttr("placeholder", unref(t)("placeholder.hostname"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div class="md:col-span-3"><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Port"))}</label><div class="flex items-center space-x-2"><input type="text" id="port"${ssrRenderAttr("value", parsedUrl.port)}${ssrRenderAttr("placeholder", unref(t)("placeholder.port"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div></div><div><label class="block text-sm font-medium text-slate-700 mb-1">${ssrInterpolate(unref(t)("URL.Path"))}</label><div class="flex items-center space-x-2"><input type="text" id="path"${ssrRenderAttr("value", parsedUrl.pathname)}${ssrRenderAttr("placeholder", unref(t)("placeholder.path"))} class="flex-1 rounded border border-slate-300 p-2 text-sm"><button class="text-slate-400 hover:text-primary-600 flex-shrink-0 p-1.5"${ssrRenderAttr("title", unref(t)("btn.copy"))}><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg"${ssrRenderAttr("alt", unref(t)("btn.copy"))} class="w-4 h-4"></button></div></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("URL.QueryParams"))}</label><div class="space-x-2"><button class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/plus.svg"${ssrRenderAttr("alt", unref(t)("Params.add"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("Params.add"))}</button></div></div><div class="space-y-2">`);
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
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
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
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文本与Base64相互转换" } }
        },
        "md5": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 哈希" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "生成文本的MD5哈希值" } }
        },
        "url": {
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 编解码" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL编码和解码工具" } }
          }
        },
        "hmac": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "密钥相关哈希认证码" } }
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
      const _component_tools_card = _sfc_main$4;
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
        "guide_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析工具使用说明" } },
        "info_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "说明" } },
        "url_components_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL的组成部分详解" } },
        "url_components_intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "一个完整的URL（统一资源定位符）通常包含以下几个部分：" } },
        "protocol_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "协议（Protocol）：" } },
        "protocol_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "如http、https，指定了浏览器与服务器之间通信的规则" } },
        "hostname_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "主机名（Hostname）：" } },
        "hostname_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "如www.example.com，指向网络上的特定服务器" } },
        "port_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "端口号（Port）：" } },
        "port_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "如:443，指定连接服务器的通信端口，通常默认为隐藏" } },
        "path_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "路径（Path）：" } },
        "path_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "如/blog/article，指向服务器上的具体资源" } },
        "query_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "查询参数（Query Parameters）：" } },
        "query_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "如?id=123&name=test，传递给服务器的键值对" } },
        "fragment_label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "片段标识符（Fragment）：" } },
        "fragment_desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "如#section1，指向页面中的特定部分" } },
        "example_url_prefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "示例URL:" } },
        "functions_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "用途" } },
        "functions_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析工具功能" } },
        "function_parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析URL各个组成部分，清晰显示协议、主机名、路径等元素" } },
        "function_edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编辑和复制单个部分，便于开发调试" } },
        "function_encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "参数编码/解码，自动处理特殊字符和Unicode" } },
        "function_params": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "添加/删除/修改查询参数，无需手动计算位置" } },
        "function_generate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "重新组合生成完整URL，简化构建过程" } },
        "function_validate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL有效性验证，即时检测格式问题" } },
        "function_complex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "支持复杂URL结构分析，适用于API开发和测试" } },
        "scenarios_alt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "应用场景" } },
        "scenarios_title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "应用场景" } },
        "scenario_web_dev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Web开发者分析和构建API请求URL" } },
        "scenario_seo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SEO优化专家分析网站URL结构" } },
        "scenario_network": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "网络工程师调试URL相关问题" } },
        "scenario_pm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "产品经理创建和共享带参数的网页链接" } },
        "scenario_security": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "安全分析师检查URL中的潜在漏洞参数" } },
        "scenario_marketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "营销人员创建和分析UTM参数链接" } },
        "conclusion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "无论您是专业开发者还是日常网络用户，这款URL解析工具都能帮助您更好地理解和操作网址结构。" } }
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
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析器 - URL在线解析工具,URL编辑器" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析器是一个在线工具，用于解析 URL 的各个部分，包括主机、域名、端口、协议、参数等。还支持对 URL 的参数进行添加、更新、删除, 生成 JSON 和新 URL 等操作。" } },
        "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析器, URL解析, URL解析工具, URL解析器在线, URI解析器, URI解析, URI解析工具, URI解析器在线, URL编辑器, URL编辑, URL编辑工具, URL编辑器在线" } },
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析器" } },
        "btn.parse": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析" } },
        "btn.copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制" } },
        "Parse.result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析结果" } },
        "URL.Host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "主机" } },
        "URL.Hostname": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "域名" } },
        "URL.Port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "端口" } },
        "URL.Protocol": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "协议" } },
        "URL.Origin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "源" } },
        "Params.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "参数信息" } },
        "Params.add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "添加参数" } },
        "Params.update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "更新URL" } },
        "btn.parse.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析URL" } },
        "parse.error.title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析错误" } },
        "input": {
          "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析器 - URL在线解析工具,URL编辑器" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析器是一个在线工具，用于解析 URL 的各个部分，包括主机、域名、端口、协议、参数等。还支持对 URL 的参数进行添加、更新、删除, 生成 JSON 和新 URL 等操作。" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL解析器, URL解析, URL解析工具, URL解析器在线, URI解析器, URI解析, URI解析工具, URI解析器在线, URL编辑器, URL编辑, URL编辑工具, URL编辑器在线" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析器" } }
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
      const _component_tools_title = _sfc_main$5;
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-SbskmGh8.js.map
