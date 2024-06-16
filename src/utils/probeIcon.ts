import type { Favicon, ProbedFavicon } from "../types";

import probe from 'probe-image-size';

export const probeIcon = async (favicon: Favicon): Promise<ProbedFavicon> => {
  const result = await probe(favicon.src);

  return {
    src: favicon.src,
    size: {
      width: result.width,
      height: result.height
    },
    type: result.type,
    mime: result.mime,
    agent: favicon.agent
  }
}

export default probeIcon