import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [['link', { rel: 'icon', href: '/logo.svg' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.svg' }],
    ],
    title: "Geode-solutions",
    description: "Documentation",
    themeConfig: {
        footer: {
            message: "Geode-solutions' documentation website",
            copyright: 'Copyright © 2019 - 2026 — Geode-solutions SAS. All rights reserved.',
        },
        logo: '/logo.svg',
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/index' },
            { text: 'Guides', link: '/guides' },
        ],

        sidebar: {
            '/guides': [
                {
                    text: 'User',
                    items: [
                        { text: 'Models', link: '/guides/models' },
                        { text: 'Meshes', link: '/guides/meshes' },
                        { text: 'Attributes', link: '/guides/attributes' },
                        { text: 'Builders', link: '/guides/builders' },
                        { text: 'Supported file formats', link: '/guides/formats' }
                    ]
                },
                {
                    text: 'Developer',
                    items: [
                        { text: 'Compile OpenGeode', link: '/guides/compile-opengeode' },
                        { text: 'Create OpenGeode module', link: '/guides/create-opengeode-module' },
                        { text: 'Compile OpenGeode module', link: '/guides/compile-opengeode-module' },
                        { text: 'Use OpenGeode binding', link: '/guides/use-opengeode-binding' },
                        { text: 'Get OpenGeode code', link: '/guides/get-opengeode-code' },
                        { text: 'How to link with OpenGeode-IO', link: '/guides/how-to-link-with-opengeode-io' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Geode-solutions' },
            { icon: 'twitter', link: 'https://twitter.com/GeodeSolutions' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/company/geode-solutions/' },
            { icon: 'slack', link: 'https://opengeode-slack-invite.herokuapp.com/' },
            { icon: 'youtube', link: 'https://www.youtube.com/channel/UCkzmIOpr3H8I8kDLCGZBiXA' },
            {
                icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>' },
                link: 'mailto:contact@geode-solutions.com'
            },
        ]
    }
})

