import { Github } from "simple-icons-astro";
import { slugify } from "../utils/general.utils.ts";

export const DEFAULT_DISPLAY_NAME: string = "GitHub";
export const DEFAULT_SLUGGIFIED_NAME: string = slugify(DEFAULT_DISPLAY_NAME);
export const DEFAULT_ICON: (_props: Record<string, any>) => any = Github;
