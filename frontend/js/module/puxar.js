import { exibirDados } from "../services/exibir.js";

export async function puxarDados(){
    const request = await fetch("http://localhost:80/CRUD_API_PHP_JS/backend/php/enviar.php", {
        "method":"GET",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify()
    });

    const response = await request.json();

    // exibirDados();

    return response;
}

// Quando a janela carregar, será executado a função dentro
window.addEventListener("load", async () => {
    const resposta = await puxarDados();

    // Se a requisição for um sucesso, os dados serão renderizados na tela
    if(resposta.status === "success"){
        exibirDados(resposta.dados);
    }else{
        console.log(resposta);
    }
})