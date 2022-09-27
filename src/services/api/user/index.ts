import axios from '@src/services/axios';

// 获取用户信息
export const getUserInfo = () => axios.post('/getUserInfo');
