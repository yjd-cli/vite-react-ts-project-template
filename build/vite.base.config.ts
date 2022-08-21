import * as path from 'path';
import { ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default function getBaseConfig(configEnv: ConfigEnv) {
  const isDevelopment = configEnv.mode === 'development';

  return {

    // index.html 文件所在的位置，默认项目根目录
    // root: process.cwd(),
    // 开发或生产环境服务的公共基础路径
    // base: '/',
    // 静态资源服务的文件夹
    // publicDir: 'public',
    // 'development'（开发模式），'production'（生产模式）
    // mode: 'development',

    css: {
      modules: {
        // 参考：https://github.com/webpack-contrib/css-loader#exportlocalsconvention
        localsConvention: 'camelCase',

        generateScopedName: isDevelopment
          ? '[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
      preprocessorOptions: {},
      // devSourcemap: true,
    },

    // 指定 .env 文件目录
    envDir: path.resolve('env'),
    // 注意：以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。所以敏感信息不要以 envPrefix 为前缀。
    envPrefix: 'PUBLIC_',

    resolve: {
      alias: {
        // base 配置文件里不要用 __dirname，否则 dev、prod 文件里使用时，路径会出问题
        // '@src': path.resolve(__dirname, 'src'),
        '@src': path.resolve('src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },

    clearScreen: false,

    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react({
        babel: {
          // Use babel.config.js files
          configFile: true,
        },
      }),
      // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      // {
      //     ...plugin(),
      //     pre：在 Vite 核心插件之前调用该插件
      //     默认：在 Vite 核心插件之后调用该插件
      //     post：在 Vite 构建插件之后调用该插件
      //     enforce: 'pre',
      //     当前插件作用环境：'build' 或 'serve'，默认开发和生产环境都会执行
      //     apply: 'build'
      // }
    ],
  };
};
