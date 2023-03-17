module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["es-AR", "en-US"],
    localePath:
      typeof window === "undefined"
        ? require("path").resolve("./public/locales")
        : "/public/locales",
  },
  localeStructure: "{{lng}}/{{ns}}",
  reloadOnPrerender: true,
  keySeparator: ".",
};
