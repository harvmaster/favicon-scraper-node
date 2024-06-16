export const formatURL = (childURL: string, baseURL: string): string => {
  if (childURL.startsWith('http')) {
    return childURL;
  }
  if (childURL.startsWith('//')) {
    return `https:${childURL}`;
  }
  if (childURL.startsWith('/')) {
    return `${baseURL}${childURL}`;
  }
  return `${baseURL}/${childURL}`;
}

export default formatURL;