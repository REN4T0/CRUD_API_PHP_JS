<?php
    include_once("../conn.php");

    // Cabeçalho de conexão que permite...
    header("Access-Control-Allow-Origin: http://localhost:80"); //Quaisquer dados vindos desse domínio;
    header("Access-Control-Allow-Method: POST"); // Definir o método em questão, que nesse caso é POST, indicando que irei cadastrar algo;
    header("Access-Control-Allow-Headers: Content-Type"); // Indicando que o tipo dos dados virão em um cabeçalho;
    header("Content-Type: application/json"); // E que o tipo desses dados virá em JSON;
;
    $dados = json_decode(file_get_contents("php://input"), true); // Decodificando os dados

    $nome = htmlspecialchars($dados['nome']);
    $idade = htmlspecialchars($dados['idade']);
    $email = htmlspecialchars($dados['email']);
    $senha = htmlspecialchars($dados['senha']);


    // Cadastrando no banco de dados com proteção contra injeção SQL
    $stmt = $conn->prepare("INSERT INTO perfil (nome, idade, email, senha) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("siss", $nome, $idade, $email, $senha);
    $stmt->execute();

    // Verificando se foi cadastrado ou não
    if($stmt->affected_rows){
        $resposta = [
            "status" => "success",
            "msg" => "$nome cadastrado com sucesso!"
        ];
    }else{
        $resposta = [
            "status" => "error",
            "msg" => "Não foi possível cadastrar $nome..."
        ];
    }

    echo json_encode($resposta);
?>