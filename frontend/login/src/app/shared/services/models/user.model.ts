export interface User {
    id?:string;
    name: string;
    email:string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}