import { agents } from './agents';

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
  agent: Agent
  manifest: boolean
  scraper: FaviconScraper
  probe: true | false
}

export const DefaultFaviconOptions: FaviconOptions = {
  agent: 'mobile_ios',
  manifest: false,
  scraper: 'fetch',
  probe: false
} as const

export const SCRAPERS = {
  FETCH: 'fetch',
} as const
export type FaviconScraper = typeof SCRAPERS[keyof typeof SCRAPERS];

export type Agent = keyof typeof agents;
export type UserAgent = typeof agents;