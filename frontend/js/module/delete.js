export async function excluirDados(id){
    const request = await fetch("http://localhost:80/CRUD_API_PHP_JS/backend/php/delete.php", {
        "method": "DELETE",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    });

    const response = await request.json();
    return response;
}