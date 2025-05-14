import { useSSRContext, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    href: String,
    title: String,
    desc: String,
    icon: String,
    alt: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        class: "bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center"
      }, _attrs))}><div class="bg-primary-50 p-3 rounded-lg min-w-[48px] w-12 h-12 flex items-center justify-center flex-shrink-0"><img${ssrRenderAttr("src", __props.icon)}${ssrRenderAttr("alt", __props.alt)} class="w-6 h-6 text-primary-600"></div><div class="ml-3 overflow-hidden flex-grow"><h3 class="font-medium text-slate-800 whitespace-nowrap overflow-hidden text-ellipsis">${ssrInterpolate(__props.title)}</h3><p class="text-xs text-slate-500 mt-0.5 line-clamp-2 overflow-hidden">${ssrInterpolate(__props.desc)}</p></div></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToolsCard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const setupSeoMeta = (useSeoMeta, t) => {
  useSeoMeta({
    title: t("seo.title"),
    description: t("seo.description"),
    keywords: t("seo.keywords"),
    meta: [
      { property: "og:title", content: t("seo.title") },
      { property: "og:description", content: t("seo.description") },
      // { property: "og:image", content: "this is og image for index page" },
      // { property: "og:url", content: "this is og url for index page" },
      // { property: "og:type", content: "this is og type for index page" },
      { property: "og:site_name", content: t("seo.name") }
      // { property: "og:locale", content: "this is og locale for index page" },
    ]
  });
};

export { _sfc_main as _, setupSeoMeta as s };
//# sourceMappingURL=seo-BNkHY44x.mjs.map
