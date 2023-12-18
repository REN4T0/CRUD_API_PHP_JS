import { validarDados } from "../services/validar.js";
import { excluirDados } from "../module/delete.js";

async function coletaDados(atividade, id){
    // Condição que define qual atividade será executada
    if(atividade === "cadastrar"){ // Caso seja cadastrar será selecionado o valor dos elemntos do formulário de cadastro
        var nome = document.querySelector("#nome").value;
        var idade = document.querySelector("#idade").value;
        var email = document.querySelector("#email").value;
        var senha = document.querySelector("#senha").value;
    
    }else if(atividade === "editar"){ // Caso seja eitar, o valor de elmentos específicos serão selecionado, com base no id do usuário a ser editado
        var nome = document.querySelector(`#nome${id}`).value;
        var idade = document.querySelector(`#idade${id}`).value;
        var email = document.querySelector(`#email${id}`).value;
        var senha = document.querySelector(`#senha${id}`).value;
    }
    
    // Validando se todos os campos foram preenchidos
    if(nome === "" || idade === "" || email === "" || senha === ""){
        return({
            status: "error",
            msg: "Todos os campos devem ser preenchidos"
        });
    }
    
    // Enviando os dados para validação
    const resposta = await validarDados({
        nome: nome,
        idade: Number(idade),
        email: email,
        senha: senha
    }, atividade, Number(id));

    return resposta;
}



// Ao clicar em um elemento, um evento irá acontecer
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
        document.querySelector(`#excluir${id}`).style.display = "none";

    }else if(elemento.classList.contains("cancelar")){
        const id = elemento.value;

        // Desativando os inputs de edição
        document.querySelector(`#nome${id}`).disabled = true;
        document.querySelector(`#idade${id}`).disabled = true;
        document.querySelector(`#email${id}`).disabled = true;
        document.querySelector(`#senha${id}`).disabled = true;

        document.querySelector(`#editar${id}`).style.display = "block"; // Exibindo o botão de ativar edição
        document.querySelector(`#excluir${id}`).style.display = "block"; // Exibindo o botão de excluir perfil

        // Desativando os botões de edição
        document.querySelector(`#concluir${id}`).style.display = "none";
        elemento.style.display = "none";

    }else if(elemento.classList.contains("concluir")){
        const id = elemento.value;
        
        // Enviando os dados, após concluir a edição
        const resposta = await coletaDados("editar", id);
        console.log(resposta);

        document.querySelector(`#nome${id}`).disabled = true;
        document.querySelector(`#idade${id}`).disabled = true;
        document.querySelector(`#email${id}`).disabled = true;
        document.querySelector(`#senha${id}`).disabled = true;

        document.querySelector(`#editar${id}`).style.display = "block";
        document.querySelector(`#excluir${id}`).style.display = "block";
        
        document.querySelector(`#cancelar${id}`).style.display = "none";
        elemento.style.display = "none";
        
    }else if(elemento.classList.contains("excluir")){
        const id = Number(elemento.value);

        const resposta = await excluirDados({
            id: id
        });
        console.log(resposta)
    }

})