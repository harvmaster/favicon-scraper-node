import { expect, test, describe } from 'bun:test'
import scrapeWithFetch from '../scrape'

const user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

describe('scrapeWithFetch', () => {
  test('scrapeWithFetch_google', async () => {
    const favicons = await scrapeWithFetch('www.google.com', user_agent);
    expect(favicons).toEqual([
      {
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        src: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
      }
    ]);
  })

  test('scrapeWithFetch_facebook', async () => {
    const favicons = await scrapeWithFetch('facebook.com', user_agent);
    expect(favicons).toEqual([
      {
        src: "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      }
    ]);
  })

  test('scrapeWithFetch_twitter', async () => {
    const favicons = await scrapeWithFetch('twitter.com', user_agent);
    expect(favicons).toEqual([
      {
        src: "https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://abs.twimg.com/responsive-web/client-web/icon-svg.ea5ff4aa.svg",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://abs.twimg.com/favicons/twitter-pip.3.ico",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      }
    ]);
  })

  test('scrapeWithFetch_instagram', async () => {
    const favicons = await scrapeWithFetch('instagram.com', user_agent);
    expect(favicons).toEqual([
      {
        src: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://static.cdninstagram.com/rsrc.php/v3/ys/r/aM-g435MtEX.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://static.cdninstagram.com/rsrc.php/v3/yx/r/H1l_HHqi4p6.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://static.cdninstagram.com/rsrc.php/v3/yB/r/-7Z_RkdLJUX.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://static.cdninstagram.com/rsrc.php/v3/yG/r/De-Dwpd5CHc.png",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        src: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      }
    ]);
  })

  test('scrapeWithFetch_linkedin', async () => {
    const favicons = await scrapeWithFetch('linkedin.com', user_agent);
    expect(favicons).toEqual([
      {
        src: "https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
      {
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        src: "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico",
      }
    ]);
  })
})