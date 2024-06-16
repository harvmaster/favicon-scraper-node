import type { Favicon } from "../../types";

import getDOM from './getDOM';
import extractFromDOM from "./extractFromDOM";
import formatFavicon from "./formatFavicons";

export const scrapeWithFetch = async (url: string, agent: string): Promise<Favicon[]> => {
  const { dom, res } = await getDOM(url, agent);
  const icons = extractFromDOM(dom);

  const location = res.url.endsWith('/') ? res.url.slice(0, -1) : res.url;

  const result = icons.map(icon => {
    return {
      src: formatFavicon(icon, location),
      agent: agent
    }
  })

  return result;
}

export default scrapeWithFetch