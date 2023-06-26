import {createSSRApp, h} from "vue"
import {renderToString} from "@vue/server-renderer"
import {createInertiaApp, Link} from "@inertiajs/vue3"
import createServer from "@inertiajs/vue3/server"

import resolve from "./resolve"

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve,
        setup({App, props, plugin}) {
            return createSSRApp({render: () => h(App, props)})
                .component("Link", Link)
                .use(plugin)
        },
    })
)
