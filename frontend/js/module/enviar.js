export async function enviarDados(dados){
    // Criando a requisição
    const requisicao = await fetch("http://localhost:80/CRUD_API_PHP_JS/backend/php/receber.php", { //Nessa linha informei para onde os meus dados vão ser enviados
        "method":"POST",
        // Nunca esquecer que após método, deve-se abrir o "header", que é o cabeçalho do que estou enviando
        headers: {
            "Content-Type":"application/json" //Informando que o tipo dos dados enviados será JSON
        },
        body: JSON.stringify(dados) //Transformado os dados em JSON
    });

    const resposta = await requisicao.json();
    return resposta;
}