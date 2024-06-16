# favicon-scraper-node

A fully-typed library for quickly getting a favicon from any domain. Supports getting the favicon's meta data like image dimensions and mime types
**Not browser compatible**

# links
- [Source](https://github.com/harvmaster/favicon-scraper-node)
- [NPM](https://www.npmjs.com/package/favicon-scraper-node)
- [Demo](https://www.faviconscraper.mc.hzuccon.com/#/)

# Installation
```
npm install --save favicon-scraper-node
```

# Usage
```ts
import getFavicons from 'favicon-scraper-node';

const run = async () => {
  const favicons = await getFavicons('facebook.com')
  console.log(favicons)
  /*
    [
      {
        src: "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      }
    ]
  */

  const probedFavicons = await getFavicons('facebook.com', {
    probe: true
  })
  console.log(probedFavicons)
  /*
    [
      {
        src: "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico",
        size: {
          width: 32,
          height: 32,
        },
        type: "ico",
        mime: "image/x-icon",
        agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      }
    ]
  */
}
```

# Options
```ts
const options: FaviconOptions = {
  agent: 'mobile_ios', // 'mobile_ios' | 'mobile_android' | 'desktop_chrome' | 'desktop_safari'
  manifest: false,  // Get the icons from the manifest.json
  scraper: 'fetch',
  probe: true
}
const favicons = await getFavicons('facebook.com', options)
```


