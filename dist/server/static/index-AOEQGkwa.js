import { mergeProps, useSSRContext, unref, ref, withCtx, createVNode, toDisplayString, withDirectives, vModelText, createTextVNode, vModelRadio, vModelCheckbox } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc, b as useNuxtApp, e as useI18n } from "../server.mjs";
import { _ as _sfc_main$8 } from "./index-C-qkCW1q.js";
import CryptoJS from "crypto-js";
import "hookable";
import "klona";
import "defu";
import { a as useSeoMeta } from "./index-BR4-xsG4.js";
import "destr";
import "#internal/nuxt/paths";
import { _ as _sfc_main$7, s as setupSeoMeta } from "./seo-BNkHY44x.js";
import "consola";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
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
  return await (void 0).clipboard.readText();
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
  _push(`</div></div><div class="mt-16"><div class="flex items-center mb-6"><img src="https://unpkg.com/lucide-static@latest/icons/layout-grid.svg" alt="推荐" class="w-5 h-5 text-primary-600 mr-2"><h2 class="text-xl font-bold">推荐工具</h2></div>`);
  ssrRenderSlot(_ctx.$slots, "tools", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageLayout/default.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
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
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
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
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文本与Base64相互转换" } }
        },
        "url": {
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 编解码" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL字符串编码和解码" } }
          },
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析器" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析和分析URL组件" } }
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
const _sfc_main$4 = {
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const { $localePath } = useNuxtApp();
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tools_card = _sfc_main$7;
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
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "加密结果" } },
        "tips": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "加密结果将显示在这里" } },
        "btn": {
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制结果" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200" }, _attrs))}><div class="flex items-center mb-4"><img src="https://unpkg.com/lucide-static@latest/icons/shield-check.svg" alt="结果" class="w-5 h-5 text-primary-600"><h2 class="text-xl font-semibold ml-2">${ssrInterpolate(unref(t)("title"))}</h2></div><div class="space-y-4"><div class="relative"><div id="output-text" class="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 min-h-[60px] break-all text-sm"></div><div class="absolute inset-0 flex items-center justify-center pointer-events-none" id="empty-state">`);
      if (__props.data.length == 0) {
        _push(`<p class="text-slate-400 text-sm flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg" alt="提示" class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("tips"))}</p>`);
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
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "加密历史" } },
        "tips": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "暂无加密历史记录" } },
        "btn": {
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "清空" } }
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
      if (record.upper === void 0) {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200" }, _attrs))}><div class="flex items-center justify-between mb-4"><div class="flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/history.svg" alt="历史记录" class="w-5 h-5 text-primary-600"><h2 class="text-xl font-semibold ml-2">${ssrInterpolate(unref(t)("title"))}</h2></div><button class="text-xs text-slate-500 hover:text-slate-700 flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/trash-2.svg" alt="清空历史" class="w-3.5 h-3.5 mr-1"> ${ssrInterpolate(unref(t)("btn.clear"))}</button></div><div class="space-y-2 max-h-[180px] overflow-y-auto" id="history-container">`);
      if (unref(historyRecords).length === 0) {
        _push(`<div class="text-center py-4 text-sm text-slate-400"><img src="https://unpkg.com/lucide-static@latest/icons/clock.svg" alt="暂无历史" class="w-6 h-6 mx-auto mb-2 opacity-40"> ${ssrInterpolate(unref(t)("tips"))}</div>`);
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "关于MD5加密工具" } },
        "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5（Message-Digest Algorithm 5）是一种广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。MD5加密是信息安全领域中不可或缺的工具之一。" } },
        "usages": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5加密的主要用途" } },
          "items": {
            "verification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "验证文件完整性：通过比较文件的MD5值，可以确认文件在传输过程中是否被篡改" } },
            "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "密码存储：网站和应用程序通常不会存储明文密码，而是存储密码的MD5散列值" } },
            "signature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "数字签名：在一些安全通信中，MD5常被用作数字签名的一部分" } },
            "deduplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文件去重：通过比较文件MD5值，可以快速识别重复文件" } }
          }
        },
        "features": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "我们的在线MD5工具有哪些特点" } },
          "items": {
            "client": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "客户端加密" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "所有加密过程在您的浏览器本地完成，不会上传至服务器，保证数据安全" } }
            },
            "algorithms": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "多种算法支持" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "除了标准MD5，还支持SHA-1和SHA-256等多种哈希算法" } }
            },
            "batch": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "批量处理" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "支持大量文本的批量加密，提高工作效率" } }
            },
            "history": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "历史记录" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "自动保存最近的加密历史，方便查看和比对" } }
            },
            "format": {
              "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "格式选择" } },
              "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "支持大小写输出格式，满足不同场景的需求" } }
            }
          }
        },
        "security": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "虽然MD5在密码学上已经被发现存在碰撞弱点，不再适合用于SSL证书或数字签名等安全用途，但在文件校验、非敏感信息处理等场景中，MD5仍然是一个简单高效的工具。对于需要更高安全性的场景，建议使用SHA-256等更安全的哈希算法。" } },
        "conclusion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "无论您是开发人员、系统管理员还是普通用户，我们的在线MD5加密工具都能为您提供便捷、安全的加密服务，帮助您更好地保护信息安全。" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-16 bg-white bg-opacity-90 rounded-xl p-6 border border-slate-200 shadow-md" }, _attrs))}><h2 class="text-xl font-semibold mb-4 text-slate-800">${ssrInterpolate(unref(t)("title"))}</h2><div class="prose prose-sm text-slate-600 max-w-none"><p>${ssrInterpolate(unref(t)("intro"))}</p><h3 class="text-lg font-medium mt-4 mb-2 text-slate-700">${ssrInterpolate(unref(t)("usages.title"))}</h3><ul class="list-disc pl-5 space-y-1"><li>${ssrInterpolate(unref(t)("usages.items.verification"))}</li><li>${ssrInterpolate(unref(t)("usages.items.password"))}</li><li>${ssrInterpolate(unref(t)("usages.items.signature"))}</li><li>${ssrInterpolate(unref(t)("usages.items.deduplication"))}</li></ul><h3 class="text-lg font-medium mt-4 mb-2 text-slate-700">${ssrInterpolate(unref(t)("features.title"))}</h3><ul class="list-disc pl-5 space-y-1"><li><strong>${ssrInterpolate(unref(t)("features.items.client.name"))}</strong>：${ssrInterpolate(unref(t)("features.items.client.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.algorithms.name"))}</strong>：${ssrInterpolate(unref(t)("features.items.algorithms.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.batch.name"))}</strong>：${ssrInterpolate(unref(t)("features.items.batch.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.history.name"))}</strong>：${ssrInterpolate(unref(t)("features.items.history.desc"))}</li><li><strong>${ssrInterpolate(unref(t)("features.items.format.name"))}</strong>：${ssrInterpolate(unref(t)("features.items.format.desc"))}</li></ul><p class="mt-4">${ssrInterpolate(unref(t)("security"))}</p><p class="mt-4">${ssrInterpolate(unref(t)("conclusion"))}</p></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/md5/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 编码" } },
        "tab": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文本" } },
          "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文件" } },
          "desc_text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入文本" } },
          "desc_file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入文件" } }
        },
        "input": {
          "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "请输入要加密的文本..." } }
        },
        "advanced": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "高级选项" } },
          "bit_16": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "16 位" } },
          "bit_32": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "32 位" } },
          "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "大写输出" } }
        },
        "btn": {
          "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "加密" } },
          "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "清空" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制" } },
          "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "粘贴" } }
        },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 编码" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在线md5加密, md5加密工具, 免费md5机密工具, md5编码工具，支持16位和32位大小写编码。" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5, 编码, 16 位, 32 位" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MD5 编码" } }
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
        if ((_a = historyRef.value) == null ? void 0 : _a.save) {
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
      const _component_tools_title = _sfc_main$8;
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
            _push2(`<div class="lg:col-span-2"${_scopeId}><div class="bg-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 p-6 border border-slate-200"${_scopeId}><div class="flex items-center mb-4"${_scopeId}><img src="https://unpkg.com/lucide-static@latest/icons/file-text.svg"${ssrRenderAttr("alt", unref(t)("tab.text"))} class="w-5 h-5 text-primary-600"${_scopeId}><h2 class="text-xl font-semibold ml-2"${_scopeId}>${ssrInterpolate(unref(t)("tab.desc_text"))}</h2></div><div class="space-y-4"${_scopeId}><div class="flex border-b border-slate-200"${_scopeId}><button class="py-2 px-4 border-b-2 border-primary-600 text-primary-600 font-medium"${_scopeId}>${ssrInterpolate(unref(t)("tab.text"))}</button></div><div${_scopeId}><textarea id="input-text" rows="8" class="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"${ssrRenderAttr("placeholder", unref(t)("input.placeholder"))}${_scopeId}>${ssrInterpolate(inputText.value)}</textarea></div><div class="bg-slate-50 rounded-lg p-4"${_scopeId}><details class="group" open${_scopeId}><summary class="flex items-center cursor-pointer text-sm font-medium text-slate-700"${_scopeId}><img src="https://unpkg.com/lucide-static@latest/icons/settings-2.svg" alt="高级设置" class="w-4 h-4 mr-2"${_scopeId}> ${ssrInterpolate(unref(t)("advanced.title"))} <img src="https://unpkg.com/lucide-static@latest/icons/chevron-down.svg" alt="展开" class="w-4 h-4 ml-auto transform group-open:rotate-180 transition-transform"${_scopeId}></summary><div class="mt-3 space-y-3"${_scopeId}><div class="flex flex-wrap gap-2"${_scopeId}><label class="flex items-center cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(bitLength.value, 16)) ? " checked" : ""} type="radio" name="bit"${ssrRenderAttr("value", 16)} checked class="form-radio text-primary-600 focus:ring-primary-500"${_scopeId}><span class="ml-2 text-sm text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("advanced.bit_16"))}</span></label><label class="flex items-center cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(bitLength.value, 32)) ? " checked" : ""} type="radio" name="bit"${ssrRenderAttr("value", 32)} class="form-radio text-primary-600 focus:ring-primary-500"${_scopeId}><span class="ml-2 text-sm text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("advanced.bit_32"))}</span></label></div><div class="flex items-center"${_scopeId}><label class="flex items-center cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(uppercase.value) ? ssrLooseContain(uppercase.value, null) : uppercase.value) ? " checked" : ""} type="checkbox" id="uppercase" class="form-checkbox text-primary-600 focus:ring-primary-500"${_scopeId}><span class="ml-2 text-sm text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("advanced.uppercase"))}</span></label></div></div></details></div><div class="flex flex-wrap gap-3"${_scopeId}>`);
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
                            alt: "高级设置",
                            class: "w-4 h-4 mr-2"
                          }),
                          createTextVNode(" " + toDisplayString(unref(t)("advanced.title")) + " ", 1),
                          createVNode("img", {
                            src: "https://unpkg.com/lucide-static@latest/icons/chevron-down.svg",
                            alt: "展开",
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-AOEQGkwa.js.map
