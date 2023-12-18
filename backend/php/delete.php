<?php
    include_once("../conn.php");

    header("Access-Control-Allow-Origin: http://localhost:80");
    header("Access-Control-Allow-Method: DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $dados = json_decode(file_get_contents("php://input"), true);

    $id = $dados["id"];

    $stmt = $conn->prepare("DELETE FROM perfil WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    if($stmt->affected_rows){
        $response = [
            "status" => "success",
            "msg" => "Usuário excluído com sucesso"
        ];
    }else{
        $response = [
            "status" => "error",
            "msg" => "Não foi possível excluir o usuário"
        ];
    }

    echo json_encode($response);
?>