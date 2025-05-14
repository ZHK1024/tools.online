import { useSSRContext, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: String,
    icon: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row justify-between items-center mb-8" }, _attrs))}><div class="flex items-center"><img${ssrRenderAttr("src", __props.icon)} alt="Logo" class="w-8 h-8 text-primary-600"><h1 class="text-2xl md:text-3xl font-bold ml-2 bg-gradient-to-r from-primary-600 to-indigo-600 text-transparent bg-clip-text">${ssrInterpolate(__props.title)}</h1></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToolsTitle/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-C-qkCW1q.mjs.map
