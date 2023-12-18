export async function editarDados(id, dados){

    const request = await fetch("http://localhost:80/CRUD_API_PHP_JS/backend/php/update.php", {
        "method": "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            dados,
            id
        })
    });

    const response = await request.json();
    return response;
}