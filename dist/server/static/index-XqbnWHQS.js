import { _ as __nuxt_component_0 } from "./full-30hiHSHR.js";
import { _ as _sfc_main$6 } from "./index-C-qkCW1q.js";
import { ref, watch, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./index-RDNg24MP.js";
import CryptoJS from "crypto-js";
import { e as useI18n, b as useNuxtApp } from "../server.mjs";
import { _ as _sfc_main$5, s as setupSeoMeta } from "./seo-BNkHY44x.js";
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
        "key": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "密钥" } },
        "generateKey": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "生成随机密钥" } },
        "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "粘贴" } },
        "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "清空" } },
        "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入文本" } },
        "advancedOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "高级选项" } },
        "algorithm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 算法选择" } },
        "outputFormat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输出格式" } },
        "hex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "16进制" } },
        "base64": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64" } },
        "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "大写输出" } },
        "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "计算结果" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制" } },
        "keyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入或生成密钥..." } },
        "inputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入要计算HMAC的文本..." } },
        "resultPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在上方输入密钥和文本后将自动计算 HMAC 结果" } }
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
      const _component_cc_copy_button = _sfc_main$4;
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
      _push(`<button id="pasteInputBtn" class="text-sm text-primary-600 hover:text-primary-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg"${ssrRenderAttr("alt", unref(t)("paste"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("paste"))}</button><button id="clearInputBtn" class="text-sm text-slate-600 hover:text-slate-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg"${ssrRenderAttr("alt", unref(t)("clear"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("clear"))}</button></div></div><textarea id="input" rows="6" class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 p-3 text-sm"${ssrRenderAttr("placeholder", unref(t)("inputPlaceholder"))}>${ssrInterpolate(input.value)}</textarea></div><div class="bg-slate-50 rounded-lg p-4"><details class="group" open><summary class="flex items-center cursor-pointer text-sm font-medium text-slate-700"><img src="https://unpkg.com/lucide-static@latest/icons/settings-2.svg"${ssrRenderAttr("alt", unref(t)("advancedOptions"))} class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("advancedOptions"))} <img src="https://unpkg.com/lucide-static@latest/icons/chevron-down.svg" alt="展开" class="w-4 h-4 ml-auto transform group-open:rotate-180 transition-transform"></summary><div class="mt-3 space-y-4"><div><p class="text-sm font-medium text-slate-700 mb-2">${ssrInterpolate(unref(t)("algorithm"))}: </p><div class="flex flex-wrap gap-4"><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="SHA256"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "SHA256")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="SHA256"><span class="ml-2 text-sm text-slate-700">HMAC-SHA256</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="SHA1"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "SHA1")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="SHA1"><span class="ml-2 text-sm text-slate-700">HMAC-SHA1</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="MD5"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "MD5")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="MD5"><span class="ml-2 text-sm text-slate-700">HMAC-MD5</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="algorithm" value="SHA512"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, "SHA512")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500" data-algorithm="SHA512"><span class="ml-2 text-sm text-slate-700">HMAC-SHA512</span></label></div></div><div><p class="text-sm font-medium text-slate-700 mb-2">${ssrInterpolate(unref(t)("outputFormat"))}:</p><div class="space-y-2"><div class="flex flex-wrap gap-4"><label class="flex items-center cursor-pointer"><input type="radio" name="outputFormat" value="hex"${ssrIncludeBooleanAttr(ssrLooseEqual(outputFormat.value, "hex")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500"><span class="ml-2 text-sm text-slate-700">${ssrInterpolate(unref(t)("hex"))}</span></label><label class="flex items-center cursor-pointer"><input type="radio" name="outputFormat" value="base64"${ssrIncludeBooleanAttr(ssrLooseEqual(outputFormat.value, "base64")) ? " checked" : ""} class="form-radio text-primary-600 focus:ring-primary-500"><span class="ml-2 text-sm text-slate-700">${ssrInterpolate(unref(t)("base64"))}</span></label></div><div class="flex items-center" style="${ssrRenderStyle(outputFormat.value === "hex" ? null : { display: "none" })}"><label class="flex items-center cursor-pointer"><input type="checkbox" id="uppercase"${ssrIncludeBooleanAttr(Array.isArray(uppercase.value) ? ssrLooseContain(uppercase.value, null) : uppercase.value) ? " checked" : ""} class="form-checkbox text-primary-600 focus:ring-primary-500"><span class="ml-2 text-sm text-slate-700">${ssrInterpolate(unref(t)("uppercase"))}</span></label></div></div></div></div></details></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("result"))}</label>`);
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
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文本与Base64相互转换" } }
        },
        "md5": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 哈希" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "生成文本的MD5哈希值" } }
        },
        "url": {
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析器" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析和分析 URL 结构" } }
          },
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 编解码" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 字符串编码和解码" } }
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成器使用指南" } },
        "what": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "什么是 HMAC？" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC（Hash-based Message Authentication Code）是一种结合加密哈希函数和密钥的特殊消息认证码。它能够同时验证数据的完整性和真实性，是现代密码学中不可或缺的安全机制。" } }
        },
        "principle": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "技术原理" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 通过将密码哈希函数（如 SHA256）与密钥结合使用，采用内部和外部填充密钥进行两轮哈希运算。这种设计使其具有极强的抗密码分析攻击能力，同时保持了良好的计算效率。" } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "常见应用场景" } },
          "list": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API 接口签名认证" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "数字签名生成与验证" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "安全令牌（Token）生成" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "消息完整性校验" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "安全文件传输验证" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "区块链交易签名" } }
          ]
        },
        "algorithms": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "支持的算法" } },
          "list": [
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA256" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "推荐使用" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA512" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "更高安全级别" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-SHA1" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "向后兼容" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC-MD5" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "不建议用于安全关键场景" } }
            }
          ]
        },
        "howto": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "使用方法" } },
          "steps": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在输入框中输入需要处理的消息内容" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "填入您的密钥" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "选择所需的哈希算法（推荐 SHA256）" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "点击'生成'按钮获取 HMAC" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制生成的哈希值用于您的应用" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("title"))}</h3><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg" alt="说明" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("what.title"))}</p><p>${ssrInterpolate(unref(t)("what.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/code.svg" alt="技术原理" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("principle.title"))}</p><p>${ssrInterpolate(unref(t)("principle.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/help-circle.svg" alt="用途" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("usage.title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("usage.list.0"))}</li><li>${ssrInterpolate(unref(t)("usage.list.1"))}</li><li>${ssrInterpolate(unref(t)("usage.list.2"))}</li><li>${ssrInterpolate(unref(t)("usage.list.3"))}</li><li>${ssrInterpolate(unref(t)("usage.list.4"))}</li><li>${ssrInterpolate(unref(t)("usage.list.5"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/shield.svg" alt="算法" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("algorithms.title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("algorithms.list.0.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.0.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.1.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.1.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.2.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.2.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.3.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.3.note"))})</span></li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/book-open.svg" alt="使用方法" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("howto.title"))}</p><ol class="list-decimal list-inside space-y-2"><li>${ssrInterpolate(unref(t)("howto.steps.0"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.1"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.2"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.3"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.4"))}</li></ol></div></div></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hmac/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成器" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成器在线" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成器在线是一个免费的在线工具，用于生成基于哈希的消息认证码。" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC, 生成器, 在线, 工具" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成器" } }
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
      const _component_tools_title = _sfc_main$6;
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-XqbnWHQS.js.map
