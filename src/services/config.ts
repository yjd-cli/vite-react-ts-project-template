/**
 * @description：后端接口配置文件
 */
// 两种设置接口前缀的方式：
// 一、只设置 /xxx-api 前缀，需要在开发环境下配置代理转发
const baseHost = '/xxx-api';

// 二、直接设置完整的后端接口服务地址（后端接口服务地址 + /xxx-api 前缀），然后分别在开发、测试、生产环境下设置不同的 接口地址（正常情况下，肯定是三套接口地址）
// let baseHost = '/xxx-api';
// const prefixURL = '/xxx-api';
// if (process.env.NODE_ENV === 'development') {
//   baseHost = `https://xxx-dev.com${prefixURL}`;
// } else if (process.env.NODE_ENV === 'production') {
//   baseHost = `https://xxx-prod.com${prefixURL}`;
// }

export const host = baseHost;
