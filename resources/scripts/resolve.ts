const allPages = import.meta.glob("../views/pages/**/*.vue")

export default function (name: string, pages: Record<string, any> = allPages) {
    for (const path in pages) {
        if (path.endsWith(`${name.replaceAll(".", "/")}.vue`)) {
            return typeof pages[path] === "function"
                ? pages[path]()
                : pages[path]
        }
    }

    throw new Error(`Page not found: ${name}`)
}
