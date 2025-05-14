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
const home = "首页";
const zh = {
  TBD,
  "layouts.title": "Vue I18n Example",
  home,
  "copy.title.success": "复制完成",
  "copy.title.error": "复制出错",
  "copy.message.success": "已成功复制到剪贴板！"
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
    name: "简体中文"
  },
  {
    code: "ja",
    file: "ja.json",
    name: "日本語"
  },
  {
    code: "ko",
    file: "ko.json",
    name: "한국어"
  },
  {
    code: "fr",
    file: "fr.json",
    name: "Français"
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
export {
  i18n_config as default
};
//# sourceMappingURL=i18n.config-DiOOU_7p.js.map
