import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        {
            text: "Markdown",
            icon: "laptop-code",
            prefix: "introduce/",
            link: "introduce/",
            children: "structure",
        },
        {
            text: "文档",
            icon: "book",
            prefix: "guide/",
            children: "structure",
        },
    ],
});