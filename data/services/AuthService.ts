import axios from "axios";
import { UsuarioPath } from "./paths";
import { ILoginPost } from "../interfaces/loginPost";
import { IRegistroPost } from "../interfaces/registroPost";

export function buscarUsuarios() {
    return axios.get(UsuarioPath);
}

export function login(params: ILoginPost) {
    return axios.post(UsuarioPath + "/login", params)
}

export function registro(params: IRegistroPost) {
    return axios.post(UsuarioPath + "/registro", params)
}
