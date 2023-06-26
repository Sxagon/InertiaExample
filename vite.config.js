import {defineConfig} from "vite"
import laravel from "vite-plugin-laravel"
import vue from "@vitejs/plugin-vue"
import inertia from "./resources/scripts/vite/inertia-layout"

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    // Default config
                    video: ["src", "poster"],
                    source: ["src"],
                    img: ["src"],
                    image: ["xlink:href", "href"],
                    use: ["xlink:href", "href"],

                    // Our own elements
                    ImageCard: ["image"],
                    StoreItem: ["image"],
                },
            },
        }),
        inertia(),
        laravel(),
    ],
    resolve: {
        alias: {
            ziggy: "vendor/tightenco/ziggy/dist",
        },
    },
})
