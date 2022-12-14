## 项目目录结构说明
```markdown
vite-react-ts-project-template
  ├── .husky        
  ├── build                     # vite 构建配置
  │   ├── vite.base.config.ts
  │   ├── vite.dev.config.ts
  │   └── vite.prod.config.ts
  ├── env                       # vite 项目环境变量
  ├── public                    # 公共静态资源文件目录
  │   └── vite.svg
  ├── scripts                   # 项目构建脚本
  ├── package.json
  ├── yarn.lock                 # 项目统一使用 yarn
  ├── tsconfig.json
  ├── babel.config.js
  ├── README.md
  ├── commitlint.config.js      # git 提交规范配置文件
  ├── lint-staged.config.js     # git lint-staged 匹配规则配置文件
  ├── CHANGELOG.md              # 项目 changelog（可根据 git commit 自动生成） 
  ├── prettier.config.js        # 代码格式化配置文件
  ├── postcss.config.js
  ├── index.html               
  ├── tsconfig.node.json
  └── src
     ├── pages                  # 页面目录（只存放页面容器组件）
     │   ├── home
     │   ├── register
     │   └── login
     ├── components             # 页面下的业务组件目录（根据页面划分子目录）
     │   ├── login
     │   └── home
     ├── routes                 # 配置式路由
     ├── services               # 后端接口相关   
     │   ├── api
     │   ├── axios.ts
     │   ├── config.ts
     │   ├── token-manager.ts
     │   └──  server-response-manager.ts
     ├── store                  # 全局 store 目录
     │   ├── index.ts
     │   ├── history.ts
     │   └── models             # 数据 model 目录（global model + 按页面划分的 model）
     ├── hooks                  # 自定义 hooks
     ├── utils                  # 工具函数
     │   ├── index.ts
     │   ├── generate-id.ts
     │   ├── get-url-params.ts
     │   ├── generate-random-string.ts
     │   └── variable-type-detection.ts
     ├── d.ts
     │   └── global.d.ts
     ├── common                 # 项目通用代码目录
     │   ├── components         # 通用的业务组件/UI组件目录
     │   ├── global-context.ts  
     │   ├── event-center.ts    # 事件中心
     │   └── styles
     ├── vite-env.d.ts          # vite 环境变量声明文件
     ├── assets                 # 项目静态资源文件目录
     │   ├── fonts              
     │   ├── images
     │   └── styles
     ├── main.tsx               # 项目入口文件
     ├── App.tsx                # 项目根容器组件
     ├── App.css
     └── index.css
```

## 项目主要技术栈
```markdown
- react                    "^18.0.17"
- react-dom                "^18.2.0"
- react-router             "^6.3.0"
- react-router-dom         "^6.3.0"
- react-beautiful-dnd      "^13.1.0"
- react-intl               "^6.0.5"
- react-resizable          "^3.0.4"

- less                     "^4.1.3"
- typescript               "^4.7.4"
- vite                     "^3.0.7"
- lodash                   "^4.17.21"
- moment                   "^2.29.4""
- immer                    "^9.0.15"
- events                   "^3.3.0"
- axios                    "^0.27.2"
- antd                     "^4.22.6"
- ahooks                   "^3.7.0"
- rematch                  "^2.2.0"
```

## 项目开发规范
- 尽量使用 ahooks
- 使用 less + css ：*.module.less/*.module.css 文件支持模块化
- 尽量使用 react hooks 实现 react 组件
- 页面维度的数据存放到页面级别的 model，只有所有页面共用的数据才存放到 global model
- env 环境变量：以 PUBLIC_ 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。所以敏感信息不要以 PUBLIC_ 为前缀。
- pages 只存放页面容器组件
- components 存放页面下的业务组件（容器组件 + UI组件），需要以页面维度划分子目录
- 配置式路由：
  - 项目路由统一在 routes 目录下配置
  - 页面级别路由建议使用动态加载
  - 路由组件统一使用 `export default xxx` 的形式导出，否则路由无法渲染出来


## [Git 提交信息规范](https://commitlint.js.org/#/reference-rules?id=rules)
- feat：      新功能（feature） 
- fix：       修补bug
- docs：      文档（documentation）
- style：     格式（不影响代码运行的变动）
- refactor：  重构（即不是新增功能，也不是修改bug的代码变动）
- test：      增加测试
- chore：     构建过程或辅助工具的变动


