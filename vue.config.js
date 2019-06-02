module.exports = {
    chainWebpack: config => {
        // no more vendor chunk file, pack everything into one file
        config.optimization.delete('splitChunks')

        // disable production tip in production
        if (process.env.NODE_ENV === 'production') {
            config.productionTip = false;
        } else {
            config.productionTip = true;
        }
    }
}