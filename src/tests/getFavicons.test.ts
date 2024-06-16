import { expect, test, describe } from 'bun:test'
import getFavicons from '../getFavicons'

describe('getFavicons_no_probe', () => {
  test('getFavicons_google', async () => {
    const favicons = await getFavicons('www.google.com');
    expect(favicons).toBeDefined();
  })

  test('getFavicons_facebook', async () => {
    const favicons = await getFavicons('facebook.com');
    expect(favicons).toBeDefined();
  })

  test('getFavicons_twitter', async () => {
    const favicons = await getFavicons('twitter.com');
    expect(favicons).toBeDefined();
  })

  test('getFavicons_instagram', async () => {
    const favicons = await getFavicons('www.instagram.com');
    expect(favicons).toBeDefined();
  })

  test('getFavicons_linkedin', async () => {
    const favicons = await getFavicons('www.linkedin.com');
    expect(favicons).toBeDefined();
  })
})

describe('getFavicons_probe', () => {
  test('getFavicons_google', async () => {
    const favicons = await getFavicons('www.google.com', { probe: true });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })

  test('getFavicons_facebook', async () => {
    const favicons = await getFavicons('www.facebook.com', { probe: true });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })

  test('getFavicons_twitter', async () => {
    const favicons = await getFavicons('twitter.com', { probe: true });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })

  test('getFavicons_instagram', async () => {
    const favicons = await getFavicons('www.instagram.com', { probe: true });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })

  test('getFavicons_linkedin', async () => {
    const favicons = await getFavicons('www.linkedin.com', { probe: true });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })
})

describe('getFavicons_probe_no_user_agent', () => {
  test('getFavicons_google', async () => {
    const favicons = await getFavicons('www.google.com', { probe: true, user_agent: '' });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })

  test('getFavicons_facebook', async () => {
    const favicons = await getFavicons('www.facebook.com', { probe: true, user_agent: '' });
    favicons.every(favicon => expect(favicon).toContainAllKeys(['src', 'agent', 'size', 'mime', 'type']));
  })
})

describe('getFavicons_https', () => {
  test('getFavicons_google', async () => {
    const favicons = await getFavicons('https://www.google.com');
    expect(favicons).toBeDefined();
  })

  test('getFavicons_facebook', async () => {
    const favicons = await getFavicons('https://www.facebook.com');
    expect(favicons).toBeDefined();
  })
})