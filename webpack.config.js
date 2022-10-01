module.exports = {
  entry: {
    bundle: "/src/index.ts",
  },
  output: {
    //__dirnameはルートディレクトリのこと
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "production",
  resolve: {
    //自動的にtsかjsか認識してくれるもの。拡張子の記述がいらなくなる。
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    rules: [
      {
        //拡張子がtsのファイルをts-loaderを使ってコンパイルするという意味
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};