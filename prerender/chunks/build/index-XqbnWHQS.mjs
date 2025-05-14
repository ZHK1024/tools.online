import { _ as __nuxt_component_0 } from './full-30hiHSHR.mjs';
import { _ as _sfc_main$4 } from './index-C-qkCW1q.mjs';
import { withCtx, unref, createVNode, useSSRContext, ref, watch, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrLooseContain } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$5 } from './index-RDNg24MP.mjs';
import CryptoJS from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/crypto-js/index.js';
import { e as useI18n, b as useNuxtApp } from './server.mjs';
import { s as setupSeoMeta, _ as _sfc_main$6 } from './seo-BNkHY44x.mjs';
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
        "key": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Key" } },
        "generateKey": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate Random Key" } },
        "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paste" } },
        "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } },
        "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input Text" } },
        "advancedOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Advanced Options" } },
        "algorithm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Algorithm" } },
        "outputFormat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Output Format" } },
        "hex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hexadecimal" } },
        "base64": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64" } },
        "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uppercase Output" } },
        "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Result" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } },
        "keyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter or generate key..." } },
        "inputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter text to calculate HMAC..." } },
        "resultPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter key and text above to automatically calculate HMAC result" } }
      },
      "zh": {
        "key": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BC6\u94A5" } },
        "generateKey": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u751F\u6210\u968F\u673A\u5BC6\u94A5" } },
        "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7C98\u8D34" } },
        "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6E05\u7A7A" } },
        "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u6587\u672C" } },
        "advancedOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9AD8\u7EA7\u9009\u9879" } },
        "algorithm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u7B97\u6CD5\u9009\u62E9" } },
        "outputFormat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u51FA\u683C\u5F0F" } },
        "hex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "16\u8FDB\u5236" } },
        "base64": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64" } },
        "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5927\u5199\u8F93\u51FA" } },
        "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8BA1\u7B97\u7ED3\u679C" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236" } },
        "keyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u6216\u751F\u6210\u5BC6\u94A5..." } },
        "inputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u8981\u8BA1\u7B97HMAC\u7684\u6587\u672C..." } },
        "resultPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u4E0A\u65B9\u8F93\u5165\u5BC6\u94A5\u548C\u6587\u672C\u540E\u5C06\u81EA\u52A8\u8BA1\u7B97 HMAC \u7ED3\u679C" } }
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
    const key = ref("");
    const input = ref("");
    const output = ref("");
    const selectedAlgorithm = ref("SHA256");
    const outputFormat = ref("hex");
    const uppercase = ref(false);
    const calculateHMAC = () => {
      if (!key.value || !input.value) {
        output.value = "";
        return;
      }
      let hmac;
      switch (selectedAlgorithm.value) {
        case "SHA256":
          hmac = CryptoJS.HmacSHA256(input.value, key.value);
          break;
        case "SHA1":
          hmac = CryptoJS.HmacSHA1(input.value, key.value);
          break;
        case "MD5":
          hmac = CryptoJS.HmacMD5(input.value, key.value);
          break;
        case "SHA512":
          hmac = CryptoJS.HmacSHA512(input.value, key.value);
          break;
      }
      if (outputFormat.value === "hex") {
        let result = hmac.toString(CryptoJS.enc.Hex);
        output.value = uppercase.value ? result.toUpperCase() : result;
      } else {
        output.value = hmac.toString(CryptoJS.enc.Base64);
      }
    };
    watch([key, input, selectedAlgorithm, outputFormat, uppercase], calculateHMAC);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cc_copy_button = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6" }, _attrs))}><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("key"))}</label><div class="flex space-x-2">`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: key.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`<button id="generateKeyBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/key.svg"${ssrRenderAttr("alt", unref(t)("generateKey"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("generateKey"))}</button><button id="pasteKeyBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg"${ssrRenderAttr("alt", unref(t)("paste"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("paste"))}</button><button id="clearKeyBtn" class="text-sm text-slate-600 hover:text-slate-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg"${ssrRenderAttr("alt", unref(t)("clear"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("clear"))}</button></div></div><input type="text" id="key"${ssrRenderAttr("value", key.value)} class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 p-3 text-sm"${ssrRenderAttr("placeholder", unref(t)("keyPlaceholder"))}></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("inputText"))}</label><div class="flex space-x-2">`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: input.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`<button id="pasteInputBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg"${ssrRenderAttr("alt", unref(t)("paste"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("paste"))}</button><button id="clearInputBtn" class="text-sm text-slate-600 hover:text-slate-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg"${ssrRenderAttr("alt", unref(t)("clear"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("clear"))}</button></div></div><textarea id="input" rows="6" class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 p-3 text-sm"${ssrRenderAttr("placeholder", unref(t)("inputPlaceholder"))}>${ssrInterpolate(input.value)}</textarea></div><div class="bg-slate-50 rounded-lg p-4"><details class="group" open><summary class="flex items-center cursor-pointer text-sm font-medium text-slate-700"><img src="https://unpkg.com/lucide-static@latest/icons/settings-2.svg"${ssrRenderAttr("alt", unref(t)("advancedOptions"))} class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("advancedOptions"))} <img src="https://unpkg.com/lucide-static@latest/icons/chevron-down.svg" alt="\u5C55\u5F00" class="w-4 h-4 ml-auto transform group-open:rotate-180 transition-transform"></summary><div class="mt-3 space-y-4"><div><p class="text-sm font-medium text-slate-700 mb-2">${ssrInterpolate(unref(t)("algorithm"))}: </p><div class="flex flex-wrap gap-4"><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="SHA256"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "SHA256")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="SHA256"><span class="ml-2 text-sm text-slate-700">HMAC-SHA256</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="SHA1"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "SHA1")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="SHA1"><span class="ml-2 text-sm text-slate-700">HMAC-SHA1</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="MD5"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "MD5")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="MD5"><span class="ml-2 text-sm text-slate-700">HMAC-MD5</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="SHA512"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "SHA512")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="SHA512"><span class="ml-2 text-sm text-slate-700">HMAC-SHA512</span></label></div></div><div><p class="text-sm font-medium text-slate-700 mb-2">${ssrInterpolate(unref(t)("outputFormat"))}:</p><div class="space-y-2"><div class="flex flex-wrap gap-4"><label class="flex items-center cursor-pointer"><input type="radio" name="outputFormat" value="hex"${ssrIncludeBooleanAttr(ssrLooseEqual(outputFormat.value, "hex")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500"><span class="ml-2 text-sm text-slate-700">${ssrInterpolate(unref(t)("hex"))}</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="outputFormat" value="base64"${ssrIncludeBooleanAttr(ssrLooseEqual(outputFormat.value, "base64")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500"><span class="ml-2 text-sm text-slate-700">${ssrInterpolate(unref(t)("base64"))}</span></label></div><div class="flex items-center" style="${ssrRenderStyle(outputFormat.value === "hex" ? null : { display: "none" })}"><label class="flex items-center cursor-pointer"><input type="checkbox" id="uppercase"${ssrIncludeBooleanAttr(Array.isArray(uppercase.value) ? ssrLooseContain(uppercase.value, null) : uppercase.value) ? " checked" : ""} class="form-checkbox text-primary-600 focus:ring-primary-500"><span class="ml-2 text-sm text-slate-700">${ssrInterpolate(unref(t)("uppercase"))}</span></label></div></div></div></div></details></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("result"))}</label>`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: output.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`</div><div class="bg-slate-50 rounded-lg p-4"><pre id="output" class="text-sm text-slate-800 whitespace-pre-wrap break-all min-h-[60px] flex items-center">${ssrInterpolate(output.value || unref(t)("resultPlaceholder"))}</pre></div></div></div>`);
    };
  }
};
if (typeof block0$3 === "function") block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hmac/components/main.vue");
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
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse and analyze URL structure" } }
          },
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder/Decoder" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode and decode URL strings" } }
          }
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
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790\u5668" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790\u548C\u5206\u6790 URL \u7ED3\u6784" } }
          },
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u89E3\u7801" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u5B57\u7B26\u4E32\u7F16\u7801\u548C\u89E3\u7801" } }
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
      const _component_tools_card = _sfc_main$6;
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
        title: unref(t)("url.parser.title"),
        desc: unref(t)("url.parser.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        alt: "URL Parser"
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("url-coder"),
        title: unref(t)("url.coder.title"),
        desc: unref(t)("url.coder.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        alt: "URL encode & decode"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
if (typeof block0$2 === "function") block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hmac/components/tools.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator Guide" } },
        "what": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What is HMAC?" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC (Hash-based Message Authentication Code) is a specific type of message authentication code (MAC) involving a cryptographic hash function and a secret cryptographic key. It provides a secure way to verify both the data integrity and authenticity of a message." } }
        },
        "principle": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Technical Principles" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC operates by combining a cryptographic hash function (like SHA256) with a secret key. The process involves two rounds of hashing, using inner and outer padded keys, which makes it highly resistant to various cryptographic attacks while maintaining computational efficiency." } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Common Applications" } },
          "list": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API Authentication & Authorization" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Digital Signature Generation" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secure Token Creation" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Message Integrity Verification" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secure File Transfer Validation" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Blockchain Transaction Signing" } }
          ]
        },
        "algorithms": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supported Algorithms" } },
          "list": [
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA256" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recommended for general use" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA512" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Higher security level" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA1" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Legacy support" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-MD5" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Not recommended for security-critical applications" } }
            }
          ]
        },
        "howto": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "How to Use" } },
          "steps": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter your message in the input field" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Provide your secret key" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select your preferred hash algorithm (SHA256 recommended)" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click 'Generate' to create your HMAC" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy the generated hash for your application" } }
          ]
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210\u5668\u4F7F\u7528\u6307\u5357" } },
        "what": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4EC0\u4E48\u662F HMAC\uFF1F" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC\uFF08Hash-based Message Authentication Code\uFF09\u662F\u4E00\u79CD\u7ED3\u5408\u52A0\u5BC6\u54C8\u5E0C\u51FD\u6570\u548C\u5BC6\u94A5\u7684\u7279\u6B8A\u6D88\u606F\u8BA4\u8BC1\u7801\u3002\u5B83\u80FD\u591F\u540C\u65F6\u9A8C\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u771F\u5B9E\u6027\uFF0C\u662F\u73B0\u4EE3\u5BC6\u7801\u5B66\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u5B89\u5168\u673A\u5236\u3002" } }
        },
        "principle": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6280\u672F\u539F\u7406" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u901A\u8FC7\u5C06\u5BC6\u7801\u54C8\u5E0C\u51FD\u6570\uFF08\u5982 SHA256\uFF09\u4E0E\u5BC6\u94A5\u7ED3\u5408\u4F7F\u7528\uFF0C\u91C7\u7528\u5185\u90E8\u548C\u5916\u90E8\u586B\u5145\u5BC6\u94A5\u8FDB\u884C\u4E24\u8F6E\u54C8\u5E0C\u8FD0\u7B97\u3002\u8FD9\u79CD\u8BBE\u8BA1\u4F7F\u5176\u5177\u6709\u6781\u5F3A\u7684\u6297\u5BC6\u7801\u5206\u6790\u653B\u51FB\u80FD\u529B\uFF0C\u540C\u65F6\u4FDD\u6301\u4E86\u826F\u597D\u7684\u8BA1\u7B97\u6548\u7387\u3002" } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5E38\u89C1\u5E94\u7528\u573A\u666F" } },
          "list": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \u63A5\u53E3\u7B7E\u540D\u8BA4\u8BC1" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6570\u5B57\u7B7E\u540D\u751F\u6210\u4E0E\u9A8C\u8BC1" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B89\u5168\u4EE4\u724C\uFF08Token\uFF09\u751F\u6210" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6D88\u606F\u5B8C\u6574\u6027\u6821\u9A8C" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5B89\u5168\u6587\u4EF6\u4F20\u8F93\u9A8C\u8BC1" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u533A\u5757\u94FE\u4EA4\u6613\u7B7E\u540D" } }
          ]
        },
        "algorithms": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u652F\u6301\u7684\u7B97\u6CD5" } },
          "list": [
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA256" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u63A8\u8350\u4F7F\u7528" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA512" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u66F4\u9AD8\u5B89\u5168\u7EA7\u522B" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA1" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5411\u540E\u517C\u5BB9" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-MD5" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E0D\u5EFA\u8BAE\u7528\u4E8E\u5B89\u5168\u5173\u952E\u573A\u666F" } }
            }
          ]
        },
        "howto": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4F7F\u7528\u65B9\u6CD5" } },
          "steps": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u9700\u8981\u5904\u7406\u7684\u6D88\u606F\u5185\u5BB9" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u586B\u5165\u60A8\u7684\u5BC6\u94A5" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9009\u62E9\u6240\u9700\u7684\u54C8\u5E0C\u7B97\u6CD5\uFF08\u63A8\u8350 SHA256\uFF09" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u70B9\u51FB'\u751F\u6210'\u6309\u94AE\u83B7\u53D6 HMAC" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236\u751F\u6210\u7684\u54C8\u5E0C\u503C\u7528\u4E8E\u60A8\u7684\u5E94\u7528" } }
          ]
        }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("title"))}</h3><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg" alt="\u8BF4\u660E" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("what.title"))}</p><p>${ssrInterpolate(unref(t)("what.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/code.svg" alt="\u6280\u672F\u539F\u7406" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("principle.title"))}</p><p>${ssrInterpolate(unref(t)("principle.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/help-circle.svg" alt="\u7528\u9014" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("usage.title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("usage.list.0"))}</li><li>${ssrInterpolate(unref(t)("usage.list.1"))}</li><li>${ssrInterpolate(unref(t)("usage.list.2"))}</li><li>${ssrInterpolate(unref(t)("usage.list.3"))}</li><li>${ssrInterpolate(unref(t)("usage.list.4"))}</li><li>${ssrInterpolate(unref(t)("usage.list.5"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/shield.svg" alt="\u7B97\u6CD5" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("algorithms.title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("algorithms.list.0.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.0.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.1.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.1.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.2.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.2.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.3.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.3.note"))})</span></li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/book-open.svg" alt="\u4F7F\u7528\u65B9\u6CD5" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("howto.title"))}</p><ol class="list-decimal list-inside space-y-2"><li>${ssrInterpolate(unref(t)("howto.steps.0"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.1"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.2"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.3"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.4"))}</li></ol></div></div></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hmac/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator Online" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator Online is a free online tool to generate Hash-based message authentication code." } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC, Generator, Online, Tool" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC Generator" } }
        }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210\u5668" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210\u5668\u5728\u7EBF" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210\u5668\u5728\u7EBF\u662F\u4E00\u4E2A\u514D\u8D39\u7684\u5728\u7EBF\u5DE5\u5177\uFF0C\u7528\u4E8E\u751F\u6210\u57FA\u4E8E\u54C8\u5E0C\u7684\u6D88\u606F\u8BA4\u8BC1\u7801\u3002" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC, \u751F\u6210\u5668, \u5728\u7EBF, \u5DE5\u5177" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC \u751F\u6210\u5668" } }
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
              icon: "https://unpkg.com/lucide-static@latest/icons/key.svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_tools_title, {
                title: unref(t)("name"),
                icon: "https://unpkg.com/lucide-static@latest/icons/key.svg"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hmac/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-XqbnWHQS.mjs.map
