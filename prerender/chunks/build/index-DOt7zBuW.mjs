import { _ as __nuxt_component_0 } from './full-30hiHSHR.mjs';
import { _ as _sfc_main$4 } from './index-C-qkCW1q.mjs';
import { withCtx, unref, createVNode, useSSRContext, ref, computed, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
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
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801/\u89E3\u7801\u5DE5\u5177" } },
        "modes": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u672C\u8F6C\u6362" } },
          "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u4EF6\u8F6C\u6362" } }
        },
        "text_mode": {
          "input": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u6587\u672C" } },
            "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u5165\u8981\u7F16\u7801\u7684\u6587\u672C\u6216\u8981\u89E3\u7801\u7684 Base64..." } }
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
          }
        },
        "file_mode": {
          "drop_zone": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u62D6\u653E\u6587\u4EF6\u5230\u6B64\u5904\uFF0C\u6216" } },
            "select_button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9009\u62E9\u6587\u4EF6" } }
          },
          "file_info": {
            "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u79FB\u9664" } }
          },
          "output": {
            "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8F93\u51FA\u7ED3\u679C" } }
          }
        },
        "errors": {
          "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9" } },
          "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u7801\u9519\u8BEF\uFF0C\u8BF7\u786E\u4FDD\u8F93\u5165\u662F\u6709\u6548\u7684 Base64 \u7F16\u7801" } },
          "file_processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u4EF6\u5904\u7406\u9519\u8BEF" } }
        },
        "guide": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4F7F\u7528\u8BF4\u660E" } },
          "what_is": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4EC0\u4E48\u662F Base64\uFF1F" } },
            "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u662F\u4E00\u79CD\u57FA\u4E8E 64 \u4E2A\u53EF\u6253\u5370\u5B57\u7B26\u6765\u8868\u793A\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u7F16\u7801\u65B9\u6CD5\uFF0C\u5E38\u7528\u4E8E\u5728\u5904\u7406\u6587\u672C\u7684\u573A\u5408\uFF0C\u8868\u793A\u3001\u4F20\u8F93\u3001\u5B58\u50A8\u4E00\u4E9B\u4E8C\u8FDB\u5236\u6570\u636E\u3002" } }
          },
          "use_cases": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4F7F\u7528\u573A\u666F" } },
            "items": [
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728 HTML \u4E2D\u5D4C\u5165\u56FE\u7247\u3001\u97F3\u9891\u7B49\u4E8C\u8FDB\u5236\u6587\u4EF6" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728 URL \u4E2D\u5B89\u5168\u4F20\u8F93\u4E8C\u8FDB\u5236\u6570\u636E" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801\u90AE\u4EF6\u9644\u4EF6" } },
              { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BF9\u654F\u611F\u6570\u636E\u8FDB\u884C\u7B80\u5355\u7F16\u7801" } }
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
      ])}"><img src="https://unpkg.com/lucide-static@latest/icons/type.svg" alt="\u6587\u672C" class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("modes.text"))}</button><button class="${ssrRenderClass([
        "px-4 py-2 rounded-lg font-medium flex items-center",
        !isTextMode.value ? "bg-primary-50 text-primary-700" : "text-slate-600 hover:bg-slate-50"
      ])}"><img src="https://unpkg.com/lucide-static@latest/icons/file.svg" alt="\u6587\u4EF6" class="w-4 h-4 mr-2"> ${ssrInterpolate(unref(t)("modes.file"))}</button></div><div style="${ssrRenderStyle(isTextMode.value ? null : { display: "none" })}" class="space-y-6"><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("text_mode.input.label"))}</label><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/clipboard.svg" alt="\u7C98\u8D34" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.paste"))}</button><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="\u590D\u5236" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.copy"))}</button><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/x.svg" alt="\u6E05\u7A7A" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.clear"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-y p-3 text-slate-800 font-mono text-sm"${ssrRenderAttr("placeholder", unref(t)("text_mode.input.placeholder"))}>${ssrInterpolate(inputText.value)}</textarea></div><div class="flex justify-center space-x-4"><button class="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/arrow-down.svg" alt="\u7F16\u7801" class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("text_mode.buttons.encode"))}</button><button class="px-6 py-2.5 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/arrow-down.svg" alt="\u89E3\u7801" class="w-5 h-5 mr-2"> ${ssrInterpolate(unref(t)("text_mode.buttons.decode"))}</button></div><div><div class="flex justify-between items-center mb-2"><label class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("text_mode.output.label"))}</label><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="\u590D\u5236" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.copy"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 font-mono text-sm" readonly>${ssrInterpolate(outputText.value)}</textarea></div></div><div style="${ssrRenderStyle(!isTextMode.value ? null : { display: "none" })}" class="space-y-6"><div class="${ssrRenderClass([{ "border-primary-400": isDragging.value }, "border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors"])}"><div class="flex flex-col items-center"><img src="https://unpkg.com/lucide-static@latest/icons/upload.svg" alt="\u4E0A\u4F20" class="w-12 h-12 text-slate-400 mb-4"><p class="text-slate-600 mb-4">${ssrInterpolate(unref(t)("file_mode.drop_zone.title"))}</p><label class="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all">${ssrInterpolate(unref(t)("file_mode.drop_zone.select_button"))} <input type="file" class="hidden"></label></div></div>`);
      if (selectedFile.value) {
        _push(`<div class="space-y-6"><div class="bg-slate-50 rounded-lg p-4 mb-4"><div class="flex items-center justify-between mb-2"><div class="flex items-center"><img src="https://unpkg.com/lucide-static@latest/icons/file.svg" alt="\u6587\u4EF6" class="w-5 h-5 text-slate-500 mr-2"><span class="text-slate-700 font-medium">${ssrInterpolate(selectedFile.value.name)}</span></div><button class="text-slate-500 hover:text-slate-700"${ssrRenderAttr("title", unref(t)("file_mode.file_info.remove"))}><img src="https://unpkg.com/lucide-static@latest/icons/x.svg" alt="\u79FB\u9664" class="w-4 h-4"></button></div><div class="text-sm text-slate-500">${ssrInterpolate(formattedFileSize.value)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><span class="text-sm font-medium text-slate-700">${ssrInterpolate(unref(t)("file_mode.output.label"))}</span><div class="flex space-x-3"><button class="text-sm text-slate-600 hover:text-primary-600 flex items-center transition-colors"><img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" alt="\u590D\u5236" class="w-4 h-4 mr-1"> ${ssrInterpolate(unref(t)("text_mode.buttons.copy"))}</button></div></div><textarea rows="6" class="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 font-mono text-sm" readonly>${ssrInterpolate(fileOutputText.value)}</textarea></div></div>`);
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
          "parser": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u89E3\u6790\u5668" } },
            "desc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u89E3\u6790\u548C\u5206\u6790 URL \u7EC4\u4EF6" } }
          },
          "coder": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \u7F16\u7801/\u89E3\u7801" } },
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
      const _component_tools_card = _sfc_main$5;
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
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
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u5728\u7EBF\u5DE5\u5177\u4F7F\u7528\u8BF4\u660E" } },
        "what-is-base64-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4EC0\u4E48\u662F Base64\uFF1F" } },
        "what-is-base64-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u662F\u4E00\u79CD\u57FA\u4E8E 64 \u4E2A\u53EF\u6253\u5370\u5B57\u7B26\u6765\u8868\u793A\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u7F16\u7801\u65B9\u6CD5\uFF0C\u5E38\u7528\u4E8E\u5728\u5904\u7406\u6587\u672C\u7684\u573A\u5408\uFF0C\u8868\u793A\u3001\u4F20\u8F93\u3001\u5B58\u50A8\u4E00\u4E9B\u4E8C\u8FDB\u5236\u6570\u636E\u3002Base64\u5C06\u4E8C\u8FDB\u5236\u6570\u636E\u8F6C\u6362\u4E3A\u53EF\u6253\u5370\u7684ASCII\u5B57\u7B26\u96C6\uFF0C\u786E\u4FDD\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u88AB\u7BE1\u6539\u3002" } },
        "use-cases-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5E38\u89C1\u4F7F\u7528\u573A\u666F" } },
        "use-cases": {
          "html": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728 HTML \u4E2D\u5D4C\u5165\u56FE\u7247\u3001\u97F3\u9891\u7B49\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08Data URI\u65B9\u6848\uFF09" } },
          "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728 URL \u4E2D\u5B89\u5168\u4F20\u8F93\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u907F\u514D\u7279\u6B8A\u5B57\u7B26\u95EE\u9898" } },
          "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u7F16\u7801\u90AE\u4EF6\u9644\u4EF6\uFF08MIME\u683C\u5F0F\uFF09" } },
          "sensitive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5BF9\u654F\u611F\u6570\u636E\u8FDB\u884C\u7B80\u5355\u7F16\u7801\uFF08\u6CE8\u610F\uFF1A\u4E0D\u662F\u52A0\u5BC6\uFF09" } },
          "xml-json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "XML\u548CJSON\u4E2D\u5305\u542B\u4E8C\u8FDB\u5236\u6570\u636E" } }
        },
        "tool-features-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u672C\u5DE5\u5177\u529F\u80FD" } },
        "tool-features": {
          "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u672C\u4E0EBase64\u7F16\u7801\u4E4B\u95F4\u7684\u76F8\u4E92\u8F6C\u6362" } },
          "charset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u652F\u6301UTF-8\u7B49\u591A\u79CD\u5B57\u7B26\u96C6\u7F16\u7801" } },
          "file-to-base64": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u6587\u4EF6\u8F6CBase64\u7F16\u7801\uFF08\u56FE\u7247\u3001PDF\u7B49\uFF09" } },
          "base64-to-file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64\u7F16\u7801\u8F6C\u56DE\u6587\u4EF6\u4E0B\u8F7D" } },
          "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5FEB\u901F\u590D\u5236\u7ED3\u679C\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387" } }
        },
        "tips-title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4F7F\u7528\u63D0\u793A" } },
        "tips-content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64\u7F16\u7801\u540E\u7684\u6570\u636E\u4F53\u79EF\u901A\u5E38\u4F1A\u589E\u52A0\u7EA633%\uFF0C\u8BF7\u6CE8\u610F\u5BF9\u5927\u6587\u4EF6\u8FDB\u884C\u7F16\u7801\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002\u672C\u5DE5\u5177\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u6240\u6709\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u5C06\u60A8\u7684\u6570\u636E\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u4FDD\u969C\u60A8\u7684\u6570\u636E\u5B89\u5168\u3002" } }
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
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
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
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801/\u89E3\u7801\u5DE5\u5177" } },
        "seo": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801\u5728\u7EBF" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801\u5728\u7EBF\u662F\u4E00\u4E2A\u514D\u8D39\u7684\u5728\u7EBF\u5DE5\u5177\uFF0C\u7528\u4E8E\u7F16\u7801\u548C\u89E3\u7801 Base64 \u5B57\u7B26\u4E32\u3002" } },
          "keywords": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64, \u7F16\u7801, \u89E3\u7801, \u5728\u7EBF, \u5DE5\u5177" } },
          "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base64 \u7F16\u7801" } }
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DOt7zBuW.mjs.map
