<?php
    include_once("../conn.php");

    header("Access-Control-Allow-Origin: http://localhost:80");
    header("Access-Control-Allow-Method: PUT");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $registro = json_decode(file_get_contents("php://input"), true);
    
    $id = htmlspecialchars($registro["id"]); // Coletando o ID do usuário
    $dados = $registro["dados"]; // Coletando o objeto dos demais dados

    $nome = htmlspecialchars($dados["nome"]);
    $idade = htmlspecialchars($dados["idade"]);
    $email = htmlspecialchars($dados["email"]);
    $senha = htmlspecialchars($dados["senha"]);

    // Selecionando a senha do perfil no banco
    $query = "SELECT senha FROM perfil WHERE id = $id";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);

    // Se a senha for a mesma, não haverá outra criptografia. se não, a nova senha será criptografada.
    if($senha === $row["senha"]){
        try{
            $stmt = $conn->prepare("UPDATE perfil SET nome = ?, idade = ?, email = ? WHERE id = ?");
            $stmt->bind_param("sisi", $nome, $idade, $email, $id);
            $stmt->execute();

        }catch(Exception $error){

            // Verificando se o E-mail é repetido
            if(preg_match("/email/i", $error->getMessage())){
                echo json_encode([
                    "status" => "error",
                    "msg" => "E-mail já existente. Digite outro!"
                ]);
    
            }else{
                echo json_encode([
                    "status" => "error",
                    "msg" => "Algum problema ocorreu. Se houver persistência do erro, reporte-o e volte mais tarde!"
                ]);
            }
    
            exit;
        }

    }else{
        $newCript = hash("sha256", $senha);
        
        try{
            $stmt = $conn->prepare("UPDATE perfil SET nome = ?, idade = ?, email = ?, senha = ? WHERE id = ?");
            $stmt->bind_param("sissi", $nome, $idade, $email, $newCript, $id);
            $stmt->execute();

        }catch(Exception $error){

            if(preg_match("/email/i", $error->getMessage())){
                echo json_encode([
                    "status" => "error",
                    "msg" => "E-mail já existente. Digite outro!"
                ]);
    
            }else{
                echo json_encode([
                    "status" => "error",
                    "msg" => "Algum problema ocorreu. Se houver persistência do erro, reporte-o e volte mais tarde!"
                ]);
            }
    
            exit;
        }
    }

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