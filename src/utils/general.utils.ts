import { DEFAULT_DATE, MESES_ESPANIOL, TODAY } from "../constants/general.constants";
import EventClass from "../classes/EventClass";

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

export const cutOffText = (original: string, amount: number): string => {
  original = original.trim();
  if (original.length <= amount) {
    return original;
  }
  return original.substring(0, amount).trim() + "...";
}

export const getPrintableDate = (date: Date): string => {
  return date.toISOString().split("T")[0].split("-").toReversed().join("-");
}

export const getMonthPlusYear = (date: Date): string => {
  return MESES_ESPANIOL[date.getMonth()] + " " + date.getFullYear();
}

export const getPrintableTimePeriod = (event: EventClass, shallDisplayPresent: boolean): string => {
  let date: string = getMonthPlusYear(event.startDate);
  if (event.endDate) {
    return date + " - " + getMonthPlusYear(event.endDate);
  }
  if (shallDisplayPresent) {
    return date + " - Presente";
  }
  return date;
}

export const hasURL = (event: EventClass): boolean => {
  return Boolean(event.certificateURL || event.reportURL || event.repositoryURL || event.websiteURL);
}