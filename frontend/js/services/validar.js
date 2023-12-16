import { enviarDados } from "../module/enviar.js";

export async function validarDados(dados){
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
    
    const resposta = await enviarDados(dados);
    return resposta;
}