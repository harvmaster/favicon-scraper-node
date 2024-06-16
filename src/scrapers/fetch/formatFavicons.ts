export const formatFavicon = (favicon: string, url: string): string => {
  if (favicon.startsWith('http')) {
    return favicon;
  }
  if (favicon.startsWith('//')) {
    return `https:${favicon}`;
  }
  if (favicon.startsWith('/')) {
    return `${url}${favicon}`;
  }
  return `${url}/${favicon}`;
}

export default formatFavicon;