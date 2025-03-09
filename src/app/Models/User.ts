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

export interface UserP {
    id?: number;
    name: string;
    email: string;
    country: string;
    birthdate: Date;
}

export interface passwordUser {
    password: string;
    passwordConfirm: string;
}