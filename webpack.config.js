// module.exports = {
//     entry: ["./src/index.tsx"],
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: "ts-loader",
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\scss$/,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     "sass-loader"
//                 ],
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js"]
//     },
//     output: {
//         path: __dirname + "/dist",
//         publicPath: "/",
//         filename: "bundle.js"
//     },
//     devServer: {
//         contentBase: "./dist"
//     }
// }