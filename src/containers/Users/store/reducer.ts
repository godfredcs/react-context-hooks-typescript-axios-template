import * as types from './types';
import { UserType } from './../Types';
import { DispatchType } from './../../../globals/Types';

const reducer = (state: UserType, action: DispatchType): UserType => {
    switch (action.type) {
        case types.EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload,
            };

        case types.PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload,
            };

        case types.PASSWORD_CONFIRMATION_CHANGED:
            return {
                ...state,
                password_confirmation: action.payload,
            };

        case types.DATE_OF_BIRTH_CHANGED:
            return {
                ...state,
                date_of_birth: action.payload,
            };

        case types.GENDER_CHANGED:
            return {
                ...state,
                gender: action.payload,
            };

        case types.FIRSTNAME_CHANGED:
            return {
                ...state,
                firstname: action.payload,
            };

        case types.LASTNAME_CHANGED:
            return {
                ...state,
                lastname: action.payload,
            };

        case types.ADDRESS_CHANGED:
            return {
                ...state,
                address: action.payload,
            };

        case types.PROFESSION_CHANGED:
            return {
                ...state,
                profession: action.payload,
            };

        case types.PHONE_CHANGED:
            return {
                ...state,
                phone: action.payload,
            };

        case types.PHOTO_CHANGED:
            return {
                ...state,
                photo: action.payload,
            };

        case types.SET_REMEMBER_ME:
            return {
                ...state,
                remember_me: action.payload
            };

        case types.LOGOUT:
            return {
                ...state,
                auth: action.payload,
            };

        // LOGIN USER
        case types.LOGIN_START:
            return {
                ...state,
                login_start: true,
                login_errors: '',
            };

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                login_start: false,
                auth: action.payload,
            };

        case types.LOGIN_FAIL:
            return {
                ...state,
                auth: null,
                login_start: false,
                login_errors: action.payload,
            };

        // FETCH USERS
        case types.FETCH_USERS_START:
            return {
                ...state,
                fetching_users: true,
            };

        case types.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                fetching_users: false
            };

        case types.FETCH_USERS_FAIL:
            return {
                ...state,
                fetching_users: false
            };

        // LOAD USER
        case types.LOAD_USER_START:
            return {
                ...state,
                loading_user: true,
            };

        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading_user: false,
                user: action.payload,
            };

        case types.LOAD_USER_FAIL:
            return {
                ...state,
                loading_user: false,
                loading_user_errors: action.payload,
            }

        // REGISTER USER
        case types.REGISTER_USER_START:
            return {
                ...state,
                registering_user: true,
                registering_user_errors: '',
            };

        case types.REGISTER_USER_SUCCESS:
            return {
                ...state,
                registering_user: false,
            };

        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                registering_user: false,
                registering_user_errors: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;
