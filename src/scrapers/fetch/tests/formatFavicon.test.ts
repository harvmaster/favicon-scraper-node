import { expect, test, describe } from 'bun:test'

import formatFavicons from '../formatFavicons'

const user_agent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'

describe ('formatFavicon', () => {
  test('formatFavicon_google', () => {
    const favicons = formatFavicons(['www.google.com'], 'google.com', user_agent);
    expect(favicons).toBeDefined();
  })

  test('formatFavicon_facebook', () => {
    const favicons = formatFavicons(['www.facebook.com'], '', user_agent);
    expect(favicons).toBeDefined();
  })

  test('formatFavicon_twitter', () => {
    const favicons = formatFavicons(['www.twitter.com', 'https://second_url.com'], 'twitter.com', user_agent);
    expect(favicons).toBeDefined();
  })

  test('formatFavicon_instagram', () => {
    const favicons = formatFavicons(['www.instagram.com'], 'not_Valid', user_agent);
    expect(favicons).toBeDefined();
  })
})