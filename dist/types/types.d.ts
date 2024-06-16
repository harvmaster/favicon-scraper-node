export type Favicon = {
    src: string;
    agent: string;
};
export type ProbedFavicon = Favicon & {
    size?: {
        width: number;
        height: number;
    };
    type: string;
    mime: string;
};
export type FaviconOptions = {
    agent: string;
    manifest: boolean;
    scraper: FaviconScraper;
    probe: boolean;
};
export declare const DefaultFaviconOptions: FaviconOptions;
export declare const SCRAPERS: {
    readonly FETCH: "fetch";
};
export type FaviconScraper = typeof SCRAPERS[keyof typeof SCRAPERS];
