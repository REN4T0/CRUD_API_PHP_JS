export function exibirDados(dados){
    const container = document.querySelector(".container");

    for(let registros of dados){
        let div = document.createElement("div");
        div.setAttribute("class", "linha");
        container.appendChild(div);

        // Criando o input para o nome
        let inputNome = document.createElement("input"); // Criando elemento
        inputNome.setAttribute("class", "input"); // Atribuindo classe ao elemento
        inputNome.setAttribute("id", `nome${registros._id}`); // Atribuindo ID ao elemento
        inputNome.setAttribute("type", "text"); // Atribuindo o tipo de valor do input (O elemento a ser criado)
        inputNome.disabled = true; // Desativando o input (O elemento a ser criado)
        inputNome.value = registros.nome; // Colocando um valor no input
        div.appendChild(inputNome); // Inserindo no elemento pai (div), o elemento filho (inputNome)

        // Criando input para idade
        let inputIdade = document.createElement("input");
        inputIdade.setAttribute("class", "mini-input");
        inputIdade.setAttribute("id", `idade${registros._id}`);
        inputIdade.setAttribute("type", "number");
        inputIdade.disabled = true;
        inputIdade.value = registros.idade;
        div.appendChild(inputIdade);

        // Criando input para E-mail
        let inputEmail = document.createElement("input");
        inputEmail.setAttribute("class", "input");
        inputEmail.setAttribute("id", `email${registros._id}`);
        inputEmail.setAttribute("type", "email");
        inputEmail.disabled = true;
        inputEmail.value = registros.email;
        div.appendChild(inputEmail);

        // Criando input para Senha
        let inputSenha = document.createElement("input");
        inputSenha.setAttribute("class", "input");
        inputSenha.setAttribute("id", `senha${registros._id}`);
        inputSenha.setAttribute("type", "password");
        inputSenha.disabled = true;
        inputSenha.value = registros.senha;
        div.appendChild(inputSenha);

        // Botão de editar que ativa os inputs
        let btnEditar = document.createElement("button");
        btnEditar.setAttribute("class", "button editar");
        btnEditar.setAttribute("id", `editar${registros._id}`);
        btnEditar.textContent = "Editar";
        btnEditar.value = registros._id;
        div.appendChild(btnEditar);

        // Botão de concluir a edição dos valores
        let btnConcluir = document.createElement("button");
        btnConcluir.setAttribute("class", "button concluir");
        btnConcluir.setAttribute("id", `concluir${registros._id}`);
        btnConcluir.textContent = "Concluir";
        btnConcluir.value = registros._id;
        btnConcluir.style.display = "none";
        div.appendChild(btnConcluir);
        
        // Botão de concluir a edição dos valores
        let btnCancelar = document.createElement("button");
        btnCancelar.setAttribute("class", "button cancelar");
        btnCancelar.setAttribute("id", `cancelar${registros._id}`);
        btnCancelar.textContent = "Cancelar";
        btnCancelar.value = registros._id;
        btnCancelar.style.display = "none";
        div.appendChild(btnCancelar);
    }
}