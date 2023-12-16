import { validarDados } from "../services/validar.js";

async function coletaDados(atividade, id){
    if(atividade === "cadastar"){
        const nome = document.querySelector("#nome").value;
        const idade = document.querySelector("#idade").value;
        const email = document.querySelector("#email").value;
        const senha = document.querySelector("#senha").value;
    
        // Validando se todos os campos foram preenchidos
        if(nome === "" || idade === "" || email === "" || senha === ""){
            return({
                status: "error",
                msg: "Todos os campos devem ser preenchidos"
            });
        }
    
        const resposta = await validarDados({
            nome: nome,
            idade: Number(idade),
            email: email,
            senha: senha
        });
    
        return resposta;

    }else if(atividade === "editar"){
        const nome = document.querySelector(`#nome${id}`).value;
        const idade = document.querySelector(`#idade${id}`).value;
        const email = document.querySelector(`#email${id}`).value;
        const senha = document.querySelector(`#senha${id}`).value;

        document.querySelector(`#editar${id}`).style.display = "block";

        document.querySelector(`#cancelar${id}`).style.display = "none";
        elemento.style.display = "none";
    }
}




window.addEventListener("click", async (evento) => {
    const elemento = evento.target; // Obtendo o elemento clicado em questão

    // Condição que determinará qual atividade o elemento clicado executará
    if(elemento.classList.contains("cadastrar")){
        const resposta = await coletaDados("cadastrar", ""); // Enviando parâmetros que vão definir qual atividade a função vai realizar/chamar e, se for necessário, informar o ID do usuário do qual irei editar
        console.log(resposta);

    }else if(elemento.classList.contains("editar")){
        const id = elemento.value; // Selecionando o ID do usuário que estará presente no valor do botão selecionando

        // Ativando todos os inputs para edição dos dados do usuário
        document.querySelector(`#nome${id}`).disabled = false;
        document.querySelector(`#idade${id}`).disabled = false;
        document.querySelector(`#email${id}`).disabled = false;
        document.querySelector(`#senha${id}`).disabled = false;

        // Exibindo os botões de edição
        document.querySelector(`#concluir${id}`).style.display = "block";
        document.querySelector(`#cancelar${id}`).style.display = "block";

        // Escondendo o botão de ativar edição
        elemento.style.display = "none";

    }else if(elemento.classList.contains("cancelar")){
        const id = elemento.value;

        // Desativando os inputs de edição
        document.querySelector(`#nome${id}`).disabled = true;
        document.querySelector(`#idade${id}`).disabled = true;
        document.querySelector(`#email${id}`).disabled = true;
        document.querySelector(`#senha${id}`).disabled = true;

        document.querySelector(`#editar${id}`).style.display = "block"; // Exibindo o botão de ativar edição

        // Desativando os botões de edição
        document.querySelector(`#concluir${id}`).style.display = "none";
        elemento.style.display = "none";

    }else if(elemento.classList.contains("concluir")){
        const id = elemento.value;
        
        const resposta = await coletaDados("cadastrar", id);
        console.log(resposta);
    }

})