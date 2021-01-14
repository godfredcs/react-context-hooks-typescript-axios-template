interface PropTypes {
    email: string;
    gender: string;
    phone: string;
    photo?: string;
    address: string;
    lastname: string;
    firstname: string;
    profession: string;
    date_of_birth: string;
};

export interface RegisterUserType extends PropTypes {
    password: string;
    password_confirmation: string;
}

export interface UserDataType extends PropTypes {
    id: number;
    created_at?: string;
    updated_at?: string;
    api_token?: string;
};

export interface UserType extends PropTypes {
    password: string;
    remember_me: boolean;
    users: UserDataType[];
    login_start: boolean;
    login_errors: string;
    loading_user: boolean;
    fetching_users: boolean;
    auth: UserDataType | null;
    user: UserDataType | null;
    registering_user: boolean;
    loading_user_errors: string;
    fetching_users_errors: string;
    password_confirmation: string;
    registering_user_errors: string;
};

export interface LoginDataType {
    email: string;
    password: string;
};

export interface UserParamsType {};
