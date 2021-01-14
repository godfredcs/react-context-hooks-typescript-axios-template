import axios from '../../../store/service';
import { UserDataType, RegisterUserType, LoginDataType } from './../Types';

const service = {
    /**
     * User Service - Log in an existing user.
     *
     * @param {Object} data
     */
    login(data: LoginDataType) {
        return axios.post<UserDataType>('login', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * User Service - Register a new user.
     *
     * @param {Object} data
     */
    register(data: RegisterUserType) {
        return axios.post<UserDataType>('register', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * User Service - Get all existing users.
     *
     * @param {object} params
     */
    all(params: {} = {}) {
        return axios.get<UserDataType[]>('users', params)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * User Service - Get an existing user by id.
     *
     * @param {number} id
     */
    show(id: number) {
        return axios.get<UserDataType>(`users/${id}`)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },
};

export default service;
