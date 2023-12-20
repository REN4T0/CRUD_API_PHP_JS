export function alerta(feedback){
  const alerta = Swal.mixin({ // Estou preparando as estilizações do alerta
    toast: true, // Estou dizendo que ele será um toast, ou seja, um mini alerta
    position: "top-end", // Estou dizendo qual será a posição desse alerta
    showConfirmButton: false, // Estou dizendo que o botão do alerta deve sumir
    timer: 3000, // Estou dizendo que o tempo de exibição do alerta será de 3 segundos
    timerProgressBar: true, // Estou dizendo que a barra que indica o tempo do alerta deve ser exibida

    // Essa função serve para indicar que, se o ponteiro do mouse estiver sobre o alerta, o tempo de exibição será pausado. Caso o ponteiro saia de cima dele, o tempo retornara a correr de onde estava
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


  switch(feedback.status){
    case "success":
      alerta.fire({ // Aqui, estou executando o alerta
        icon: "success", // Escolhendo o icone
        title: `${feedback.msg}` // Informando a mensagem
      });
      break;

    case "error":
      alerta.fire({
        icon: "error",
        title: `${feedback.msg}`
      });
      break;

    default:
      alerta.fire({
        icon: "error",
        title: "Sei lá o que aconteceu!"
      });
      break;
  }
}