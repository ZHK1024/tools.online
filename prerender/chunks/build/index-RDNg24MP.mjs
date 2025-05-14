import { useSSRContext, ref, mergeProps, unref } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
import { e as useI18n } from './server.mjs';

function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "copied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copied" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy" } }
      },
      "zh": {
        "copied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5DF2\u590D\u5236" } },
        "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u590D\u5236" } }
      }
    }
  });
}
const copyIcon = "https://unpkg.com/lucide-static@latest/icons/copy.svg";
const checkIcon = "https://unpkg.com/lucide-static@latest/icons/check.svg";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {
      type: String,
      required: true
    },
    successDuration: {
      type: Number,
      default: 2e3
    }
  },
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    const isSuccess = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "text-sm text-primary-600 hover:text-primary-700 flex items-center" }, _attrs))}><img${ssrRenderAttr("src", isSuccess.value ? checkIcon : copyIcon)}${ssrRenderAttr("alt", isSuccess.value ? unref(t)("copied") : unref(t)("copy"))} class="w-4 h-4 mr-1"> ${ssrInterpolate(isSuccess.value ? unref(t)("copied") : unref(t)("copy"))}</button>`);
    };
  }
};
if (typeof block0 === "function") block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cc/CopyButton/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-RDNg24MP.mjs.map
