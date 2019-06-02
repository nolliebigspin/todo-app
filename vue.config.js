module.exports = {
    chainWebpack: config => {
        // no more vendor chunk file, pack everything into one file
        config.optimization.delete('splitChunks')
    }
}