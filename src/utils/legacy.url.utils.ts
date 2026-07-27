

export const getAbsoluteURL = (astro: any, path: string): string => {
    if (path.startsWith("http") || path.startsWith("https")) {
        return path;
    }
    return getHomeURL(astro) + path;
}