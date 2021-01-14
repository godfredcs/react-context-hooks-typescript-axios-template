import React from 'react';
import userReducer from './reducer';
import { DispatchType } from './../../../globals/Types';
import { UserType, UserDataType } from './../Types';

const email = localStorage.getItem('email') ?? '';
const password = localStorage.getItem('password') ?? '';
const remember_me = !!localStorage.getItem('remember_me');

/**
 * Get the stored data of the authenticated user
 *
 * @return UserDataType | null
 */
export const auth = (): UserDataType | null => {
    let stored_user: string | null = localStorage.getItem('auth');

    if (!stored_user) {
        return null;
    }

    let user: UserDataType | null = null;

    stored_user = JSON.parse(stored_user);

    if (typeof stored_user === 'object') {
        user = stored_user;
    }

    return user;
}

const state: UserType = {
    auth: auth(),
    email,
    password,
    users: [],
    phone: '',
    photo: '',
    remember_me,
    address: '',
    lastname: '',
    firstname: '',
    gender: 'male',
    profession: '',
    login_errors: '',
    date_of_birth: '',
    login_start: false,
    fetching_users: false,
    password_confirmation: '',
    fetching_users_errors: '',
    // LOAD USER
    user: null,
    loading_user: false,
    loading_user_errors: '',
    // REGISTER USER
    registering_user: false,
    registering_user_errors: '',
};

export const UserContext = React.createContext<{
    userState: UserType;
    userDispatch: React.Dispatch<DispatchType>
}>({
    userState: state,
    userDispatch: () => null
});

export const UserProvider: React.FC = ({ children }) => {
    const [userState, userDispatch] = React.useReducer(userReducer, state);
    return <UserContext.Provider value={{ userState, userDispatch }}>{children}</UserContext.Provider>;
};
