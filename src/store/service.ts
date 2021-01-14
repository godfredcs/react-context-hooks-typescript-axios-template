import Axios from 'axios';
import { auth } from './../containers/Users/store/context';

const IP_ADDRESS: string = '127.0.0.1';
const PORT: string = '8000';

const axios = Axios.create({
    baseURL: `http://${IP_ADDRESS}:${PORT}/api/v1`,

    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// Intercept each request and set the bearer token for user
axios.interceptors.request.use(config => {
    let user = auth();

    if (user && user.api_token && !config.headers.common.Authorization) {
        config.headers.common.Authorization = `Bearer ${user.api_token}`;
    }

    return config;
});

export default axios;
