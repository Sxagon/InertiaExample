import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
const allPages = /* @__PURE__ */ Object.assign({ "../views/pages/Home.vue": () => import("./assets/Home-925e715a.js") });
function resolve(name, pages = allPages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replaceAll(".", "/")}.vue`)) {
      return typeof pages[path] === "function" ? pages[path]() : pages[path];
    }
  }
  throw new Error(`Page not found: ${name}`);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve,
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).component("Link", Link).use(plugin);
    }
  })
);
