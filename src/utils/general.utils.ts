import { DEFAULT_DATE, TODAY } from "../constants/general.constants";

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

export const getAge = (date: Date): number => {
  const TODAY_2 = new Date(TODAY);
  
  var years = TODAY_2.getFullYear() - date.getFullYear();
  if (!(date.getMonth() <= TODAY_2.getMonth())) {
    years -= 1;
  }
  return years;
}