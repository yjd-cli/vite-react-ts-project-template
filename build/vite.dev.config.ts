import { defineConfig } from 'vite';
import viteBaseConfig from './vite.base.config';

// @ts-ignore
export default defineConfig((configEnv) => {
  const baseConfig = viteBaseConfig(configEnv);

  return {
    ...baseConfig,

    server: {
      host: '127.0.0.1',
      port: 3000,
      open: true,
      // origin: 'http://127.0.0.1:3000/',
      watch: {
        // 监听 node_modules 目录下的包内容改变
        // ignored: ['!**/node_modules/your-package-name/**']
      },
      // 本地开发环境通过代理实现跨域
      // 生产环境使用 nginx 转发
      // https://github.com/http-party/node-http-proxy#options
      proxy: {
        '/xxx-api': {
          target: 'http://xxx-api.com',
          // true/false, Default: false - changes the origin of the host header to the target URL
          changeOrigin: true,
          // rewrite: (path) => {
          //   console.log(path);
          //   return path.replace(/^\/api/, '')
          // },
        },
      },
    },
    // 被监听的 node_modules 目录下的包必须被排除在优化之外，
    // 以便它能出现在依赖关系图中并触发热更新。
    // optimizeDeps: {
    //     exclude: ['your-package-name'],
    // },
  };
});
