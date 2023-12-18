import { cadastrarDados } from "../module/post.js";
import { editarDados } from "../module/put.js";

export async function validarDados(dados, atividade, id){
    // Validando a idade
    if (dados.idade < 0) return({
                            status: "error",
                            msg: "É impossível a idade ser menor que 0."
                        });
    
    
    // Verificando se a senha tem todos os parâmetros requeridos
    if(dados.senha.length < 6 || dados.senha.length > 12){
        return({
            status: "error",
            msg: "A senha deve ter de 6 a 12 caracteres"
        });
    }
    else if(dados.senha.match(/[a-z]/g) === null){
        return({
            status: "error",
            msg: "A senha deve ter ao menos 1 letra minúscula"
        });
    }
    else if(dados.senha.match(/[A-Z]/g) === null){
        return({
            status: "error",
            msg: "A senha deve ter ao menos 1 letra maiúscula"
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