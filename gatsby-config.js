const path = require(`path`)

let siteConfig
let ghostConfig
let mediaConfig
let routesConfig

try {
    siteConfig = require(`./siteConfig`)
} catch (e) {
    siteConfig = null
}

try {
    mediaConfig = require(`./mediaConfig`)
} catch (e) {
    mediaConfig = null
}

try {
    routesConfig = require(`./routesConfig`)
} catch (e) {
    routesConfig = null
}

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        development: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const {
        apiUrl,
        contentApiKey,
    } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        ghostConfig = null //allow default config to take over
    }
}

module.exports = {
    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`,
            },
        },
        {
            resolve: `gatsby-theme-try-ghost`,
            options: {
                ghostConfig: ghostConfig,
                siteConfig: siteConfig,
                mediaConfig: mediaConfig,
                routes: routesConfig,
            },
        },
        {
            resolve: `gatsby-theme-ghost-dark-mode`,
            options: {
                // Set to true if you want your theme to default to dark mode (default: false)
                // Note that this setting has an effect only, if
                //    1. The user has not changed the dark mode
                //    2. Dark mode is not reported from OS
                defaultModeDark: false,
                // If you want the defaultModeDark setting to take precedence
                // over the mode reported from OS, set this to true (default: false)
                overrideOS: false,
            },
        },
        {
            resolve: `gatsby-theme-ghost-members`,
        },
        {
            resolve: `gatsby-transformer-rehype`,
            options: {
                filter: node => (
                    node.internal.type === `GhostPost` ||
                    node.internal.type === `GhostPage`
                ),
                plugins: [
                    {
                        resolve: `gatsby-rehype-ghost-links`,
                    },
                    {
                        resolve: `gatsby-rehype-prismjs`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    `G-WJ8JSBX9ZD`, // Google Analytics / GA
                ],
                gtagConfig: {
                    anonymize_ip: true,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Setting this parameter is also optional
                    respectDNT: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-web-vitals`,
            options: {
                // The Google Analytics property ID; the reporting code won't be generated without it
                trackingId: `G-WJ8JSBX9ZD`,
                // An array with metrics you want to track and send to analytics
                metrics: [`FID`, `TTFB`, `LCP`, `CLS`, `FCP`],
                // Event Category (optional) { string }, default 'Web Vitals'
                eventCategory: `Performance`,
                // Include Web Vitals tracking in development
                // Defaults to false meaning Vitals will only be tracked in production.
                includeInDevelopment: false,
                // Prints metrics in the console when true
                debug: false,
            },
        },
        {
            resolve: `gatsby-plugin-yandex-metrika`,
            options: {
                // The ID of yandex metrika.
                trackingId: 71296738,
                // Enabled a webvisor. The default value is `false`.
                webvisor: true,
                // Enables tracking a hash in URL. The default value is `false`.
                trackHash: true,
                // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
                // and `true` means after the body (faster loading, less hits). The default value is `false`.
                afterBody: true,
                // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
                // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
                defer: false,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // This plugin is currently causing issues: https://github.com/gatsbyjs/gatsby/issues/25360
        //`gatsby-plugin-offline`,
    ],
}
