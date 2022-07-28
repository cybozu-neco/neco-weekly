module.exports = {
  "root": "./",
  "title": "neco-weekly",
  "plugins": [
    "back-to-top-button",
    "intopic-toc",
    "toolbar",
    "rss"
  ],
  "pluginsConfig": {
"intopic-toc": {
      "selector": ".markdown-section h1, .markdown-section h2, .markdown-section h3",
      "mode": "nested",
      "maxDepth": 2,
      "isCollapsed": false,
      "isScrollspyActive": true,
      "visible": true
    },
    "toolbar": {
      "buttons":
      [
        {
          "label": "GitHub",
          "icon": "fa fa-github fa-2x",
          "url": "https://github.com/cybozu-neco/neco-weekly",
        }
      ]
    },
    "rss": {
      "title": "Neco Weekly",
      "author": "cybozu-neco",
      "site_url": "https://cybozu-neco.github.io/neco-weekly/",
      "feed_url": "https://cybozu-neco.github.io/neco-weekly/rss.xml"
    }
  }
};
