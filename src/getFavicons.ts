import { scrapeWithFetch } from "./scrapers";
import { DefaultFaviconOptions, type Favicon, type FaviconOptions, type ProbedFavicon } from "./types";

import { extractDomain, probeIcon } from "./utils";

// Dont probe
export default async function getFavicons (domain: string): Promise<Favicon[]>;
export default async function getFavicons <T extends Partial<FaviconOptions> & {probe?: false | undefined}>(domain: string, options?: T): Promise<Favicon[]>;
// Probe
export default async function getFavicons <T extends Partial<FaviconOptions> & {probe: true}>(domain: string, options?: T): Promise<ProbedFavicon[]>;
// generic
export default async function getFavicons <T extends Partial<FaviconOptions>>(domain: string, options?: T): Promise<ProbedFavicon[] | Favicon[]> {
  const { agent, manifest, scraper, probe } = { ...DefaultFaviconOptions, ...options };
  const url = extractDomain(domain);
  
  let scrapeFn = scrapeWithFetch;
  if (scraper === 'fetch') {
    scrapeFn = scrapeWithFetch
  }

  const favicons: Favicon[] = await scrapeFn(url, agent);

  if (probe == false) {
    return favicons
  }

  const probedFavicons: ProbedFavicon[] = await Promise.all(favicons.map(favicon => probeIcon(favicon)));

  return probedFavicons;
}