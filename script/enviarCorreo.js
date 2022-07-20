const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_9n72dvj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Mensaje Enviado..!',
        showConfirmButton: false,
        timer: 1500
      })
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Mensaje No Enviado!'
      })
    });
});