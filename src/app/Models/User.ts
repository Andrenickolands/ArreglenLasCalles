export interface User {
    id?: number;
    name: string;
    email: string;
    country: string;
    birthdate: Date;
    password: string;
    passwordConfirm: string;
    aceptTyCUser: boolean;
}

export interface UserPost {
    id?: number;
    name: string;
    email: string;
    country: string;
    birthdate: Date;
}