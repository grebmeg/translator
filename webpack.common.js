const path = require("path");

module.exports = {
    entry: {
        popup: path.join(__dirname, "src/entries/popup.tsx")
    },
    output: {
        path: path.join(__dirname, "build/js"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            use: "ts-loader"
        },{
            exclude: /node_modules/,
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader"
            }]
        },{
            exclude: /node_modules/,
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader"
            },{
                loader: "sass-loader"
            }]
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};
