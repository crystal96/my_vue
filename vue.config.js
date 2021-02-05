const { config } = require("process");
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  runtimeCompiler: true,

  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@views", resolve("src/views"))
      .set("@components", resolve("src/components"))
      .set("@utils", resolve("src/utils"))
      .set("@assets", resolve("src/assets"));
    // .set("@service", resolve("src/service"));
    config.optimization.runtimeChunk("single");
    config.optimization.minimizer("terser").tap(args => {
      args[0].terserOptions.compress.drop_console = true; // 去除生产环境的console
      return args;
    });
  },

  // webpack-dev-server 相关配置-开发模式
  devServer: {
    host: "0.0.0.0", // 配置host
    port: 8080, // 端口
    https: false,
    open: true, // 自动打开浏览器
    hot: true, // 是否打开热重载模式
    overlay: { // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warning: false, // 警告
      error: true // 错误-编译出错是显示在网页上
    },
    // 设置反向代理-代理服务器
    // proxy: {
    //   "/serve": {
    //     target: "http://****.****.****.****:8001", //目标接口域名
    //     secure: false, //false为http访问，true为https访问
    //     changeOrigin: true, //是否允许跨域
    //     pathRewrite: {
    //       "^/serve": "" //重写接口
    //     }
    //   }
    // }, 
    // before: app => {}
  },

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 去掉文件名中的 .module
    requireModuleExtension: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,

  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
