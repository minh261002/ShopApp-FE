export type Auth = {
    id: string;
    image: string;
    name: string;
};

export type LoginResponse = {
    status: number;
    message: string;
    user: Auth;
    access_token: string;
    token_type: string;
}

export type Login = {
    email: string;
    password: string;
};

export type Register = {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
};

export type ForgotPassword = {
    email: string;
    time: string;
    device: string;
};

export type ResetPassword = {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
};