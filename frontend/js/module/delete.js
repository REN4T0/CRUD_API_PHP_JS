import { puxarDados } from "./get.js";
import { exibirDados } from "../services/exibir.js";

export async function excluirDados(id){
    const request = await fetch("http://localhost:80/CRUD_API_PHP_JS/backend/php/delete.php", {
        "method": "DELETE",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    });

    const response = await request.json();

    // Assim que um perfil for excluído, a lista de usuários será atualizada
    if(response.status === "success"){
        const atualizar = await puxarDados();

        if(atualizar.status === "success"){
            exibirDados(atualizar.dados)
        }
    }
    return response;
}