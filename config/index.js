'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

// http://39.106.45.38:8888
// http://localhost:8888
const proxyPath = 'http://39.106.45.38:8888';

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/petadopt/member/article/articleList': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/article/animalCategoryList': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/article/articleDetail': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/regionList': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/user/login': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/user/register': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/user/getMemberInfo': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/ueditor/jsp/controller': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/adoptList': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/adoptDetail': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/addAdopt': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/deleteAdopt': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/addApply': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/applyList': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/changeApplyStatus': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/user/changeInfo': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/addComment': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/adopt/commentList': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/advert/adoptAdvert': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/advert/assistAdvert': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/advert/knowledgeAdvert': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/advert/encyclopediasAdvert': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/ueditor/jsp/upload': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/visit/addVisit': {
                changeOrigin: true,
                target: proxyPath
            },
            '/petadopt/member/visit/visitList': {
                changeOrigin: true,
                target: proxyPath
            }
        },

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
