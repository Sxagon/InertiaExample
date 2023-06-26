import './bootstrap';
import '../assets/scss/app.scss'
import '../assets/css/app.css'

import {createSSRApp, h} from "vue"
import {createInertiaApp, Link} from "@inertiajs/vue3"

import resolve from "./resolve"

createInertiaApp({
    resolve,
    setup({el, App, props, plugin}) {
        createSSRApp({render: () => h(App, props)})
            .component("Link", Link)
            .use(plugin)
            .mount(el)
    },
})
