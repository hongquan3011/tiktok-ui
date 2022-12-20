import axios from 'axios';
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, options = {}) => {
    const repsonse = await request.get(path, options);
    return repsonse.data;
};
export default request;
