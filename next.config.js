module.exports = {
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
