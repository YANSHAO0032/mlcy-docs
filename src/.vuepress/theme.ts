import { hopeTheme } from "vuepress-theme-hope";
import {  zhNavbar } from "./navbar/index.js";
import {  zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "慕黎尘渊",
    url: "https://github.com/YANSHAO0032/mlcy-docs",
  },

  pageInfo :["Author","Word","Date","Original","Category","Tag","ReadingTime","PageView"],

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "https://github.com/YANSHAO0032/mlcy-docs",

  docsDir: "src",

  locales: {

    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "",

      displayFooter: true,

    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

});
