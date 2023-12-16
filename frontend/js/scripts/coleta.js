import { validarDados } from "../services/validar.js";

async function coletaDados(){
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
}


window.addEventListener("click", async (evento) => {
    const elemento = evento.target;

    if(elemento.classList.contains("cadastrar")){
        const resposta = await coletaDados();

        console.log(resposta);
    }

})