const { config } = require("process");
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "/", // 公共路径
  // outpuoDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap文件
  runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template

  chainWebpack: config => {
    config.optimization.runtimeChunk("single");
    config.optimization.minimizer("terser").tap(args => {
      args[0].terserOptions.compress.drop_console = true; // 去除生产环境的console
      return args;
    });
  },
  // 覆盖webpack默认配置的都在这里
  configureWebpack: {
    resolve: {
      // 配置解析别名
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@views": path.resolve(__dirname, "src/views"),
        // "@service": path.resolve(__dirname, "src/service"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@utils": path.resolve(__dirname, "src/utils")
      }
    }
  },

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 去掉文件名中的 .module
    requireModuleExtension: false
  },
  // webpack-dev-server 相关配置-开发模式
  devServer: {
    host: "0.0.0.0", // 配置host
    port: 8080, // 端口
    https: false,
    open: true, // 自动打开浏览器
    hot: true, // 热加载
    overlay: {
      // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warning: false, // 警告
      error: true // 错误-编译出错是显示在网页上
    },
    // 设置反向代理-代理服务器
    // proxy: {
    //   // 开发
    //   "/serve": {
    //     target: "http://****.****.****.****:8001", //目标接口域名
    //     secure: false, //false为http访问，true为https访问
    //     changeOrigin: true, //是否允许跨域
    //     pathRewrite: {
    //       "^/serve": "" //重写接口
    //     }
    //   },
    //   // 生产
    //   "^/v1": {
    //     //匹配包含 /v1的接口  如：v1/xxx/xx
    //     target: process.env.VUE_APP_V,
    //     ws: true, // 开启webSocket
    //     changeOrigin: true
    //   }
    // }
    // before: app => {} //提供在服务器内部的其他中间件之前执行自定义中间件的能力
  },

  parallel: require("os").cpus().length > 1,

  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
