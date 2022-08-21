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
            proxy: {},
        },
        // 被监听的 node_modules 目录下的包必须被排除在优化之外，
        // 以便它能出现在依赖关系图中并触发热更新。
        // optimizeDeps: {
        //     exclude: ['your-package-name'],
        // },
    };
});
