const path = require("path");

module.exports = {
    experiments: {
        syncWebAssembly: true,
        asyncWebAssembly: true,
    },
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    mode: "development"
};