
  document.querySelector('#formularioPost').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Usuario enviado");
    fetch('http://localhost:8086/Usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
        
      },
      body: JSON.stringify(data)
      
    })
    .then(response => {
      if (response.ok) {
        console.log('Usuario guardado exitosamente');
        document.querySelector('#formularioPost').classList.add('hidden');
        document.querySelector('#oculto').classList.add('hidden');
        document.querySelector('#cambiarTexto').textContent = 'El Formulario se mandó correctamente!';
        document.querySelector('#cambiarTexto').classList.add('colorBlue')
      } else {
        console.error('Error al guardar el Usuario');
      }
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
    });
  });
