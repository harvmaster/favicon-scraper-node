import { FAVICON_TAGS } from "../FaviconTags";

import { load } from 'cheerio'

export const extractFromDOM = (dom: string): string[] => {
  const $ = load(dom)

  let icons: string[] = []

  $(FAVICON_TAGS.join(', ')).map((i, element) => {
    const href = $(element).attr('href');
    if (href) return href

    const content = $(element).attr('content');
    if (content) return content

    return null
  }).get().forEach(icon => icons.push(icon));

  // Href ends with favicon.ico or favicon*.ico
  $('link[href$="favicon.ico"], link[href*="favicon"].ico').map((i, element) => {
    const href = $(element).attr('href');
    return href
  }).get().forEach(icon => icons.push(icon));

  return icons
}

export default extractFromDOM