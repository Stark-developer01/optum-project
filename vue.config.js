module.exports = {
    pwa: {
        workboxOptions: {
            exclude: [/\.map$/, /web\.config$/],
        },
    },

    publicPath: process.env.NODE_ENV === 'production'
    ? '/optum-project/'
    : '/'
};