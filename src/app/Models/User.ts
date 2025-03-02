export interface User {
    iduser?: number;
    name: string;
    email: string;
    country: string;
    birthdate: Date;
    password: string;
    passwordConfirm: string;
    aceptTyCUser: boolean;
}

export interface UserPost {
    iduser?: number;
    name: string;
    email: string;
    country: string;
    birthdate: Date;
}