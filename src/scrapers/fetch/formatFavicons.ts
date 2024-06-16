import type { Favicon, UserAgent } from '../../types';
import { formatURL } from '../../utils'

export const formatFavicons = (icons: string[], location: string, agent: UserAgent[keyof UserAgent]): Favicon[] => {
  const result = icons.map(icon => {
    return {
      src: formatURL(icon, location),
      agent: agent
    }
  })

  return result;
}

export default formatFavicons