/// <reference types="vite/client" />

// 为了 TS 智能提示：env 目录下添加的环境变量都需要在这里声明类型
interface ImportMetaEnv {
    readonly PUBLIC_TEST: number
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
