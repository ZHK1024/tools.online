const TBD$1 = "TBD";
const home$1 = "Home";
const en = {
  TBD: TBD$1,
  "layouts.title": "Vue I18n Example",
  home: home$1,
  "copy.title.success": "Copy Success",
  "copy.title.error": "Copy Error",
  "copy.message.success": "Copy to clipboard successfully!"
};
const TBD = "TBD";
const home = "\u9996\u9875";
const zh = {
  TBD,
  "layouts.title": "Vue I18n Example",
  home,
  "copy.title.success": "\u590D\u5236\u5B8C\u6210",
  "copy.title.error": "\u590D\u5236\u51FA\u9519",
  "copy.message.success": "\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01"
};
const locales = [
  {
    code: "en",
    file: "en.json",
    name: "English"
  },
  {
    code: "zh",
    file: "zh.json",
    name: "\u7B80\u4F53\u4E2D\u6587"
  },
  {
    code: "ja",
    file: "ja.json",
    name: "\u65E5\u672C\u8A9E"
  },
  {
    code: "ko",
    file: "ko.json",
    name: "\uD55C\uAD6D\uC5B4"
  },
  {
    code: "fr",
    file: "fr.json",
    name: "Fran\xE7ais"
  }
];
const currentLocales = locales;
locales.map((l) => l.code);
const i18n_config = () => ({
  legacy: false,
  locale: "en",
  availableLocales: currentLocales.map((l) => l.code),
  fallbackLocale: "en",
  // 区配不到的语言就用en
  messages: {
    en,
    zh
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-DiOOU_7p.mjs.map
