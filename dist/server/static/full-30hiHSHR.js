import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = {
  data() {
    return {
      showAd: true
    };
  },
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.loadAdsense();
    }
  },
  methods: {
    loadAdsense() {
      const adsbygoogle = (void 0).createElement("script");
      adsbygoogle.async = true;
      adsbygoogle.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      (void 0).head.appendChild(adsbygoogle);
      const adUnit = (void 0).createElement("ins");
      adUnit.className = "adsbygoogle";
      adUnit.style.display = "block";
      adUnit.dataset.adClient = "ca-pub-3737189245877678";
      adUnit.dataset.adSlot = "9066916744";
      adUnit.dataset.adFormat = "auto";
      adUnit.dataset.fullWidthResponsive = "true";
      this.$refs.adsContainer.appendChild(adUnit);
      ((void 0).adsbygoogle = (void 0).adsbygoogle || []).push({});
      this.showAd = true;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.showAd) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "ads-container",
      ref: "adsContainer"
    }, _attrs))} data-v-b287ee64>1231</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Adsense/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b287ee64"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Adsense = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 max-w-7xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "main", {}, null, _push, _parent);
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "output", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "history", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Adsense, null, null, _parent));
  _push(`<div class="mt-16"><div class="flex items-center mb-6"><img src="https://unpkg.com/lucide-static@latest/icons/layout-grid.svg" alt="推荐" class="w-5 h-5 text-primary-600 mr-2"><h2 class="text-xl font-bold">推荐工具</h2></div>`);
  ssrRenderSlot(_ctx.$slots, "tools", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageLayout/full.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=full-30hiHSHR.js.map
