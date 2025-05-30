import { ILoginPost } from "./loginPost";

export interface IRegistroPost extends ILoginPost {
    nome: string;
}