var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるTypeScriptファイル（エントリーポイント）
  //　エントリーポイントは解析の起点になるスクリプト
  entry: [
    "./src/Variables.scss",
    "./src/Index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },

  module: {
    rules: [
      {
        test: /\.react\.js/,
        use:'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },{
        test: /\.css/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader",
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },{
        test: /(\.s[ac]ss)$/,
        //test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader",
          {
            loader: "sass-loader",
          }
        ],
      },{
        // 追記          
        test: /\.png$/,  
        loaders: 'url-loader',  
      },   

    ]

  },

  // import 文で .ts ファイルを解決するため
  // これを定義しないと import 文で拡張子を書く必要が生まれる。
  // フロントエンドの開発では拡張子を省略することが多いので、
  // 記載したほうがトラブルに巻き込まれにくい。
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  //plugins: [new HtmlWebpackPlugin({ template: "./public/Index.html" })]

};