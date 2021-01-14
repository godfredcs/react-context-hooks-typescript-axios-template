import User from './service';
import * as types from './types';
import { auth } from './context';
import { DispatchType } from './../../../globals/Types';
import { RegisterUserType, LoginDataType } from './../Types';

export const setRememberMe = (dispatch: React.Dispatch<DispatchType>, payload: boolean = false) => {
    dispatch({ type: types.SET_REMEMBER_ME, payload });
};

export const firstnameChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.FIRSTNAME_CHANGED, payload });
};

export const lastnameChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.LASTNAME_CHANGED, payload });
};

export const genderChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.GENDER_CHANGED, payload });
};

export const phoneChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.PHONE_CHANGED, payload });
};

export const photoChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.PHONE_CHANGED, payload });
};

export const dateOfBirthChanged = (dispatch: React.Dispatch<DispatchType>, payload: Date | Date[]) => {
    dispatch({ type: types.DATE_OF_BIRTH_CHANGED, payload });
};

export const addressChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.ADDRESS_CHANGED, payload });
};

export const professionChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.PROFESSION_CHANGED, payload });
};

export const emailChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.EMAIL_CHANGED, payload });
};

export const passwordChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.PASSWORD_CHANGED, payload });
};

export const passwordConfirmationChanged = (dispatch: React.Dispatch<DispatchType>, payload: string) => {
    dispatch({ type: types.PASSWORD_CONFIRMATION_CHANGED, payload });
};

export const login = async (dispatch: React.Dispatch<DispatchType>, data: LoginDataType, remember_me: boolean) => {
    try {
        dispatch({ type: types.LOGIN_START });

        const auth = await User.login(data);

        if (auth) {
            localStorage.setItem('auth', JSON.stringify(auth));

            dispatch({ type: types.LOGIN_SUCCESS, payload: auth });

            if (remember_me) {
                localStorage.setItem('remember_me', 'remember_me');
                localStorage.setItem('email', data.email);
                localStorage.setItem('password', data.password);
            } else {
                localStorage.removeItem('remember_me');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }
        }
    } catch (error) {
        dispatch({ type: types.LOGIN_FAIL, payload: error });
    }
}

export const register = async (dispatch: React.Dispatch<DispatchType>, data: RegisterUserType, fetchAllUsers: Function) => {
    try {
        dispatch({ type: types.REGISTER_USER_START });

        const user = await User.register(data);

        if (user) {
            dispatch({ type: types.REGISTER_USER_SUCCESS, payload: user });

            if (fetchAllUsers) {
                fetchAllUsers();
            }
        }
    } catch (error) {
        dispatch({ type: types.REGISTER_USER_FAIL, payload: error });
    }
}

export const fetchUsers = async (dispatch: React.Dispatch<DispatchType>, params: {} = {}) => {
    try {
        dispatch({ type: types.FETCH_USERS_START });

        const users = await User.all(params);

        if (users) {
            dispatch({ type: types.FETCH_USERS_SUCCESS, payload: users });
        }
    } catch (error) {
        dispatch({ type: types.FETCH_USERS_FAIL, payload: error });
    }
}

export const logout = async (dispatch: React.Dispatch<DispatchType>) => {
    try {
        localStorage.removeItem('auth');
        dispatch({ type: types.LOGOUT, payload: auth() });
    } catch (error) {
        console.log('USER ACTIONS - LOGOUT ERROR: ', error);
    }
}

export const loadUser = async (dispatch: React.Dispatch<DispatchType>, id: number) => {
    try {
        dispatch({ type: types.LOAD_USER_START });

        const user = await User.show(id);

        if (user) {
            dispatch({ type: types.LOAD_USER_SUCCESS, payload: user });
        }
    } catch (error) {
        console.log('USER ACTIONS - LOADING USER ERROR: ', error);
        dispatch({ type: types.LOAD_USER_FAIL, payload: error });
    }
}
