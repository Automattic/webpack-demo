const path = require('path');

module.exports = {
    entry: {
        main: path.join( __dirname, 'src', 'index.js' )
    },
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: "[name].js",
        chunkFilename: "chunk-[name].js"
    },
    optimization: {
        minimize: false
    }
}