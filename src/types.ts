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
}

export type FaviconOptions = {
  agent: string
  manifest: boolean
  scraper: FaviconScraper
  probe: boolean
}

export const DefaultFaviconOptions: FaviconOptions = {
  agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  manifest: false,
  scraper: 'fetch',
  probe: false
} as const

export const SCRAPERS = {
  FETCH: 'fetch',
} as const
export type FaviconScraper = typeof SCRAPERS[keyof typeof SCRAPERS];

// export type getFavicons = <T extends FaviconOptions = typeof DefaultFaviconOptions>(domain: string, options?: T) => Promise<T["probe"] extends true ? ProbedFavicon : Favicon>;
