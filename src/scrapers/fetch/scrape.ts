import type { Favicon, UserAgent } from "../../types";

import getDOM from './getDOM';
import extractFromDOM from "./extractFromDOM";
import getManifest from "./getManifest";
import extractFromManifest from "./extractFromManifest";
import formatFavicons from "./formatFavicons";

export const scrapeWithFetch = async (url: string, agent: UserAgent[keyof UserAgent], use_manifest = false): Promise<Favicon[]> => {
  const { dom, res } = await getDOM(url, agent);
  const icons = extractFromDOM(dom);

  const location = res.url.endsWith('/') ? res.url.slice(0, -1) : res.url;

  if (use_manifest) {
    const manifest = await getManifest(dom, location)
    if (manifest) {
      const manifestIcons = extractFromManifest(manifest)
      icons.push(...manifestIcons)
    }
  }

  return formatFavicons(icons, location, agent)
}

export default scrapeWithFetch