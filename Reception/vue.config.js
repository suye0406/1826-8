module.exports = {
    lintOnSave: false,
    baseUrl: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.9.71.195:8082',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            },
            '/hwz': {
                target: 'http://39.96.76.3/HuiWanZhong',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/hwz': ''  // rewrite path
                }
            },
        },
        // proxy: {

        // },
    }
};
