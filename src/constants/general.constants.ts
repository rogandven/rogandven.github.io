export const DEFAULT_DATE: string = "1970-01-01";
export const TODAY: number = new Date().getDate();
// https://regex-snippets.com/unix-path
export const UNIX_PATH_REGEX: RegExp = /^(\/[^\/ ]*)+\/?$|^\.(\/[^\/ ]*)+\/?$|^\.\.\/([^\/ ]*\/)*[^\/ ]*$/;
export const ICON_PREFIX: string = "mdi:";