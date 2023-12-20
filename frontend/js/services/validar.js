import { cadastrarDados } from "../module/post.js";
import { editarDados } from "../module/put.js";

export async function validarDados(dados, atividade, id){
    // Validando a idade
    if (dados.idade < 0) return({
                            status: "error",
                            msg: "É impossível a idade ser menor que 0."
                        });
    
    
    // Verificando se a senha tem todos os parâmetros requeridos
    if(dados.senha.length < 6){
        return({
            status: "error",
            msg: "A senha deve ter ao menos 6 caracteres"
        });
    }
    else if(dados.senha.match(/[A-z]/g) === null){
        return({
            status: "error",
            msg: "A senha deve ter ao menos 1 letra"
        });
    }
    else if(dados.senha.match(/[0-9]/g) === null){
        return({
            status: "error",
            msg: "A senha deve ter ao menos 1 número"
        });
    }
    
    

    // Condição que determinará para qual finalidade os dados coletados e validados serão enviados
    switch(atividade){
        case "cadastrar":
            var resposta = await cadastrarDados(dados);

            document.querySelector("#nome").value = "";
            document.querySelector("#idade").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#senha").value = "";

            break;
        case "editar":
            var resposta = await editarDados(id, dados);
            break
        default:
            var resposta = {
                status: "error",
                msg: "Ocorreu algum erro ao enviar os dados"
            }
    }

    return resposta;
}