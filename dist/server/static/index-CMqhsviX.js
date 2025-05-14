import { _ as __nuxt_component_0 } from "./full-30hiHSHR.js";
import { _ as _sfc_main$7 } from "./index-C-qkCW1q.js";
import { mergeProps, unref, useSSRContext, ref, watch, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./index-RDNg24MP.js";
import { e as useI18n, b as useNuxtApp } from "../server.mjs";
import { _ as _sfc_main$6, s as setupSeoMeta } from "./seo-BNkHY44x.js";
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
function block0$4(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Number Base Systems" } },
        "table": {
          "base": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Number Base" } },
          "range": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Digits" } },
          "prefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefix" } },
          "binary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Binary" } },
          "octal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Octal" } },
          "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal" } },
          "hexadecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hexadecimal" } }
        },
        "intro": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What are Number Bases?" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Number base systems are methods for representing numbers using different sets of digits. Common systems include binary (base-2), octal (base-8), decimal (base-10), and hexadecimal (base-16)." } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Common Applications" } },
          "binary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Binary: Computer data storage, digital electronics" } },
          "hexadecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hexadecimal: Memory addresses, color codes, cryptography" } },
          "conversion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base conversion: Data transmission, programming, computer science" } }
        },
        "conversion": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base Conversion" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base conversion is the process of converting a number from one number system to another. Our tool simplifies this process for seamless conversions between binary, octal, decimal, and hexadecimal." } }
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "常见进制说明" } },
        "table": {
          "base": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制" } },
          "range": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "范围" } },
          "prefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "前缀" } },
          "binary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "二进制" } },
          "octal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "八进制" } },
          "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十进制" } },
          "hexadecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十六进制" } }
        },
        "intro": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制介绍" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制是一种记数方式，用有限的数字符号表示无限的数。常见的有二进制、八进制、十进制、十六进制等。不同进制在计算机科学和日常生活中有着广泛应用。" } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "常见用途" } },
          "binary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "二进制：计算机底层数据表示、数字电子设备" } },
          "hexadecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十六进制：内存地址、颜色代码、加密技术" } },
          "conversion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换：数据传输、编程开发、计算机科学" } }
        },
        "conversion": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换是将数字从一种进制表示转换为另一种进制表示的过程。我们的工具可以轻松实现二进制、八进制、十进制和十六进制之间的无缝转换。" } }
        }
      }
    }
  });
}
const _sfc_main$4 = {
  __name: "Instructions",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl mt-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("title"))}</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-slate-200"><thead><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">${ssrInterpolate(unref(t)("table.base"))}</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">${ssrInterpolate(unref(t)("table.range"))}</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">${ssrInterpolate(unref(t)("table.prefix"))}</th></tr></thead><tbody class="bg-white divide-y divide-slate-200"><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">${ssrInterpolate(unref(t)("table.binary"))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0-1 </td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0b </td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">${ssrInterpolate(unref(t)("table.octal"))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0-7 </td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0o </td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">${ssrInterpolate(unref(t)("table.decimal"))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0-9 </td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> - </td></tr><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">${ssrInterpolate(unref(t)("table.hexadecimal"))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0-9, A-F </td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"> 0x </td></tr></tbody></table></div></div><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg" alt="说明" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("intro.title"))}</p><p class="text-sm">${ssrInterpolate(unref(t)("intro.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/circle-help.svg" alt="用途" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("usage.title"))}</p><ul class="list-disc list-inside space-y-1 text-sm"><li>${ssrInterpolate(unref(t)("usage.binary"))}</li><li>${ssrInterpolate(unref(t)("usage.hexadecimal"))}</li><li>${ssrInterpolate(unref(t)("usage.conversion"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/settings.svg" alt="转换" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("conversion.title"))}</p><p class="text-sm">${ssrInterpolate(unref(t)("conversion.description"))}</p></div></div></div></div></div>`);
    };
  }
};
if (typeof block0$4 === "function") block0$4(_sfc_main$4);
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base-converter/components/Instructions.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function block0$3(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "inputValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input Value" } },
        "liveConversion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Live Conversion" } },
        "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } },
        "inputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter a value to convert..." } },
        "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convert" } },
        "binary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Binary" } },
        "binaryFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Binary (Base 2)" } },
        "octal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Octal" } },
        "octalFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Octal (Base 8)" } },
        "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal" } },
        "decimalFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal (Base 10)" } },
        "hexadecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hexadecimal" } },
        "hexadecimalFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hexadecimal (Base 16)" } },
        "asciiRepresentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ASCII Character Representation" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } }
      },
      "zh": {
        "inputValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入数值" } },
        "liveConversion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "实时转换" } },
        "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "清空" } },
        "inputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入要转换的数值..." } },
        "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "转换" } },
        "binary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "二进制" } },
        "binaryFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "二进制 (Binary)" } },
        "octal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "八进制" } },
        "octalFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "八进制 (Octal)" } },
        "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十进制" } },
        "decimalFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十进制 (Decimal)" } },
        "hexadecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十六进制" } },
        "hexadecimalFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十六进制 (Hexadecimal)" } },
        "asciiRepresentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ASCII 字符表示" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制" } }
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
    const inputValue = ref("");
    const inputBase = ref("10");
    const autoConvert = ref(true);
    const binaryResult = ref("");
    const octalResult = ref("");
    const decimalResult = ref("");
    const hexResult = ref("");
    const asciiResult = ref("");
    watch([inputValue, inputBase, autoConvert], ([newInputValue, newInputBase, newAutoConvert]) => {
      if (newAutoConvert && newInputValue) {
        convert();
      }
    });
    const convert = () => {
      try {
        if (!inputValue.value.trim()) {
          clearResults();
          return;
        }
        const decimalVal = parseInt(inputValue.value, parseInt(inputBase.value));
        if (isNaN(decimalVal)) {
          handleError();
          return;
        }
        binaryResult.value = decimalVal.toString(2);
        octalResult.value = decimalVal.toString(8);
        decimalResult.value = decimalVal.toString(10);
        hexResult.value = decimalVal.toString(16);
        generateAsciiRepresentation(decimalVal);
      } catch (error) {
        handleError();
      }
    };
    const handleError = () => {
      binaryResult.value = "Error";
      octalResult.value = "Error";
      decimalResult.value = "Error";
      hexResult.value = "Error";
      asciiResult.value = "Error";
    };
    const generateAsciiRepresentation = (decimalVal) => {
      if (decimalVal >= 32 && decimalVal <= 126) {
        asciiResult.value = String.fromCharCode(decimalVal);
      } else {
        asciiResult.value = "N/A";
      }
    };
    const clearResults = () => {
      binaryResult.value = "";
      octalResult.value = "";
      decimalResult.value = "";
      hexResult.value = "";
      asciiResult.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cc_copy_button = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6" }, _attrs))}><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("inputValue"))}</label><div class="flex items-center space-x-2"><button class="text-sm text-slate-600 hover:text-slate-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg" alt="{{ t(&#39;clear&#39;) }}" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("clear"))}</button></div></div><div class="flex space-x-2"><input type="text"${ssrRenderAttr("value", inputValue.value)} class="block flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm"${ssrRenderAttr("placeholder", unref(t)("inputPlaceholder"))}><select class="px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"><option value="10"${ssrIncludeBooleanAttr(Array.isArray(inputBase.value) ? ssrLooseContain(inputBase.value, "10") : ssrLooseEqual(inputBase.value, "10")) ? " selected" : ""}>${ssrInterpolate(unref(t)("decimal"))}</option><option value="16"${ssrIncludeBooleanAttr(Array.isArray(inputBase.value) ? ssrLooseContain(inputBase.value, "16") : ssrLooseEqual(inputBase.value, "16")) ? " selected" : ""}>${ssrInterpolate(unref(t)("hexadecimal"))}</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(inputBase.value) ? ssrLooseContain(inputBase.value, "2") : ssrLooseEqual(inputBase.value, "2")) ? " selected" : ""}>${ssrInterpolate(unref(t)("binary"))}</option><option value="8"${ssrIncludeBooleanAttr(Array.isArray(inputBase.value) ? ssrLooseContain(inputBase.value, "8") : ssrLooseEqual(inputBase.value, "8")) ? " selected" : ""}>${ssrInterpolate(unref(t)("octal"))}</option></select></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("binaryFull"))}</label>`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: binaryResult.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`</div><div class="flex"><div class="relative flex-1"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-slate-500">0b</span></div><input type="text"${ssrRenderAttr("value", binaryResult.value)} class="block w-full pl-8 pr-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-sm" readonly></div></div></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("octalFull"))}</label>`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: octalResult.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`</div><div class="flex"><div class="relative flex-1"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-slate-500">0o</span></div><input type="text"${ssrRenderAttr("value", octalResult.value)} class="block w-full pl-8 pr-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-sm" readonly></div></div></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("decimalFull"))}</label>`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: decimalResult.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`</div><input type="text"${ssrRenderAttr("value", decimalResult.value)} class="block w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-sm" readonly></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("hexadecimalFull"))}</label>`);
      _push(ssrRenderComponent(_component_cc_copy_button, {
        data: hexResult.value,
        class: "text-sm text-primary-600 hover:text-primary-700"
      }, null, _parent));
      _push(`</div><div class="flex"><div class="relative flex-1"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-slate-500">0x</span></div><input type="text"${ssrRenderAttr("value", hexResult.value)} class="block w-full pl-8 pr-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-sm" readonly></div></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div>`);
    };
  }
};
if (typeof block0$3 === "function") block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base-converter/components/main.vue");
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base-converter/components/tools.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base Converter Guide" } },
        "what": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What is Base Conversion?" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base conversion is the process of converting a number from one number system (base) to another. This tool lets you seamlessly convert between binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16), and other number systems." } }
        },
        "principle": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Technical Principles" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base conversion works by understanding the positional value of each digit in a number. For example, in base 10, the number 123 means (1×10²) + (2×10¹) + (3×10⁰). The same principles apply to other bases, like binary where 101 means (1×2²) + (0×2¹) + (1×2⁰) = 5 in decimal." } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Common Applications" } },
          "list": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Computer Programming & Development" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Digital Electronics & Hardware Design" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Network & IP Address Management" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color Representation (Hex Codes)" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data Encoding & Compression" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Computer Science Education & Learning" } }
          ]
        },
        "algorithms": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supported Number Systems" } },
          "list": [
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Binary (Base 2)" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Used in computing fundamentals" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Octal (Base 8)" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Used in some computing contexts" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal (Base 10)" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard numbering system" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hexadecimal (Base 16)" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Common in programming & memory addressing" } }
            }
          ]
        },
        "howto": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "How to Use" } },
          "steps": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter your number in any input field (binary, octal, decimal, or hex)" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The tool automatically converts to all other bases" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verify the converted values in the corresponding fields" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Use the 'Copy' buttons to copy any result to clipboard" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "For custom bases, use the additional conversion options" } }
          ]
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换工具使用指南" } },
        "what": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "什么是进制转换？" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换是将数字从一种数制系统转换为另一种的过程。本工具能让您在二进制（2进制）、八进制（8进制）、十进制（10进制）、十六进制（16进制）等不同数值系统之间轻松转换。" } }
        },
        "principle": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "技术原理" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换通过理解数字中每个位置的值来实现。例如，在十进制中，数字123表示(1×10²) + (2×10¹) + (3×10⁰)。同样的原理适用于其他进制，如二进制中的101表示(1×2²) + (0×2¹) + (1×2⁰) = 十进制的5。" } }
        },
        "usage": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "常见应用场景" } },
          "list": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "计算机编程与软件开发" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "数字电子与硬件设计" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "网络与IP地址管理" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "颜色表示（十六进制颜色代码）" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "数据编码与压缩" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "计算机科学教育与学习" } }
          ]
        },
        "algorithms": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "支持的数值进制" } },
          "list": [
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "二进制（2进制）" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "计算机基础运算" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "八进制（8进制）" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "部分计算环境使用" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十进制（10进制）" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "标准计数系统" } }
            },
            {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "十六进制（16进制）" } },
              "note": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "常用于编程和内存寻址" } }
            }
          ]
        },
        "howto": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "使用方法" } },
          "steps": [
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在任意输入框中输入数值（二进制、八进制、十进制或十六进制）" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "工具会自动转换为所有其他进制" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在对应字段中查看转换后的值" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "使用'复制'按钮将结果复制到剪贴板" } },
            { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "对于自定义进制，可使用额外的转换选项" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("title"))}</h3><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg" alt="说明" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("what.title"))}</p><p>${ssrInterpolate(unref(t)("what.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/code.svg" alt="技术原理" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("principle.title"))}</p><p>${ssrInterpolate(unref(t)("principle.description"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/circle-help.svg" alt="用途" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("usage.title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("usage.list.0"))}</li><li>${ssrInterpolate(unref(t)("usage.list.1"))}</li><li>${ssrInterpolate(unref(t)("usage.list.2"))}</li><li>${ssrInterpolate(unref(t)("usage.list.3"))}</li><li>${ssrInterpolate(unref(t)("usage.list.4"))}</li><li>${ssrInterpolate(unref(t)("usage.list.5"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/shield.svg" alt="算法" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("algorithms.title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("algorithms.list.0.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.0.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.1.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.1.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.2.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.2.note"))})</span></li><li>${ssrInterpolate(unref(t)("algorithms.list.3.name"))} <span class="text-sm text-slate-500">(${ssrInterpolate(unref(t)("algorithms.list.3.note"))})</span></li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/book-open.svg" alt="使用方法" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("howto.title"))}</p><ol class="list-decimal list-inside space-y-2"><li>${ssrInterpolate(unref(t)("howto.steps.0"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.1"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.2"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.3"))}</li><li>${ssrInterpolate(unref(t)("howto.steps.4"))}</li></ol></div></div></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base-converter/components/description.vue");
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
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "进制转换工具" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HMAC 生成器在线" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在各种数值进制之间轻松转换，支持二进制、八进制、十进制、十六进制" } },
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
      const _component_tools_title = _sfc_main$7;
      _push(ssrRenderComponent(_component_page_layout_full, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_tools_title, {
              title: unref(t)("name"),
              icon: "https://unpkg.com/lucide-static@latest/icons/arrow-right-left.svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_tools_title, {
                title: unref(t)("name"),
                icon: "https://unpkg.com/lucide-static@latest/icons/arrow-right-left.svg"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base-converter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CMqhsviX.js.map
