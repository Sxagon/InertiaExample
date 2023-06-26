// Type definitions for ziggy-scripts 1.3
// Project: https://github.com/tightenco/ziggy#readme
// Definitions by: Ben Allfree <https://github.com/benallfree>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

interface Routable {
    id: number | string
}

type RouteParam = Routable | string | number | boolean

type RouteParams = { [key: string]: RouteParam } | RouteParam[]

interface QueryParams {
    [key: string]: QueryParams | string | number | boolean
}

type RouteParamsWithQueryOverload =
    | RouteParams
    | {
    _query: QueryParams
}

interface Route {
    uri: string
    methods: Array<
        "GET" | "HEAD" | "POST" | "PATCH" | "PUT" | "OPTIONS" | "DELETE"
    >
    domain?: null | string | undefined
}

interface Router {
    /**
     * Get the name of the route matching the current window URL, or, given a route name
     * and parameters, check if the current window URL and parameters match that route.
     *
     * @example
     * // at URL https://ziggy.dev/posts/4 with 'posts.show' route 'posts/{post}'
     * route().current(); // 'posts.show'
     * route().current('posts.index'); // false
     * route().current('posts.show'); // true
     * route().current('posts.show', { post: 1 }); // false
     * route().current('posts.show', { post: 4 }); // true
     */
    current(): string | undefined

    current(name: string, params?: RouteParamsWithQueryOverload): boolean

    /**
     * Check whether the given route exists.
     */
    has(name: string): boolean

    /**
     * Get all parameter values from the current window URL.
     *
     * @example
     * // at URL https://tighten.ziggy.dev/posts/4?lang=en with 'posts.show' route 'posts/{post}' and domain '{team}.ziggy.dev'
     * route().params; // { team: 'tighten', post: 4, lang: 'en' }
     */
    get params(): RouteParams

    toString(): string
}

declare function route(): Router

declare function route(
    name: string,
    params?: RouteParamsWithQueryOverload | RouteParam,
    absolute?: boolean
): string
