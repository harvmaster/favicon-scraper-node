import { expect, test, describe } from 'bun:test'
import formatFavicons from '../formatFavicons'

const known_icons = {
  ai_chat: {
    host: 'https://ai.chat.mc.hzuccon.com',
    icons: [
      "icons/favicon-128x128.png",
      "icons/favicon-96x96.png",
      "icons/favicon-32x32.png",
      "icons/favicon-16x16.png",
      "favicon.ico",
      "/icons/safari-pinned-tab.svg",
      "/icons/apple-icon-120x120.png",
      "/icons/apple-icon-152x152.png",
      "/icons/apple-icon-167x167.png",
      "/icons/apple-icon-180x180.png",
      "favicon.ico"
    ],
    result: [
      "https://ai.chat.mc.hzuccon.com/icons/favicon-128x128.png",
      "https://ai.chat.mc.hzuccon.com/icons/favicon-96x96.png",
      "https://ai.chat.mc.hzuccon.com/icons/favicon-32x32.png",
      "https://ai.chat.mc.hzuccon.com/icons/favicon-16x16.png",
      "https://ai.chat.mc.hzuccon.com/favicon.ico",
      "https://ai.chat.mc.hzuccon.com/icons/safari-pinned-tab.svg",
      "https://ai.chat.mc.hzuccon.com/icons/apple-icon-120x120.png",
      "https://ai.chat.mc.hzuccon.com/icons/apple-icon-152x152.png",
      "https://ai.chat.mc.hzuccon.com/icons/apple-icon-167x167.png",
      "https://ai.chat.mc.hzuccon.com/icons/apple-icon-180x180.png",
      "https://ai.chat.mc.hzuccon.com/favicon.ico"
    ]
  },
  google: {
    host: 'https://www.google.com',
    icons: [
      "favicon.ico",
      "images/branding/product_ios/3x/gsa_ios_60dp.png",
      "/images/branding/product_ios/2x/gsa_ios_60dp.png",
      "images/branding/product_ios/2x/gsa_ios_57dp.png",
      "https://www.google.com/images/branding/product_ios/1x/gsa_ios_57dp.png"
    ],
    result: [ 
      "https://www.google.com/favicon.ico",
      "https://www.google.com/images/branding/product_ios/3x/gsa_ios_60dp.png",
      "https://www.google.com/images/branding/product_ios/2x/gsa_ios_60dp.png",
      "https://www.google.com/images/branding/product_ios/2x/gsa_ios_57dp.png",
      "https://www.google.com/images/branding/product_ios/1x/gsa_ios_57dp.png"
    ]
  }
}

describe('formatFavicons', () => {
  test('formatFavicons_google', () => {
    const favicons = formatFavicons('www.google.com', 'user_agent');
    expect(favicons).toBeDefined();
  })

  test('formatFavicons_facebook', () => {
    const favicons = formatFavicons('www.facebook.com', 'user_agent');
    expect(favicons).toBeDefined();
  })

  test('formatFavicons_local_aichat', () => {
    const formatted = known_icons.ai_chat.icons.map(icon => formatFavicons(icon, known_icons.ai_chat.host));
    expect(formatted).toEqual(known_icons.ai_chat.result);
  })

  test('formatFavicons_local_google', () => {
    const formatted = known_icons.google.icons.map(icon => formatFavicons(icon, known_icons.google.host));
    expect(formatted).toEqual(known_icons.google.result);
  })
})