import axios from "axios";
import { UsuarioPath } from "./paths";

export function buscarUsuarios() {
    return axios.get(UsuarioPath);
}
