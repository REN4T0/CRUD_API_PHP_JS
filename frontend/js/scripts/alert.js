// window.addEventListener("load", () => {
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top',
//         showConfirmButton: false,
//         timer: 1800,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })

//       Toast.fire({
//         icon: 'success',
//         title: "Bazinga!"
//       })
// });

export function alerta(feedback){
  // console.log(feedback);
  const alerta = Swal.mixin({
    Toast: true,
    position: "top-end",
    showConfirmButton: false,
  });

  switch(feedback.status){
    case "success":
      alerta.fire({
        icon: "success",
        title: `${feedback.msg}`
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

// window.addEventListener("load", () => {
//   alerta("success");
// })