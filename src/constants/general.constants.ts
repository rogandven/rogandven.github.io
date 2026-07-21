export const DEFAULT_DATE: string = "1970-01-01";
export const TODAY: number = Date.now();
// https://regex-snippets.com/unix-path
export const UNIX_PATH_REGEX: RegExp = /^(\/[^\/ ]*)+\/?$|^\.(\/[^\/ ]*)+\/?$|^\.\.\/([^\/ ]*\/)*[^\/ ]*$/;
export const ICON_PREFIX: string = "mdi:";