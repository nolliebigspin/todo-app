const isProd = (process.env.NODE_ENV === 'production');
const prodSourceMaps = false;

module.exports = {
    filenameHashing: true,
    assetsDir: 'assets',
    productionSourceMap: prodSourceMaps,
    css: {
        sourceMap: !isProd || (prodSourceMaps && isProd),
        extract: isProd
    },
    chainWebpack: config => {
        // no more vendor chunk file, pack everything into one file
        config.optimization.delete('splitChunks');
        // disable production tip in production
        config.productionTip = !isProd;
        // disable vue logs in production
        config.silent = isProd;
    }
}
