import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot } from "vue";
import { u as useHead } from "./index-BR4-xsG4.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc, e as useI18n, f as useRoute, g as useLocaleHead } from "../server.mjs";
import "@unhead/shared";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "consola";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: [String, Object, Array],
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _imports_0 = publicAssetsURL("/logo.svg");
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online Toolbox" } },
        "tools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tools" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "About" } },
        "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Language" } },
        "theme": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Theme" } }
      },
      "zh": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "在线工具箱" } },
        "tools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "工具" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "关于" } },
        "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "语言" } },
        "theme": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "主题" } }
      }
    }
  });
}
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setLocale, locale } = useI18n();
    const { t } = useI18n({
      useScope: "local"
    });
    const currentLocale = ref(locale.value);
    const isLanguageDropdownOpen = ref(false);
    const isMobileMenuOpen = ref(false);
    ref(null);
    ref(null);
    ref(null);
    console.log(currentLocale.value);
    const currentLocaleName = computed(() => {
      return currentLocale.value === "en" ? "English" : "中文";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50" }, _attrs))} data-v-54eccbea><div class="container mx-auto px-4 max-w-7xl" data-v-54eccbea><div class="flex items-center justify-between h-16" data-v-54eccbea><div class="flex items-center" data-v-54eccbea><a href="/?" class="flex items-center" data-v-54eccbea><img${ssrRenderAttr("src", _imports_0)} alt="工具箱" class="w-8 h-8 text-primary-600" data-v-54eccbea><span class="ml-2 text-xl font-semibold text-slate-900" data-v-54eccbea>${ssrInterpolate(unref(t)("name"))}</span></a></div><div class="hidden md:flex items-center space-x-4" data-v-54eccbea><div class="relative" id="language-switcher" data-v-54eccbea><button class="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors flex items-center" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/globe.svg" alt="language" class="w-5 h-5 mr-1" data-v-54eccbea><span class="text-xs" data-v-54eccbea>${ssrInterpolate(currentLocaleName.value)}</span><img src="https://unpkg.com/lucide-static@latest/icons/chevron-down.svg" alt="open" class="w-3.5 h-3.5 ml-0.5" data-v-54eccbea></button><div class="${ssrRenderClass([{ hidden: !isLanguageDropdownOpen.value }, "absolute right-0 mt-1 py-1 w-28 bg-white border border-slate-200 rounded-md shadow-lg"])}" data-v-54eccbea><a class="${ssrRenderClass([{
        "text-primary-600": currentLocale.value === "en",
        "bg-primary-50": currentLocale.value === "en",
        "hover:bg-slate-50": currentLocale.value !== "en"
      }, "block px-4 py-1.5 text-sm font-medium"])}" lang="en" data-v-54eccbea> English </a><a class="${ssrRenderClass([{
        "text-primary-600": currentLocale.value === "zh",
        "bg-primary-50": currentLocale.value === "zh",
        "hover:bg-slate-50": currentLocale.value !== "zh"
      }, "block px-4 py-1.5 text-sm font-medium"])}" lang="zh" data-v-54eccbea> 中文 </a></div></div><button class="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/sun.svg" alt="主题" class="w-5 h-5" data-v-54eccbea></button></div><div class="md:hidden flex items-center" data-v-54eccbea><button class="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/menu.svg" alt="菜单" class="w-6 h-6" data-v-54eccbea></button></div></div><div id="mobile-menu" class="${ssrRenderClass([{ "hidden": !isMobileMenuOpen.value }, "md:hidden pb-3"])}" data-v-54eccbea><div class="flex flex-col space-y-1" data-v-54eccbea><div class="px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md" data-v-54eccbea><div class="flex items-center justify-between" data-v-54eccbea><div class="flex items-center" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/globe.svg" alt="语言" class="w-5 h-5 mr-2" data-v-54eccbea><span data-v-54eccbea>${ssrInterpolate(unref(t)("language"))}</span></div></div><div class="mt-2 pl-7 flex space-x-2" data-v-54eccbea><button class="${ssrRenderClass([{
        "bg-primary-50 text-primary-600": currentLocale.value === "zh",
        "border border-slate-200 text-slate-600 hover:bg-slate-50": currentLocale.value !== "zh"
      }, "px-3 py-1 text-sm rounded font-medium"])}" data-v-54eccbea> 中文 </button><button class="${ssrRenderClass([{
        "bg-primary-50 text-primary-600": currentLocale.value === "en",
        "border border-slate-200 text-slate-600 hover:bg-slate-50": currentLocale.value !== "en"
      }, "px-3 py-1 text-sm rounded"])}" data-v-54eccbea> English </button></div></div></div></div></div></nav>`);
    };
  }
};
if (typeof block0$1 === "function") block0$1(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavHeader/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54eccbea"]]);
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "slogan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "© 2025 Online Toolbox - A collection of secure and fast online tools" } },
        "service": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "User Agreement" } },
        "privacy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Privacy Policy" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "About" } },
        "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contact Us" } }
      },
      "zh": {
        "slogan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "© 2025 在线工具箱 - 安全、快速的在线工具集合" } },
        "service": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "服务协议" } },
        "privacy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "隐私政策" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "关于" } },
        "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "联系我们" } }
      }
    }
  });
}
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-4 max-w-7xl" }, _attrs))}><footer class="mt-16 text-center text-sm text-slate-500 pb-8"><div class="flex items-center justify-center mb-3"><a href="/privacy.html" class="mx-2 hover:text-primary-600 transition-colors">${ssrInterpolate(unref(t)("privacy"))}</a><span class="mx-2">•</span><a href="/service.html" class="mx-2 hover:text-primary-600 transition-colors">${ssrInterpolate(unref(t)("service"))}</a></div><p>${ssrInterpolate(unref(t)("slogan"))}</p></footer></div>`);
    };
  }
};
if (typeof block0 === "function") block0(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MetaFooter/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const head = useLocaleHead({
      addSeoAttributes: true,
      addDirAttribute: true
    });
    const title = computed(() => t(route.meta.title ?? "TBD", t("layouts.title")));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Html = Html;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Link = Link;
      const _component_Meta = Meta;
      const _component_Body = Body;
      const _component_nav_header = __nuxt_component_6;
      const _component_meta_footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Html, {
        lang: unref(head).htmlAttrs.lang,
        dir: unref(head).htmlAttrs.dir
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(title))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(title)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(head).link, (link) => {
                    _push3(ssrRenderComponent(_component_Link, {
                      key: link.hid,
                      id: link.hid,
                      rel: link.rel,
                      href: link.href,
                      hreflang: link.hreflang
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><!--[-->`);
                  ssrRenderList(unref(head).meta, (meta) => {
                    _push3(ssrRenderComponent(_component_Meta, {
                      key: meta.hid,
                      id: meta.hid,
                      property: meta.property,
                      content: meta.content
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_Title, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(title)), 1)
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(head).link, (link) => {
                      return openBlock(), createBlock(_component_Link, {
                        key: link.hid,
                        id: link.hid,
                        rel: link.rel,
                        href: link.href,
                        hreflang: link.hreflang
                      }, null, 8, ["id", "rel", "href", "hreflang"]);
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(head).meta, (meta) => {
                      return openBlock(), createBlock(_component_Meta, {
                        key: meta.hid,
                        id: meta.hid,
                        property: meta.property,
                        content: meta.content
                      }, null, 8, ["id", "property", "content"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Body, { class: "min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 text-slate-900" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nav_header, null, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(_component_meta_footer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nav_header),
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(_component_meta_footer)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Head, null, {
                default: withCtx(() => [
                  createVNode(_component_Title, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(title)), 1)
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(head).link, (link) => {
                    return openBlock(), createBlock(_component_Link, {
                      key: link.hid,
                      id: link.hid,
                      rel: link.rel,
                      href: link.href,
                      hreflang: link.hreflang
                    }, null, 8, ["id", "rel", "href", "hreflang"]);
                  }), 128)),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(head).meta, (meta) => {
                    return openBlock(), createBlock(_component_Meta, {
                      key: meta.hid,
                      id: meta.hid,
                      property: meta.property,
                      content: meta.content
                    }, null, 8, ["id", "property", "content"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_Body, { class: "min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 text-slate-900" }, {
                default: withCtx(() => [
                  createVNode(_component_nav_header),
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(_component_meta_footer)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-B56by8dv.js.map
