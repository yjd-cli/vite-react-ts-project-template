import { defineConfig } from 'vite';
import viteBaseConfig from './vite.base.config';

// @ts-ignore
export default defineConfig((configEnv) => {
    const baseConfig = viteBaseConfig(configEnv);

    return {
        ...baseConfig,
        build: {},
    };
});
