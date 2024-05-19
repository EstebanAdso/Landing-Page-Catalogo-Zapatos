document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Objeto con los datos del login
        const loginData = {
            usuario: username,
            contraseña: password
        };

        // Envía los datos al backend para autenticación
        fetch('http://localhost:8086/login/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(response => {
            if (response.ok) {
                alert("¡Login exitoso!");
                // Aquí puedes redirigir al usuario a otra página o hacer cualquier otra acción después del login exitoso
                window.location.href = '/usuarios_registro/gestorUsers.html';
            } else {
                alert("Error de autenticación. Por favor, verifica tus credenciales.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error de conexión con el servidor.");
        });
    });
});
