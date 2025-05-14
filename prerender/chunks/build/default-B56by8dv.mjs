import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext, ref, mergeProps } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/index.mjs';
import { a as useHead } from './index-BR4-xsG4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { f as useRoute, e as useI18n, g as useLocaleHead, _ as _export_sfc } from './server.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/ofetch/dist/node.mjs';
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
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/ruris/Documents/GitHub/tools100-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== undefined) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? undefined : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: undefined
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: undefined
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: undefined
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: undefined
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
    default: undefined
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
    const slotVnodes = (_a = slots.default) == null ? undefined : _a.call(slots);
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
      default: undefined
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
      title: ((_c = (_b = (_a = slots.default) == null ? undefined : _a.call(slots)) == null ? undefined : _b[0]) == null ? undefined : _c.children) || null
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
      default: undefined
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? undefined : _a.call(slots)) == null ? undefined : _b[0]) == null ? undefined : _c.children;
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
    return (_b = (_a = ctx.slots).default) == null ? undefined : _b.call(_a);
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
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5728\u7EBF\u5DE5\u5177\u7BB1" } },
        "tools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5DE5\u5177" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5173\u4E8E" } },
        "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8BED\u8A00" } },
        "theme": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u4E3B\u9898" } }
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
      return currentLocale.value === "en" ? "English" : "\u4E2D\u6587";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50" }, _attrs))} data-v-54eccbea><div class="container mx-auto px-4 max-w-7xl" data-v-54eccbea><div class="flex items-center justify-between h-16" data-v-54eccbea><div class="flex items-center" data-v-54eccbea><a href="/?" class="flex items-center" data-v-54eccbea><img${ssrRenderAttr("src", _imports_0)} alt="\u5DE5\u5177\u7BB1" class="w-8 h-8 text-primary-600" data-v-54eccbea><span class="ml-2 text-xl font-semibold text-slate-900" data-v-54eccbea>${ssrInterpolate(unref(t)("name"))}</span></a></div><div class="hidden md:flex items-center space-x-4" data-v-54eccbea><div class="relative" id="language-switcher" data-v-54eccbea><button class="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors flex items-center" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/globe.svg" alt="language" class="w-5 h-5 mr-1" data-v-54eccbea><span class="text-xs" data-v-54eccbea>${ssrInterpolate(currentLocaleName.value)}</span><img src="https://unpkg.com/lucide-static@latest/icons/chevron-down.svg" alt="open" class="w-3.5 h-3.5 ml-0.5" data-v-54eccbea></button><div class="${ssrRenderClass([{ hidden: !isLanguageDropdownOpen.value }, "absolute right-0 mt-1 py-1 w-28 bg-white border border-slate-200 rounded-md shadow-lg"])}" data-v-54eccbea><a class="${ssrRenderClass([{
        "text-primary-600": currentLocale.value === "en",
        "bg-primary-50": currentLocale.value === "en",
        "hover:bg-slate-50": currentLocale.value !== "en"
      }, "block px-4 py-1.5 text-sm font-medium"])}" lang="en" data-v-54eccbea> English </a><a class="${ssrRenderClass([{
        "text-primary-600": currentLocale.value === "zh",
        "bg-primary-50": currentLocale.value === "zh",
        "hover:bg-slate-50": currentLocale.value !== "zh"
      }, "block px-4 py-1.5 text-sm font-medium"])}" lang="zh" data-v-54eccbea> \u4E2D\u6587 </a></div></div><button class="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/sun.svg" alt="\u4E3B\u9898" class="w-5 h-5" data-v-54eccbea></button></div><div class="md:hidden flex items-center" data-v-54eccbea><button class="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/menu.svg" alt="\u83DC\u5355" class="w-6 h-6" data-v-54eccbea></button></div></div><div id="mobile-menu" class="${ssrRenderClass([{ "hidden": !isMobileMenuOpen.value }, "md:hidden pb-3"])}" data-v-54eccbea><div class="flex flex-col space-y-1" data-v-54eccbea><div class="px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md" data-v-54eccbea><div class="flex items-center justify-between" data-v-54eccbea><div class="flex items-center" data-v-54eccbea><img src="https://unpkg.com/lucide-static@latest/icons/globe.svg" alt="\u8BED\u8A00" class="w-5 h-5 mr-2" data-v-54eccbea><span data-v-54eccbea>${ssrInterpolate(unref(t)("language"))}</span></div></div><div class="mt-2 pl-7 flex space-x-2" data-v-54eccbea><button class="${ssrRenderClass([{
        "bg-primary-50 text-primary-600": currentLocale.value === "zh",
        "border border-slate-200 text-slate-600 hover:bg-slate-50": currentLocale.value !== "zh"
      }, "px-3 py-1 text-sm rounded font-medium"])}" data-v-54eccbea> \u4E2D\u6587 </button><button class="${ssrRenderClass([{
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
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54eccbea"]]);
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "slogan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA9 2025 Online Toolbox - A collection of secure and fast online tools" } },
        "service": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "User Agreement" } },
        "privacy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Privacy Policy" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "About" } },
        "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contact Us" } }
      },
      "zh": {
        "slogan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA9 2025 \u5728\u7EBF\u5DE5\u5177\u7BB1 - \u5B89\u5168\u3001\u5FEB\u901F\u7684\u5728\u7EBF\u5DE5\u5177\u96C6\u5408" } },
        "service": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u670D\u52A1\u534F\u8BAE" } },
        "privacy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u9690\u79C1\u653F\u7B56" } },
        "about": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u5173\u4E8E" } },
        "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u8054\u7CFB\u6211\u4EEC" } }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-4 max-w-7xl" }, _attrs))}><footer class="mt-16 text-center text-sm text-slate-500 pb-8"><div class="flex items-center justify-center mb-3"><a href="/privacy.html" class="mx-2 hover:text-primary-600 transition-colors">${ssrInterpolate(unref(t)("privacy"))}</a><span class="mx-2">\u2022</span><a href="/service.html" class="mx-2 hover:text-primary-600 transition-colors">${ssrInterpolate(unref(t)("service"))}</a></div><p>${ssrInterpolate(unref(t)("slogan"))}</p></footer></div>`);
    };
  }
};
if (typeof block0 === "function") block0(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MetaFooter/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
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
    const title = computed(() => {
      var _a;
      return t((_a = route.meta.title) != null ? _a : "TBD", t("layouts.title"));
    });
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
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B56by8dv.mjs.map
