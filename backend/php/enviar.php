<?php
    include_once("../conn.php");

    // Cabeçalho de conexão
    header("Access-Control-Allow-Origin: http://localhost:80");
    header("Access-Control-Allow-Method: GET");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json;");
    
    // Comando SQL
    $query = "SELECT * FROM perfil";
    $result = mysqli_query($conn, $query); // Executando o comando acima
    
    if(!$result){
        $response = [
            "status"=> "error",
            "msg" => "Não foi possível coletar os dados do banco"
        ];
    }

    $response = [
        "status"=> "success",
        "dados" => [

        ]
    ];

    // Loop que vai pegar os dados de cada registro do banco de dados
    while($row = mysqli_fetch_assoc($result)){
        // Comando para incluir dados no vetor
        array_push($response["dados"], [
            "_id" => $row['id'],
            "nome" => $row["nome"],
            "idade" => $row["idade"],
            "email" => $row["email"],
            "senha" => $row["senha"]
        ]);
    }

    echo json_encode($response);
?>