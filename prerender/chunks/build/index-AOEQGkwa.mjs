import { ref, withCtx, unref, createVNode, toDisplayString, withDirectives, vModelText, createTextVNode, vModelRadio, vModelCheckbox, useSSRContext, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderAttrs, ssrRenderList, ssrRenderSlot } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
import { e as useI18n, b as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$7 } from './index-C-qkCW1q.mjs';
import CryptoJS from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/crypto-js/index.js';
import { u as useSeoMeta } from './index-BR4-xsG4.mjs';
import { s as setupSeoMeta, _ as _sfc_main$8 } from './seo-BNkHY44x.mjs';
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

const notifySuccess = (title, message) => {
};
const notifyError = (title, message) => {
};
const copyToClipboard = async (content, t) => {
  try {
    await (void 0).clipboard.writeText(content);
    notifySuccess(t("copy.title.success"), t("copy.message.success"));
  } catch (err) {
    notifyError(t("copy.title.error"), err.toString());
  }
};
const clipboardText = async () => {
  return await (undefined).clipboard.readText();
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 max-w-7xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`<main><div class="grid grid-cols-1 lg:grid-cols-3 gap-8">`);
  ssrRenderSlot(_ctx.$slots, "main", {}, null, _push, _parent);
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "output", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "history", {}, null, _push, _parent);
  _push(`</div></div><div class="mt-16"><div class="flex items-center mb-6"><img src="https://unpkg.com/lucide-static@latest/icons/layout-grid.svg" alt="\u63A8\u8350" class="w-5 h-5 text-primary-600 mr-2"><h2 class="text-xl font-bold">\u63A8\u8350\u5DE5\u5177</h2></div>`);
  ssrRenderSlot(_ctx.$slots, "tools", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageLayout/default.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    type: String,
    title: String,
    icon: String,
    alt: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.type === "primary") {
        _push(`<button${ssrRenderAttrs(mergeProps({
          id: "encrypt-btn",
          class: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"
        }, _attrs))}><img${ssrRenderAttr("src", __props.icon)}${ssrRenderAttr("alt", __props.alt)} class="w-4 h-4 mr-2"> ${ssrInterpolate(__props.title)}</button>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          id: "clear-btn",
          class: "px-5 py-2.5 bg-white text-slate-700 border border-slate-300 font-medium rounded-lg hover:bg-slate-50 transition-all flex items-center"
        }, _attrs))}><img${ssrRenderAttr("src", __props.icon)}${ssrRenderAttr("alt", __props.alt)} class="w-4 h-4 mr-2"> ${ssrInterpolate(__props.title)}</button>`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cc/Button/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
function block0$4(Component) {
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
        "url": {
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder/Decoder" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode and decode URL strings" } }
          },
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse and analyze URL components" } }
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
        "url": {
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u89E3\u7801" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\u5B57\u7B26\u4E32\u7F16\u7801\u548C\u89E3\u7801" } }
          },
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790\u5668" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790\u548C\u5206\u6790URL\u7EC4\u4EF6" } }
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
const _sfc_main$4 = {
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const { $localePath } = useNuxtApp();
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tools_card = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("base64"),
        title: unref(t)("base64.title"),
        desc: unref(t)("base64.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/code.svg",
        alt: "Base64"
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("url-coder"),
        title: unref(t)("url.coder.title"),
        desc: unref(t)("url.coder.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/shield.svg",
        alt: "SHA"
      }, null, _parent));
      _push(ssrRenderComponent(_component_tools_card, {
        href: unref($localePath)("url-parser"),
        title: unref(t)("url.parser.title"),
        desc: unref(t)("url.parser.desc"),
        icon: "https://unpkg.com/lucide-static@latest/icons/link.svg",
        alt: "URL"
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
if (typeof block0$4 === "function") block0$4(_sfc_main$4);
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/md5/components/tools.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
function block0$3(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Output" } },
        "tips": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Output result will display here" } },
        "btn": {
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy Result" } }
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u52A0\u5BC6\u7ED3\u679C" } },
        "tips": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u52A0\u5BC6\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC" } },
        "btn": {
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236\u7ED3\u679C" } }
        }
      }
    }
  });
}
const _sfc_main$3 = {
  __name: "output",
  __ssrInlineRender: true,
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    const props = __props;
    const onCopy = async () => {
      await copyToClipboard(props.data, t);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cc_button = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200" }, _attrs))}><div class="flex items-center mb-4"><img src="https://unpkg.com/lucide-static@latest/icons/shield-check.svg" alt="\u7ED3\u679C" class="w-5 h-5 text-primary-600"><h2 class="text-xl font-semibold ml-2">${ssrInterpolate(unref(t)("title"))}</h2></div><div class="space-y-4"><div class="relative"><div id="output-text" class="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 min-h-[60px] break-all text-sm"></div><div class="absolute inset-0 flex items-center justify-center pointer-events-none" id="empty-state">`);
      if (__props.data.length == 0) {
        _push(`<p class="text-slate-400 text-sm flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg" alt="\u63D0\u793A" class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("tips"))}</p>`);
      } else {
        _push(`<p class="whitespace-pre-wrap break-all w-full px-4">${ssrInterpolate(__props.data)}</p>`);
      }
      _push(`</div></div><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(_component_cc_button, {
        icon: "https://unpkg.com/lucide-static@latest/icons/copy.svg",
        title: unref(t)("btn.copy"),
        alt: unref(t)("btn.copy"),
        onClick: onCopy
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
if (typeof block0$3 === "function") block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/md5/components/output.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
function block0$2(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encryption History" } },
        "tips": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No encryption history yet" } },
        "btn": {
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } }
        }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u52A0\u5BC6\u5386\u53F2" } },
        "tips": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6682\u65E0\u52A0\u5BC6\u5386\u53F2\u8BB0\u5F55" } },
        "btn": {
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6E05\u7A7A" } }
        }
      }
    }
  });
}
const STORAGE_KEY = "md5-history";
const MAX_HISTORY = 20;
const _sfc_main$2 = {
  __name: "history",
  __ssrInlineRender: true,
  emits: ["record-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n({
      useScope: "local"
    });
    const historyRecords = ref([]);
    const save = (record) => {
      if (!record || typeof record.str !== "string" || typeof record.bit !== "number") {
        console.error("Invalid record format:", record);
        return;
      }
      if (record.upper === undefined) {
        record.upper = false;
      }
      const duplicateIndex = historyRecords.value.findIndex(
        (item) => item.str === record.str && item.bit === record.bit && item.upper === record.upper
      );
      if (duplicateIndex !== -1) {
        historyRecords.value.splice(duplicateIndex, 1);
      }
      historyRecords.value.unshift(record);
      if (historyRecords.value.length > MAX_HISTORY) {
        historyRecords.value = historyRecords.value.slice(0, MAX_HISTORY);
      }
      saveToLocalStorage();
    };
    const saveToLocalStorage = () => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(historyRecords.value));
      } catch (error) {
        console.error("Failed to save history:", error);
      }
    };
    __expose({
      save
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200" }, _attrs))}><div class="flex items-center justify-between mb-4"><div class="flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/history.svg" alt="\u5386\u53F2\u8BB0\u5F55" class="w-5 h-5 text-primary-600"><h2 class="text-xl font-semibold ml-2">${ssrInterpolate(unref(t)("title"))}</h2></div><button class="text-xs text-slate-500 hover:text-slate-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/trash-2.svg" alt="\u6E05\u7A7A\u5386\u53F2" class="w-3.5 h-3.5 mr-1"> ${ssrInterpolate(unref(t)("btn.clear"))}</button></div><div class="space-y-2 max-h-[180px] overflow-y-auto" id="history-container">`);
      if (unref(historyRecords).length === 0) {
        _push(`<div class="text-center py-4 text-sm text-slate-400"><img src="https://unpkg.com/lucide-static@latest/icons/clock.svg" alt="\u6682\u65E0\u5386\u53F2" class="w-6 h-6 mx-auto mb-2 opacity-40"> ${ssrInterpolate(unref(t)("tips"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(historyRecords), (record, index) => {
        _push(`<div class="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"><div class="flex items-center justify-between"><div class="text-sm font-medium truncate flex-1">${ssrInterpolate(record.str)}</div><div class="flex items-center gap-1 ml-2"><span class="px-1.5 py-0.5 text-xs rounded bg-blue-100 text-blue-800 font-medium">${ssrInterpolate(record.upper ? "U" : "L")}</span><span class="px-1.5 py-0.5 text-xs rounded bg-green-100 text-green-800 font-medium">${ssrInterpolate(record.bit === 32 ? "32" : "16")}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
if (typeof block0$2 === "function") block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/md5/components/history.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "About MD5 Encryption Tool" } },
        "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 (Message-Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value, used to ensure the integrity and consistency of information transmission. MD5 encryption is an essential tool in the field of information security." } },
        "usages": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Main Uses of MD5 Encryption" } },
          "items": {
            "verification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File integrity verification: By comparing the MD5 value of files, you can confirm whether files have been tampered with during transmission" } },
            "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password storage: Websites and applications typically don't store plaintext passwords, but rather store MD5 hash values of passwords" } },
            "signature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Digital signatures: MD5 is often used as part of digital signatures in some secure communications" } },
            "deduplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File deduplication: By comparing file MD5 values, duplicate files can be quickly identified" } }
          }
        },
        "features": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Features of Our Online MD5 Tool" } },
          "items": {
            "client": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Client-side Encryption" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "All encryption processes are completed locally in your browser without uploading to the server, ensuring data security" } }
            },
            "algorithms": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Multiple Algorithm Support" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In addition to standard MD5, it also supports various hash algorithms such as SHA-1 and SHA-256" } }
            },
            "batch": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Batch Processing" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supports batch encryption of large amounts of text, improving work efficiency" } }
            },
            "history": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "History Records" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatically saves recent encryption history for easy viewing and comparison" } }
            },
            "format": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format Options" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supports uppercase and lowercase output formats to meet the needs of different scenarios" } }
            }
          }
        },
        "security": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Although MD5 has been found to have collision weaknesses in cryptography and is no longer suitable for security purposes such as SSL certificates or digital signatures, it remains a simple and efficient tool for file verification and non-sensitive information processing. For scenarios requiring higher security, it is recommended to use more secure hash algorithms such as SHA-256." } },
        "conclusion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Whether you are a developer, system administrator, or ordinary user, our online MD5 encryption tool can provide you with convenient and secure encryption services to help you better protect information security." } }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5173\u4E8EMD5\u52A0\u5BC6\u5DE5\u5177" } },
        "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5\uFF08Message-Digest Algorithm 5\uFF09\u662F\u4E00\u79CD\u5E7F\u6CDB\u4F7F\u7528\u7684\u5BC6\u7801\u6563\u5217\u51FD\u6570\uFF0C\u53EF\u4EE5\u4EA7\u751F\u51FA\u4E00\u4E2A128\u4F4D\uFF0816\u5B57\u8282\uFF09\u7684\u6563\u5217\u503C\uFF08hash value\uFF09\uFF0C\u7528\u4E8E\u786E\u4FDD\u4FE1\u606F\u4F20\u8F93\u5B8C\u6574\u4E00\u81F4\u3002MD5\u52A0\u5BC6\u662F\u4FE1\u606F\u5B89\u5168\u9886\u57DF\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u5DE5\u5177\u4E4B\u4E00\u3002" } },
        "usages": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5\u52A0\u5BC6\u7684\u4E3B\u8981\u7528\u9014" } },
          "items": {
            "verification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9A8C\u8BC1\u6587\u4EF6\u5B8C\u6574\u6027\uFF1A\u901A\u8FC7\u6BD4\u8F83\u6587\u4EF6\u7684MD5\u503C\uFF0C\u53EF\u4EE5\u786E\u8BA4\u6587\u4EF6\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F\u5426\u88AB\u7BE1\u6539" } },
            "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BC6\u7801\u5B58\u50A8\uFF1A\u7F51\u7AD9\u548C\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u4E0D\u4F1A\u5B58\u50A8\u660E\u6587\u5BC6\u7801\uFF0C\u800C\u662F\u5B58\u50A8\u5BC6\u7801\u7684MD5\u6563\u5217\u503C" } },
            "signature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6570\u5B57\u7B7E\u540D\uFF1A\u5728\u4E00\u4E9B\u5B89\u5168\u901A\u4FE1\u4E2D\uFF0CMD5\u5E38\u88AB\u7528\u4F5C\u6570\u5B57\u7B7E\u540D\u7684\u4E00\u90E8\u5206" } },
            "deduplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u4EF6\u53BB\u91CD\uFF1A\u901A\u8FC7\u6BD4\u8F83\u6587\u4EF6MD5\u503C\uFF0C\u53EF\u4EE5\u5FEB\u901F\u8BC6\u522B\u91CD\u590D\u6587\u4EF6" } }
          }
        },
        "features": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6211\u4EEC\u7684\u5728\u7EBFMD5\u5DE5\u5177\u6709\u54EA\u4E9B\u7279\u70B9" } },
          "items": {
            "client": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BA2\u6237\u7AEF\u52A0\u5BC6" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6240\u6709\u52A0\u5BC6\u8FC7\u7A0B\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B89\u5168" } }
            },
            "algorithms": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u591A\u79CD\u7B97\u6CD5\u652F\u6301" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9664\u4E86\u6807\u51C6MD5\uFF0C\u8FD8\u652F\u6301SHA-1\u548CSHA-256\u7B49\u591A\u79CD\u54C8\u5E0C\u7B97\u6CD5" } }
            },
            "batch": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6279\u91CF\u5904\u7406" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u652F\u6301\u5927\u91CF\u6587\u672C\u7684\u6279\u91CF\u52A0\u5BC6\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387" } }
            },
            "history": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5386\u53F2\u8BB0\u5F55" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u81EA\u52A8\u4FDD\u5B58\u6700\u8FD1\u7684\u52A0\u5BC6\u5386\u53F2\uFF0C\u65B9\u4FBF\u67E5\u770B\u548C\u6BD4\u5BF9" } }
            },
            "format": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u683C\u5F0F\u9009\u62E9" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u652F\u6301\u5927\u5C0F\u5199\u8F93\u51FA\u683C\u5F0F\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u7684\u9700\u6C42" } }
            }
          }
        },
        "security": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u867D\u7136MD5\u5728\u5BC6\u7801\u5B66\u4E0A\u5DF2\u7ECF\u88AB\u53D1\u73B0\u5B58\u5728\u78B0\u649E\u5F31\u70B9\uFF0C\u4E0D\u518D\u9002\u5408\u7528\u4E8ESSL\u8BC1\u4E66\u6216\u6570\u5B57\u7B7E\u540D\u7B49\u5B89\u5168\u7528\u9014\uFF0C\u4F46\u5728\u6587\u4EF6\u6821\u9A8C\u3001\u975E\u654F\u611F\u4FE1\u606F\u5904\u7406\u7B49\u573A\u666F\u4E2D\uFF0CMD5\u4ECD\u7136\u662F\u4E00\u4E2A\u7B80\u5355\u9AD8\u6548\u7684\u5DE5\u5177\u3002\u5BF9\u4E8E\u9700\u8981\u66F4\u9AD8\u5B89\u5168\u6027\u7684\u573A\u666F\uFF0C\u5EFA\u8BAE\u4F7F\u7528SHA-256\u7B49\u66F4\u5B89\u5168\u7684\u54C8\u5E0C\u7B97\u6CD5\u3002" } },
        "conclusion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u65E0\u8BBA\u60A8\u662F\u5F00\u53D1\u4EBA\u5458\u3001\u7CFB\u7EDF\u7BA1\u7406\u5458\u8FD8\u662F\u666E\u901A\u7528\u6237\uFF0C\u6211\u4EEC\u7684\u5728\u7EBFMD5\u52A0\u5BC6\u5DE5\u5177\u90FD\u80FD\u4E3A\u60A8\u63D0\u4F9B\u4FBF\u6377\u3001\u5B89\u5168\u7684\u52A0\u5BC6\u670D\u52A1\uFF0C\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u4FDD\u62A4\u4FE1\u606F\u5B89\u5168\u3002" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-16 bg-white bg-opacity-90 rounded-xl p-6 border border-slate-200 shadow-md" }, _attrs))}><h2 class="text-xl font-semibold mb-4 text-slate-800">${ssrInterpolate(unref(t)("title"))}</h2><div class="prose prose-sm text-slate-600 max-w-none"><p>${ssrInterpolate(unref(t)("intro"))}</p><h3 class="text-lg font-medium mt-4 mb-2 text-slate-700">${ssrInterpolate(unref(t)("usages.title"))}</h3><ul class="list-disc pl-5 space-y-1"><li>${ssrInterpolate(unref(t)("usages.items.verification"))}</li><li>${ssrInterpolate(unref(t)("usages.items.password"))}</li><li>${ssrInterpolate(unref(t)("usages.items.signature"))}</li><li>${ssrInterpolate(unref(t)("usages.items.deduplication"))}</li></ul><h3 class="text-lg font-medium mt-4 mb-2 text-slate-700">${ssrInterpolate(unref(t)("features.title"))}</h3><ul class="list-disc pl-5 space-y-1"><li><strong>${ssrInterpolate(unref(t)("features.items.client.name"))}</strong>\uFF1A${ssrInterpolate(unref(t)("features.items.client.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.algorithms.name"))}</strong>\uFF1A${ssrInterpolate(unref(t)("features.items.algorithms.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.batch.name"))}</strong>\uFF1A${ssrInterpolate(unref(t)("features.items.batch.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.history.name"))}</strong>\uFF1A${ssrInterpolate(unref(t)("features.items.history.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.format.name"))}</strong>\uFF1A${ssrInterpolate(unref(t)("features.items.format.desc"))}</li></ul><p class="mt-4">${ssrInterpolate(unref(t)("security"))}</p><p class="mt-4">${ssrInterpolate(unref(t)("conclusion"))}</p></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/md5/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 Encode" } },
        "tab": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
          "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File" } },
          "desc_text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input Text" } },
          "desc_file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input File" } }
        },
        "input": {
          "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please enter the text to be encrypted..." } }
        },
        "advanced": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Advanced Options" } },
          "bit_16": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "16-bit" } },
          "bit_32": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "32-bit" } },
          "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uppercase Output" } }
        },
        "btn": {
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode" } },
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } },
          "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paste" } }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 Encode" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online md5 encode, md5 encode tool, free md5 encode tool, md5 encode tool, support 16-bit and 32-bit lowercase encode." } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5, encode, 16-bit, 32-bit" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 Encode" } }
        }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 \u7F16\u7801" } },
        "tab": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u672C" } },
          "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u4EF6" } },
          "desc_text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u6587\u672C" } },
          "desc_file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u6587\u4EF6" } }
        },
        "input": {
          "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8BF7\u8F93\u5165\u8981\u52A0\u5BC6\u7684\u6587\u672C..." } }
        },
        "advanced": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9AD8\u7EA7\u9009\u9879" } },
          "bit_16": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "16 \u4F4D" } },
          "bit_32": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "32 \u4F4D" } },
          "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5927\u5199\u8F93\u51FA" } }
        },
        "btn": {
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u52A0\u5BC6" } },
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6E05\u7A7A" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236" } },
          "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7C98\u8D34" } }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 \u7F16\u7801" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u7EBFmd5\u52A0\u5BC6, md5\u52A0\u5BC6\u5DE5\u5177, \u514D\u8D39md5\u673A\u5BC6\u5DE5\u5177, md5\u7F16\u7801\u5DE5\u5177\uFF0C\u652F\u630116\u4F4D\u548C32\u4F4D\u5927\u5C0F\u5199\u7F16\u7801\u3002" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5, \u7F16\u7801, 16 \u4F4D, 32 \u4F4D" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 \u7F16\u7801" } }
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
    const inputText = ref("");
    ref([]);
    const result = ref("");
    const bitLength = ref(16);
    const uppercase = ref(false);
    const historyRef = ref(null);
    const generateMd5 = () => {
      var _a;
      const md5 = CryptoJS.MD5(inputText.value).toString();
      if (bitLength.value == 16) {
        result.value = uppercase.value ? md5.substr(8, 16).toUpperCase() : md5.substr(8, 16);
      } else {
        result.value = uppercase.value ? md5.toUpperCase() : md5;
      }
      if (inputText.value.trim()) {
        const historyItem = {
          bit: bitLength.value,
          str: inputText.value,
          upper: uppercase.value,
          result: result.value
        };
        if ((_a = historyRef.value) == null ? undefined : _a.save) {
          historyRef.value.save(historyItem);
        }
      }
    };
    const onPaste = async () => {
      inputText.value = await clipboardText();
    };
    const recordClick = (record) => {
      if (record) {
        inputText.value = record.str || "";
        bitLength.value = record.bit || 32;
        uppercase.value = !!record.upper;
        generateMd5();
      }
    };
    setupSeoMeta(useSeoMeta, t);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_page_layout_default = __nuxt_component_0;
      const _component_tools_title = _sfc_main$7;
      const _component_cc_button = _sfc_main$5;
      _push(ssrRenderComponent(_component_page_layout_default, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_tools_title, {
              title: unref(t)("name"),
              icon: "https://unpkg.com/lucide-static@latest/icons/key-square.svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_tools_title, {
                title: unref(t)("name"),
                icon: "https://unpkg.com/lucide-static@latest/icons/key-square.svg"
              }, null, 8, ["title"])
            ];
          }
        }),
        main: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lg:col-span-2"${_scopeId}><div class="bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200"${_scopeId}><div class="flex items-center mb-4"${_scopeId}><img src="https://unpkg.com/lucide-static@latest/icons/file-text.svg"${ssrRenderAttr("alt", unref(t)("tab.text"))} class="w-5 h-5 text-primary-600"${_scopeId}><h2 class="text-xl font-semibold ml-2"${_scopeId}>${ssrInterpolate(unref(t)("tab.desc_text"))}</h2></div><div class="space-y-4"${_scopeId}><div class="flex border-b border-slate-200"${_scopeId}><button class="py-2 px-4 border-b-2 border-primary-600 text-primary-600 font-medium"${_scopeId}>${ssrInterpolate(unref(t)("tab.text"))}</button></div><div${_scopeId}><textarea id="input-text" rows="8" class="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"${ssrRenderAttr("placeholder", unref(t)("input.placeholder"))}${_scopeId}>${ssrInterpolate(inputText.value)}</textarea></div><div class="bg-slate-50 rounded-lg p-4"${_scopeId}><details class="group" open${_scopeId}><summary class="flex items-center cursor-pointer text-sm font-medium text-slate-700"${_scopeId}><img src="https://unpkg.com/lucide-static@latest/icons/settings-2.svg" alt="\u9AD8\u7EA7\u8BBE\u7F6E" class="w-4 h-4 mr-2"${_scopeId}> ${ssrInterpolate(unref(t)("advanced.title"))} <img src="https://unpkg.com/lucide-static@latest/icons/chevron-down.svg" alt="\u5C55\u5F00" class="w-4 h-4 ml-auto transform group-open:rotate-180 transition-transform"${_scopeId}></summary><div class="mt-3 space-y-3"${_scopeId}><div class="flex flex-wrap gap-2"${_scopeId}><label class="flex items-center cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(bitLength.value, 16)) ? " checked" : ""} type="radio" name="bit"${ssrRenderAttr("value", 16)} checked class="form-radio text-primary-600 focus:ring-primary-500"${_scopeId}><span class="ml-2 text-sm text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("advanced.bit_16"))}</span></label><label class="flex items-center cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(bitLength.value, 32)) ? " checked" : ""} type="radio" name="bit"${ssrRenderAttr("value", 32)} class="form-radio text-primary-600 focus:ring-primary-500"${_scopeId}><span class="ml-2 text-sm text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("advanced.bit_32"))}</span></label></div><div class="flex items-center"${_scopeId}><label class="flex items-center cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(uppercase.value) ? ssrLooseContain(uppercase.value, null) : uppercase.value) ? " checked" : ""} type="checkbox" id="uppercase" class="form-checkbox text-primary-600 focus:ring-primary-500"${_scopeId}><span class="ml-2 text-sm text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("advanced.uppercase"))}</span></label></div></div></details></div><div class="flex flex-wrap gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_cc_button, {
              type: "primary",
              title: unref(t)("btn.encode"),
              icon: "https://unpkg.com/lucide-static@latest/icons/lock.svg",
              alt: unref(t)("btn.encode"),
              onClick: generateMd5
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_cc_button, {
              title: unref(t)("btn.clear"),
              icon: "https://unpkg.com/lucide-static@latest/icons/eraser.svg",
              alt: unref(t)("btn.clear"),
              onClick: ($event) => inputText.value = ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_cc_button, {
              title: unref(t)("btn.copy"),
              icon: "https://unpkg.com/lucide-static@latest/icons/copy.svg",
              alt: unref(t)("btn.copy"),
              onClick: ($event) => unref(copyToClipboard)(inputText.value, unref(t))
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_cc_button, {
              title: unref(t)("btn.paste"),
              icon: "https://unpkg.com/lucide-static@latest/icons/clipboard-paste.svg",
              alt: unref(t)("btn.paste"),
              onClick: onPaste
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "lg:col-span-2" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200" }, [
                  createVNode("div", { class: "flex items-center mb-4" }, [
                    createVNode("img", {
                      src: "https://unpkg.com/lucide-static@latest/icons/file-text.svg",
                      alt: unref(t)("tab.text"),
                      class: "w-5 h-5 text-primary-600"
                    }, null, 8, ["alt"]),
                    createVNode("h2", { class: "text-xl font-semibold ml-2" }, toDisplayString(unref(t)("tab.desc_text")), 1)
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex border-b border-slate-200" }, [
                      createVNode("button", { class: "py-2 px-4 border-b-2 border-primary-600 text-primary-600 font-medium" }, toDisplayString(unref(t)("tab.text")), 1)
                    ]),
                    createVNode("div", null, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => inputText.value = $event,
                        id: "input-text",
                        rows: "8",
                        class: "w-full px-4 py-3 rounded-lg border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none",
                        placeholder: unref(t)("input.placeholder")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, inputText.value]
                      ])
                    ]),
                    createVNode("div", { class: "bg-slate-50 rounded-lg p-4" }, [
                      createVNode("details", {
                        class: "group",
                        open: ""
                      }, [
                        createVNode("summary", { class: "flex items-center cursor-pointer text-sm font-medium text-slate-700" }, [
                          createVNode("img", {
                            src: "https://unpkg.com/lucide-static@latest/icons/settings-2.svg",
                            alt: "\u9AD8\u7EA7\u8BBE\u7F6E",
                            class: "w-4 h-4 mr-2"
                          }),
                          createTextVNode(" " + toDisplayString(unref(t)("advanced.title")) + " ", 1),
                          createVNode("img", {
                            src: "https://unpkg.com/lucide-static@latest/icons/chevron-down.svg",
                            alt: "\u5C55\u5F00",
                            class: "w-4 h-4 ml-auto transform group-open:rotate-180 transition-transform"
                          })
                        ]),
                        createVNode("div", { class: "mt-3 space-y-3" }, [
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            createVNode("label", { class: "flex items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => bitLength.value = $event,
                                type: "radio",
                                name: "bit",
                                value: 16,
                                checked: "",
                                class: "form-radio text-primary-600 focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelRadio, bitLength.value]
                              ]),
                              createVNode("span", { class: "ml-2 text-sm text-slate-700" }, toDisplayString(unref(t)("advanced.bit_16")), 1)
                            ]),
                            createVNode("label", { class: "flex items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => bitLength.value = $event,
                                type: "radio",
                                name: "bit",
                                value: 32,
                                class: "form-radio text-primary-600 focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelRadio, bitLength.value]
                              ]),
                              createVNode("span", { class: "ml-2 text-sm text-slate-700" }, toDisplayString(unref(t)("advanced.bit_32")), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("label", { class: "flex items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => uppercase.value = $event,
                                type: "checkbox",
                                id: "uppercase",
                                class: "form-checkbox text-primary-600 focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, uppercase.value]
                              ]),
                              createVNode("span", { class: "ml-2 text-sm text-slate-700" }, toDisplayString(unref(t)("advanced.uppercase")), 1)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-wrap gap-3" }, [
                      createVNode(_component_cc_button, {
                        type: "primary",
                        title: unref(t)("btn.encode"),
                        icon: "https://unpkg.com/lucide-static@latest/icons/lock.svg",
                        alt: unref(t)("btn.encode"),
                        onClick: generateMd5
                      }, null, 8, ["title", "alt"]),
                      createVNode(_component_cc_button, {
                        title: unref(t)("btn.clear"),
                        icon: "https://unpkg.com/lucide-static@latest/icons/eraser.svg",
                        alt: unref(t)("btn.clear"),
                        onClick: ($event) => inputText.value = ""
                      }, null, 8, ["title", "alt", "onClick"]),
                      createVNode(_component_cc_button, {
                        title: unref(t)("btn.copy"),
                        icon: "https://unpkg.com/lucide-static@latest/icons/copy.svg",
                        alt: unref(t)("btn.copy"),
                        onClick: ($event) => unref(copyToClipboard)(inputText.value, unref(t))
                      }, null, 8, ["title", "alt", "onClick"]),
                      createVNode(_component_cc_button, {
                        title: unref(t)("btn.paste"),
                        icon: "https://unpkg.com/lucide-static@latest/icons/clipboard-paste.svg",
                        alt: unref(t)("btn.paste"),
                        onClick: onPaste
                      }, null, 8, ["title", "alt"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        output: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { data: result.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { data: result.value }, null, 8, ["data"])
            ];
          }
        }),
        history: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              ref_key: "historyRef",
              ref: historyRef,
              onRecordClick: recordClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                ref_key: "historyRef",
                ref: historyRef,
                onRecordClick: recordClick
              }, null, 512)
            ];
          }
        }),
        tools: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/md5/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-AOEQGkwa.mjs.map
