
const devApiUrl = 'http://192.168.49.00:10005';

//正式环境变量,注意修改
const proApiUrl = 'https://pro.web.com';


const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;
export default {
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:1000,
    localStorageKey:'KEYXXX',
    designSize:375,//设计稿宽度 375 or 750
    requestFailureRetry:4, //请求失败重试
    requestFailureRetryDelay:600 //请求失败重试延迟
}
