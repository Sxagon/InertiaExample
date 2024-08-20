const allPages = (import.meta as any).globEager("../views/**/*.vue")

export default function (name: string, pages: Record<string, any> = allPages) {
    const pathToFind = `${name.replaceAll(".", "/")}.vue`;

    for (const path in pages) {
        if (path.endsWith(pathToFind)) {
            return typeof pages[path] === "function"
                ? pages[path]()
                : pages[path];
        }
    }

    throw new Error(`Page not found: ${name}`);
}
