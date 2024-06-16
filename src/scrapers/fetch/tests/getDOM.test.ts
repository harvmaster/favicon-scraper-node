import { expect, test, describe } from 'bun:test'
import getDOM from '../getDOM'

const user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

describe('getDOM', () => {
  test('getDOM_google', async () => {
    const { dom, res } = await getDOM('www.google.com', user_agent);
    expect(dom).toBeDefined();
    expect(res).toBeDefined();
  })

  test('getDOM_facebook', async () => {
    const { dom, res } = await getDOM('www.facebook.com', user_agent);
    expect(dom).toBeDefined();
    expect(res).toBeDefined();
  })

  test('getDOM_twitter', async () => {
    const { dom, res } = await getDOM('www.twitter.com', user_agent);
    expect(dom).toBeDefined();
    expect(res).toBeDefined();
  })

  test('getDOM_instagram', async () => {
    const { dom, res } = await getDOM('www.instagram.com', user_agent);
    expect(dom).toBeDefined();
    expect(res).toBeDefined();
  })

  test('getDOM_linkedin', async () => {
    const { dom, res } = await getDOM('www.linkedin.com', user_agent);
    expect(dom).toBeDefined();
    expect(res).toBeDefined();
  })
})