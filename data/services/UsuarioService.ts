import axios from "axios";
import { ListaPath, UsuarioPath } from "./paths";

export function buscarUsuarios() {
    return axios.get(UsuarioPath);
}
