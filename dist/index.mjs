"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getFavicons: () => getFavicons
});
module.exports = __toCommonJS(src_exports);

// src/scrapers/fetch/getDOM.ts
var getHTML = async (url, agent) => {
  const res = await fetch(`https://${url}`, {
    headers: {
      "User-Agent": agent
    }
  });
  return { dom: await res.text(), res };
};
var getDOM_default = getHTML;

// src/scrapers/FaviconTags.ts
var FAVICON_TAGS = [
  'link[rel="icon"]',
  'link[rel*="shortcut"]',
  'link[rel*="apple-touch-icon"]',
  'link[rel*="msapplication-TileImage"]',
  'link[rel*="msapplication-square"]',
  'link[rel*="mask-icon"]',
  'link[rel*="fluid-icon"]',
  'meta[content*="favicon.ico"]',
  'meta[itemprop="image"]'
];

// src/scrapers/fetch/extractFromDOM.ts
var import_cheerio = require("cheerio");
var extractFromDOM = (dom) => {
  const $ = (0, import_cheerio.load)(dom);
  let icons = [];
  $(FAVICON_TAGS.join(", ")).map((i, element) => {
    const href = $(element).attr("href");
    if (href) return href;
    const content = $(element).attr("content");
    if (content) return content;
    return null;
  }).get().forEach((icon) => icons.push(icon));
  $('link[href$="favicon.ico"], link[href*="favicon"].ico').map((i, element) => {
    const href = $(element).attr("href");
    return href;
  }).get().forEach((icon) => icons.push(icon));
  return icons;
};
var extractFromDOM_default = extractFromDOM;

// src/scrapers/fetch/formatFavicons.ts
var formatFavicon = (favicon, url) => {
  if (favicon.startsWith("http")) {
    return favicon;
  }
  if (favicon.startsWith("//")) {
    return `https:${favicon}`;
  }
  if (favicon.startsWith("/")) {
    return `${url}${favicon}`;
  }
  return `${url}/${favicon}`;
};
var formatFavicons_default = formatFavicon;

// src/scrapers/fetch/scrape.ts
var scrapeWithFetch = async (url, agent) => {
  const { dom, res } = await getDOM_default(url, agent);
  const icons = extractFromDOM_default(dom);
  const location = res.url.endsWith("/") ? res.url.slice(0, -1) : res.url;
  const result = icons.map((icon) => {
    return {
      src: formatFavicons_default(icon, location),
      agent
    };
  });
  return result;
};
var scrape_default = scrapeWithFetch;

// src/types.ts
var DefaultFaviconOptions = {
  agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
  manifest: false,
  scraper: "fetch",
  probe: false
};

// src/utils/extractDomain.ts
var extractDomain = (url) => {
  const domainRegex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:\.)?([^:\/\n]+)/im;
  const match = url.match(domainRegex);
  if (!match) {
    throw new Error("Invalid URL");
  }
  return match[1];
};
var extractDomain_default = extractDomain;

// src/utils/probeIcon.ts
var import_probe_image_size = __toESM(require("probe-image-size"), 1);
var probeIcon = async (favicon) => {
  const result = await (0, import_probe_image_size.default)(favicon.src);
  return {
    src: favicon.src,
    size: {
      width: result.width,
      height: result.height
    },
    type: result.type,
    mime: result.mime,
    agent: favicon.agent
  };
};
var probeIcon_default = probeIcon;

// src/getFavicons.ts
async function getFavicons(domain, options) {
  const { agent, manifest, scraper, probe: probe2 } = { ...DefaultFaviconOptions, ...options };
  const url = extractDomain_default(domain);
  let scrapeFn = scrape_default;
  if (scraper === "fetch") {
    scrapeFn = scrape_default;
  }
  const favicons = await scrapeFn(url, agent);
  if (probe2 == false) {
    return favicons;
  }
  const probedFavicons = await Promise.all(favicons.map((favicon) => probeIcon_default(favicon)));
  return probedFavicons;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFavicons
});
//# sourceMappingURL=index.mjs.map
