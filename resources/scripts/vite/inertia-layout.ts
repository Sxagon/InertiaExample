import type {Plugin} from "vite"

export default (layouts: string = "@/views/layouts/"): Plugin => ({
    name: "futility:layout",
    transform: (code: string, id: string) =>
        /vue&type=layout/.test(id)
            ? `import l from"${layouts}${code}.vue";export default c=>c.layout=l`
            : undefined,
})
