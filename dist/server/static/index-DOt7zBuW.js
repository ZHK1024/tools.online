import { _ as __nuxt_component_0 } from "./full-30hiHSHR.js";
import { _ as _sfc_main$5 } from "./index-C-qkCW1q.js";
import { ref, computed, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "crypto-js";
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
function block0$3(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encoder/Decoder" } },
        "modes": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text Mode" } },
          "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File Mode" } }
        },
        "text_mode": {
          "input": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input Text" } },
            "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter text to encode or Base64 to decode..." } }
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
          }
        },
        "file_mode": {
          "drop_zone": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drop file here, or" } },
            "select_button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select File" } }
          },
          "file_info": {
            "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remove" } }
          },
          "output": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Result" } }
          }
        },
        "errors": {
          "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding error, please check input content" } },
          "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decoding error, please ensure input is valid Base64" } },
          "file_processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File processing error" } }
        },
        "guide": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usage Guide" } },
          "what_is": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What is Base64?" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 is an encoding method that represents binary data using 64 printable characters, commonly used for representing, transmitting, and storing binary data in text-based environments." } }
          },
          "use_cases": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Use Cases" } },
            "items": [
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Embedding images, audio, and other binary files in HTML" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Safe transmission of binary data in URLs" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding email attachments" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basic encoding of sensitive data" } }
            ]
          }
        }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码/解码工具" } },
        "modes": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文本转换" } },
          "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文件转换" } }
        },
        "text_mode": {
          "input": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入文本" } },
            "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输入要编码的文本或要解码的 Base64..." } }
          },
          "buttons": {
            "paste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "粘贴" } },
            "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "复制" } },
            "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "清空" } },
            "encode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编码" } },
            "decode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解码" } }
          },
          "output": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输出结果" } }
          }
        },
        "file_mode": {
          "drop_zone": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "拖放文件到此处，或" } },
            "select_button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "选择文件" } }
          },
          "file_info": {
            "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "移除" } }
          },
          "output": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "输出结果" } }
          }
        },
        "errors": {
          "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编码错误，请检查输入内容" } },
          "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解码错误，请确保输入是有效的 Base64 编码" } },
          "file_processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文件处理错误" } }
        },
        "guide": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "使用说明" } },
          "what_is": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "什么是 Base64？" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 是一种基于 64 个可打印字符来表示二进制数据的编码方法，常用于在处理文本的场合，表示、传输、存储一些二进制数据。" } }
          },
          "use_cases": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "使用场景" } },
            "items": [
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在 HTML 中嵌入图片、音频等二进制文件" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在 URL 中安全传输二进制数据" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编码邮件附件" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "对敏感数据进行简单编码" } }
            ]
          }
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
    const isTextMode = ref(true);
    const inputText = ref("");
    const outputText = ref("");
    const selectedFile = ref(null);
    const fileOutputText = ref("");
    const isDragging = ref(false);
    const formattedFileSize = computed(() => {
      if (!selectedFile.value) return "";
      return formatFileSize(selectedFile.value.size);
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 space-y-8" }, _attrs))}><div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8"><div class="flex space-x-4 mb-6"><button class="${ssrRenderClass([
        "px-4 py-2 rounded-lg font-medium flex items-center",
        isTextMode.value ? "bg-primary-50 text-primary-700" : "text-slate-600 hover:bg-slate-50"
      ])}"><img src="https://unpkg.com/lucide-static@latest/icons/type.svg" alt="文本" class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("modes.text"))}</button><button class="${ssrRenderClass([
        "px-4 py-2 rounded-lg font-medium flex items-center",
        !isTextMode.value ? "bg-primary-50 text-primary-700" : "text-slate-600 hover:bg-slate-50"
      ])}"><img src="https://unpkg.com/lucide-static@latest/icons/file.svg" alt="文件" class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("modes.file"))}</button></div><div style="${ssrRenderStyle(isTextMode.value ? null : { display: "none" })}" class="space-y-6"><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("text_mode.input.label"))}</label><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg" alt="粘贴" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.paste"))}</button><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="复制" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.copy"))}</button><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg" alt="清空" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.clear"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-y p-3 text-slate-800 font-mono text-sm"${ssrRenderAttr("placeholder", unref(t)("text_mode.input.placeholder"))}>${ssrInterpolate(inputText.value)}</textarea></div><div class="flex justify-center space-x-4"><button class="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/arrow-down.svg" alt="编码" class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("text_mode.buttons.encode"))}</button><button class="px-6 py-2.5 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/arrow-down.svg" alt="解码" class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("text_mode.buttons.decode"))}</button></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("text_mode.output.label"))}</label><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="复制" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.copy"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 font-mono text-sm" readonly>${ssrInterpolate(outputText.value)}</textarea></div></div><div style="${ssrRenderStyle(!isTextMode.value ? null : { display: "none" })}" class="space-y-6"><div class="${ssrRenderClass([{ "border-primary-400": isDragging.value }, "border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors"])}"><div class="flex flex-col items-center"><img src="https://unpkg.com/lucide-static@latest/icons/upload.svg" alt="上传" class="w-12 h-12 text-slate-400 mb-4"><p class="text-slate-600 mb-4">${ssrInterpolate(unref(t)("file_mode.drop_zone.title"))}</p><label class="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all">${ssrInterpolate(unref(t)("file_mode.drop_zone.select_button"))} <input type="file" class="hidden"></label></div></div>`);
      if (selectedFile.value) {
        _push(`<div class="space-y-6"><div class="bg-slate-50 rounded-lg p-4 mb-4"><div class="flex items-center justify-between mb-2"><div class="flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/file.svg" alt="文件" class="w-5 h-5 text-slate-500 mr-2"><span class="text-slate-700 font-medium">${ssrInterpolate(selectedFile.value.name)}</span></div><button class="text-slate-500 hover:text-slate-700"${ssrRenderAttr("title", unref(t)("file_mode.file_info.remove"))}><img src="https://unpkg.com/lucide-static@latest/icons/x.svg" alt="移除" class="w-4 h-4"></button></div><div class="text-sm text-slate-500">${ssrInterpolate(formattedFileSize.value)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><span class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("file_mode.output.label"))}</span><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="复制" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.copy"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 font-mono text-sm" readonly>${ssrInterpolate(fileOutputText.value)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
if (typeof block0$3 === "function") block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base64/components/main.vue");
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
        "sha": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA Encryption" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA-1/256/512 encryption tools" } }
        },
        "url": {
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Parser" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parse and analyze URL components" } }
          },
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL Encoder/Decoder" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encode and decode URL strings" } }
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
        "sha": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA 加密" } },
          "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SHA-1/256/512加密工具" } }
        },
        "url": {
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 解析器" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "解析和分析 URL 组件" } }
          },
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL 编码/解码" } },
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
      const _component_tools_card = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-6" }, _attrs))}>`);
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
        icon: "https://unpkg.com/lucide-static@latest/icons/shield.svg",
        alt: "URL Encode & Decode"
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
if (typeof block0$2 === "function") block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base64/components/tools.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Online Tool Instructions" } },
        "what-is-base64-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What is Base64?" } },
        "what-is-base64-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 is an encoding method that represents binary data using 64 printable characters, commonly used for representing, transmitting, and storing binary data in text-based environments. Base64 converts binary data into printable ASCII characters, ensuring data integrity during transmission." } },
        "use-cases-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Common Use Cases" } },
        "use-cases": {
          "html": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Embedding binary files like images and audio in HTML (Data URI scheme)" } },
          "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Safely transmitting binary data in URLs, avoiding special character issues" } },
          "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding email attachments (MIME format)" } },
          "sensitive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Simple encoding of sensitive data (Note: not encryption)" } },
          "xml-json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Including binary data in XML and JSON" } }
        },
        "tool-features-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tool Features" } },
        "tool-features": {
          "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convert between text and Base64 encoding" } },
          "charset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Support for multiple character encodings including UTF-8" } },
          "file-to-base64": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convert files to Base64 (images, PDFs, etc.)" } },
          "base64-to-file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convert Base64 back to downloadable files" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quick copy results to improve workflow efficiency" } }
        },
        "tips-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usage Tips" } },
        "tips-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 encoded data is typically about 33% larger than the original data. Please note that encoding large files may cause performance issues. This tool performs all operations in your browser and does not upload your data to any server, ensuring data security." } }
      },
      "zh": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 在线工具使用说明" } },
        "what-is-base64-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "什么是 Base64？" } },
        "what-is-base64-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 是一种基于 64 个可打印字符来表示二进制数据的编码方法，常用于在处理文本的场合，表示、传输、存储一些二进制数据。Base64将二进制数据转换为可打印的ASCII字符集，确保数据在传输过程中不会被篡改。" } },
        "use-cases-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "常见使用场景" } },
        "use-cases": {
          "html": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在 HTML 中嵌入图片、音频等二进制文件（Data URI方案）" } },
          "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在 URL 中安全传输二进制数据，避免特殊字符问题" } },
          "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "编码邮件附件（MIME格式）" } },
          "sensitive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "对敏感数据进行简单编码（注意：不是加密）" } },
          "xml-json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "XML和JSON中包含二进制数据" } }
        },
        "tool-features-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "本工具功能" } },
        "tool-features": {
          "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文本与Base64编码之间的相互转换" } },
          "charset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "支持UTF-8等多种字符集编码" } },
          "file-to-base64": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "文件转Base64编码（图片、PDF等）" } },
          "base64-to-file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64编码转回文件下载" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "快速复制结果，提高工作效率" } }
        },
        "tips-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "使用提示" } },
        "tips-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64编码后的数据体积通常会增加约33%，请注意对大文件进行编码可能会导致性能问题。本工具在您的浏览器中完成所有操作，不会将您的数据上传至服务器，保障您的数据安全。" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8" }, _attrs))}><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(unref(t)("title"))}</h3><div class="space-y-4 text-slate-600"><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/info.svg"${ssrRenderAttr("alt", unref(t)("what-is-base64-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("what-is-base64-title"))}</p><p>${ssrInterpolate(unref(t)("what-is-base64-content"))}</p></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/help-circle.svg"${ssrRenderAttr("alt", unref(t)("use-cases-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("use-cases-title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("use-cases.html"))}</li><li>${ssrInterpolate(unref(t)("use-cases.url"))}</li><li>${ssrInterpolate(unref(t)("use-cases.email"))}</li><li>${ssrInterpolate(unref(t)("use-cases.sensitive"))}</li><li>${ssrInterpolate(unref(t)("use-cases.xml-json"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/tool.svg"${ssrRenderAttr("alt", unref(t)("tool-features-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("tool-features-title"))}</p><ul class="list-disc list-inside space-y-1"><li>${ssrInterpolate(unref(t)("tool-features.convert"))}</li><li>${ssrInterpolate(unref(t)("tool-features.charset"))}</li><li>${ssrInterpolate(unref(t)("tool-features.file-to-base64"))}</li><li>${ssrInterpolate(unref(t)("tool-features.base64-to-file"))}</li><li>${ssrInterpolate(unref(t)("tool-features.copy"))}</li></ul></div></div><div class="flex items-start"><img src="https://unpkg.com/lucide-static@latest/icons/lightbulb.svg"${ssrRenderAttr("alt", unref(t)("tips-title"))} class="w-5 h-5 text-primary-600 mr-2 mt-0.5"><div><p class="font-medium text-slate-800 mb-1">${ssrInterpolate(unref(t)("tips-title"))}</p><p>${ssrInterpolate(unref(t)("tips-content"))}</p></div></div></div></div>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base64/components/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encoder/Decoder" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encode Online" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encode Online is a free online tool to encode and decode Base64 strings." } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64, Encode, Decode, Online, Tool" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 Encode" } }
        }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码/解码工具" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码在线" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码在线是一个免费的在线工具，用于编码和解码 Base64 字符串。" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64, 编码, 解码, 在线, 工具" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 编码" } }
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
              icon: "https://unpkg.com/lucide-static@latest/icons/code.svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_tools_title, {
                title: unref(t)("name"),
                icon: "https://unpkg.com/lucide-static@latest/icons/code.svg"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base64/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DOt7zBuW.js.map
