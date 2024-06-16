import { type Favicon, type FaviconOptions, type ProbedFavicon } from "./types";
export default function getFavicons(domain: string): Promise<Favicon[]>;
export default function getFavicons<T extends Partial<FaviconOptions> & {
    probe?: false | undefined;
}>(domain: string, options?: T): Promise<Favicon[]>;
export default function getFavicons<T extends Partial<FaviconOptions> & {
    probe: true;
}>(domain: string, options?: T): Promise<ProbedFavicon[]>;
