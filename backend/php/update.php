<?php
    include_once("../conn.php");

    header("Access-Control-Allow-Origin: http://localhost:80");
    header("Access-Control-Allow-Method: PUT");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $registro = json_decode(file_get_contents("php://input"), true);
    
    $id = $registro["id"]; // Coletando o ID do usuário
    $dados = $registro["dados"]; // Coletando o objeto dos demais dados

    $nome = $dados["nome"];
    $idade = $dados["idade"];
    $email = $dados["email"];
    $senha = $dados["senha"];


    $stmt = $conn->prepare("UPDATE perfil SET nome = ?, idade = ?, email = ?, senha = ? WHERE id = ?");
    $stmt->bind_param("sissi", $nome, $idade, $email, $senha, $id);
    $stmt->execute();

    if($stmt->affected_rows){
        $response = [
            "status" => "success",
            "msg" => "Usuário editado com sucesso"
        ];
    }else{
        $response = [
            "status" => "error",
            "msg" => "Não foi possível editar os dados"
        ];
    }

    echo json_encode($response);
?>