import { DEFAULT_DATE } from "../constants/general.constants";

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export const getUNIXDate = (date: string): number => {
  const newDate = new Date(date || DEFAULT_DATE);
  return newDate.getTime();
} 