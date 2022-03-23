export interface UserListItens {
    id?:string;
    name: string;
    email:string;
    role?:string;
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
    email:string;
    password: string;
}

export interface UserLoginResponse {
   token:string;
   token_type: string;
   expires_in: number;
}