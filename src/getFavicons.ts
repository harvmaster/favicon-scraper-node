import { scrapeWithFetch } from "./scrapers";
import { DefaultFaviconOptions, type Favicon, type FaviconOptions, type ProbedFavicon } from "./types";

import { extractDomain, probeIcon, getAgent } from "./utils";

// Dont probe
export default async function getFavicons (domain: string): Promise<Favicon[]>;
export default async function getFavicons <T extends Partial<FaviconOptions> & {probe?: false | undefined}>(domain: string, options?: T): Promise<Favicon[]>;
// Probe
export default async function getFavicons <T extends Partial<FaviconOptions> & {probe: true}>(domain: string, options?: T): Promise<ProbedFavicon[]>;
// generic
export default async function getFavicons <T extends Partial<FaviconOptions>>(domain: string, options?: T): Promise<ProbedFavicon[] | Favicon[]> {
  const { agent, manifest, scraper, probe } = { ...DefaultFaviconOptions, ...options };
  const url = extractDomain(domain);
  const userAgent = getAgent(agent);
  
  let scrapeFn = scrapeWithFetch;
  if (scraper === 'fetch') {
    scrapeFn = scrapeWithFetch
  }

  const favicons: Favicon[] = await scrapeFn(url, userAgent);

  if (probe == false) {
    return favicons
  }

  const probedFavicons: ProbedFavicon[] = await Promise.all(favicons.map(favicon => probeIcon(favicon)));

  return probedFavicons;
}

async function getFavicons_singleline <T extends Partial<FaviconOptions>>(domain: string, options?: T): Promise<T["probe"] extends true ? ProbedFavicon[] : Favicon[]> {
  const { agent, manifest, scraper, probe } = { ...DefaultFaviconOptions, ...options };
  const url = extractDomain(domain);
  const userAgent = getAgent(agent);
  
  let scrapeFn = scrapeWithFetch;
  if (scraper === 'fetch') {
    scrapeFn = scrapeWithFetch
  }

  const favicons: Favicon[] = await scrapeFn(url, userAgent);

  if (probe != true) {
    return favicons as T["probe"] extends true ? ProbedFavicon[] : Favicon[];
  }

  const probedFavicons: ProbedFavicon[] = await Promise.all(favicons.map(favicon => probeIcon(favicon)));

  return probedFavicons;
}
