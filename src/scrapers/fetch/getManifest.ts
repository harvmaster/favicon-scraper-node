import { load } from 'cheerio';
import formatURL from '../../utils/formatURL';

import type { Manifest } from '../../types';

export const getManifest = async (dom: string, location: string): Promise<Manifest | undefined> => {
  const $ = load(dom)

  const manifestArr = $('link[rel="manifest"]').map((i, element) => {
    const href = $(element).attr('href')
    if (!href) return ''
    return formatURL(href, location)
  }).get()
  if (manifestArr.length === 0) return

  const manifestURL = manifestArr[0]
  const manifest = await fetch(manifestURL).then(res => res.json()) as Manifest

  return manifest
}

export default getManifest