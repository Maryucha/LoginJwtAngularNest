export interface UserListItens {
    id?:string;
    name: string;
    email:string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCreation {
    name: string;
    email:string;
    password: string;
    passwordConfirmation:string;
}


export interface User {
    name: string;
    email:string;
    password: string;
    passwordConfirmation:string;
}

export interface UserLogin {

}