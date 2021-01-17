[![Netlify Status](https://api.netlify.com/api/v1/badges/c247c735-9273-4d26-8722-194f27a32f19/deploy-status)](https://app.netlify.com/sites/kroniak-blog/deploys)

Kroniak blog
&nbsp;

## 🎓 Tutorials

Check out the [Tutorials](https://www.jamify.org) for practical guides on using this project.

## ✨ Features

-   Ghost Casper look and feel
-   Images with [lazy-loading and blur-up effect](https://using-gatsby-image.gatsbyjs.org/) 🚀 🆕
-   Infinite Scroll ✨
-   Featured posts pinned on top 🆕
-   Sticky navigation headers
-   Hover on author avatar
-   Styled 404 page
-   SEO optimized
-   Fully responsive
-   Advanced routing 🆕
-   Composable and extensible
-   Incremental build enabled 🚀 🆕

&nbsp;

## 📦 Included Plugins

The following plugins have been included for convenience:

| Name                                                                                                                                  | Version                                                                                                                         | Description                                             |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`gatsby-theme-ghost-dark-mode`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-dark-mode) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-dark-mode)](https://www.npmjs.com/package/gatsby-theme-ghost-dark-mode) | Dark mode toggle 🌗                                     |
| [`gatsby-rehype-ghost-links`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-ghost-links)       | [![version](https://badgen.net/npm/v/gatsby-rehype-ghost-links)](https://www.npmjs.com/package/gatsby-rehype-ghost-links)       | Rewrite CMS links from absolute to relative             |
| [`gatsby-rehype-prismjs`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-prismjs)               | [![version](https://badgen.net/npm/v/gatsby-rehype-prismjs)](https://www.npmjs.com/package/gatsby-rehype-prismjs)               | Syntax highlighting with [PrismJS](http://prismjs.com/) |
| [`gatsby-theme-ghost-members`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-members) 🆕  | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-members)](https://www.npmjs.com/package/gatsby-theme-ghost-members)     | Member Subscriptions                                    |

If you don't need them, you can take them out in `gatsby-config.js` and `package.json` which may save you some time during the build process.

&nbsp;

## 🎁 More Plugins

Additional features can be integrated by installing Gatsby themes or plugins. The following plugins have been tested to work with [`gatsby-starter-try-ghost`](https://github.com/styxlab/gatsby-starter-try-ghost):

| Name                                                                                                                                   | Version                                                                                                                             | Description                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`gatsby-rehype-inline-images`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-inline-images) 🆕 | [![version](https://badgen.net/npm/v/gatsby-rehype-inline-images)](https://www.npmjs.com/package/gatsby-rehype-inline-images)       | Lazy-loading inline images with blur-up                                        |
| [`gatsby-theme-ghost-contact`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-contact)      | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-contact)](https://www.npmjs.com/package/gatsby-theme-ghost-contact)         | Contact page                                                                   |
| [`gatsby-theme-ghost-commento`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-commento)    | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-commento)](https://www.npmjs.com/package/gatsby-theme-ghost-commento)       | Commenting system with [Commento](https://commento.io/)                        |
| [`gatsby-theme-ghost-toc`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-toc) 🆕           | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-toc)](https://www.npmjs.com/package/gatsby-theme-ghost-toc)                 | Table of Contents                                                              |
| [`gatsby-plugin-ackee-tracker`](https://github.com/burnsy/gatsby-plugin-ackee-tracker)                                                 | [![version](https://badgen.net/npm/v/gatsby-plugin-ackee-tracker)](https://www.npmjs.com/package/gatsby-plugin-ackee-tracker)       | Site tracking with [Ackee](https://github.com/electerious/Ackee)               |
| [`gatsby-plugin-google-analytics`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics)             | [![version](https://badgen.net/npm/v/gatsby-plugin-google-analytics)](https://www.npmjs.com/package/gatsby-plugin-google-analytics) | Site tracking with [Google Analytics](https://developers.google.com/analytics) |

&nbsp;

## 🔑 Ghost Content API keys

All content is sourced from a Ghost CMS. By default, content is fetched from the demo location at `https://cms.gotsby.org`. Surely you want to source your own content. There are two ways to make your content keys available. Choose the method according to your build scenario.

### Building with cloud providers

If you build your project with a cloud provider (e.g. Gatsby, Netlify, Vercel), the best option is to provide the keys with environment variables:

| Key                   | Value (example)            |
| --------------------- | -------------------------- |
| GHOST_API_URL         | http:\/\/localhost:2368    |
| GHOST_CONTENT_API_KEY | 9fccdb0e4ea5b572e2e5b92942 |

The place where you can define them depends on the provider, but you usually find the option under the site settings. This avoids publishing keys in a public repository and is most secure.

### Building locally

If you build locally or on a private network where the build directory is not accessible to the world, you can safely add a new `.ghost.json` file in your base directory with the following JSON structure:

```bash

    {
        "development": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fccdb0e4ea5b572e2e5b92942"
        },
        "production": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fccdb0e4ea5b572e2e5b92942"
        }
    }
```

This file is part of `.gitignore` to avoid accidentally publishing it to your public repository. Change the `apiUrl` and `contentApiKey` to match your own Ghost CMS Content API keys.

&nbsp;

## 🤯 Ensure headless mode of Ghost CMS

For best SEO results it is strongly recommended to disable the default Ghost Handlebars theme front-end by selecting the _Make this site private_ flag within your Ghost admin settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the authoritative source for search engines.

&nbsp;

## 🔧 Update

It is recommended to install [npm-upgrade](https://www.npmjs.com/package/npm-upgrade) with `sudo npm install npm-upgrade -g`. Change into the base directory and update all packages with:

```bash
    npm-upgrade
```

You will be prompted to update all packages within your `package.json` file. Next, download the new packages:

```bash
    yarn
    yarn clean
```

The update process is now complete and you can start a new build with `yarn build` (or `yarn develop`).

&nbsp;

## 💣 Reporting issues

Please report all bugs and issues at [gatsby-theme-try-ghost/issues](https://github.com/styxlab/gatsby-theme-try-ghost/issues) as all development is happening there.

&nbsp;

## 🧐 Disclaimer

This project is not affiliated with [Gatsby](https://www.gatsbyjs.org/) or [Ghost](https://ghost.org/).

&nbsp;

# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).
