document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:8086/Usuario';

    // Cargar usuarios
    function cargarUsuarios() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#usuariosTable tbody');
                tableBody.innerHTML = ''; // Limpiar tabla
                data.forEach(usuario => {
                    const row = document.createElement('tr');

                    row.innerHTML = `
                        <td>${usuario.idContactos}</td>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.telefono}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.descripcion}</td>
                        <td>
                            <button class="editar" onclick="editarUsuario(${usuario.idContactos})">Editar</button>
                            <button class="eliminar" onclick="eliminarUsuario(${usuario.idContactos})">Eliminar</button>
                        </td>
                    `;

                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Función para editar usuario
    window.editarUsuario = function(id) {
        fetch(`${apiUrl}/${id}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('userId').value = data.idContactos;
                document.getElementById('nombre').value = data.nombre;
                document.getElementById('telefono').value = data.telefono;
                document.getElementById('email').value = data.email;
                document.getElementById('descripcion').value = data.descripcion;
                document.getElementById('formTitle').innerText = 'Editar Usuario';
                document.getElementById('formButton').innerText = 'Actualizar';
            })
            .catch(error => console.error('Error:', error));
    };

    // Función para eliminar usuario
    window.eliminarUsuario = function(id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                cargarUsuarios();
            } else {
                console.error('Error al eliminar el usuario');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    // Manejar la creación y actualización del usuario
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const id = document.getElementById('userId').value;
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const descripcion = document.getElementById('descripcion').value;

        const method = id ? 'PUT' : 'POST';
        const url = id ? `${apiUrl}/${id}` : apiUrl;
        
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idContactos: id, nombre, telefono, email, descripcion })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la operación');
            }
        })
        .then(data => {
            document.getElementById('userForm').reset();
            document.getElementById('formTitle').innerText = 'Crear Usuario';
            document.getElementById('formButton').innerText = 'Crear';
            cargarUsuarios();
        })
        .catch(error => console.error('Error:', error));
    });

    // Inicializar la carga de usuarios
    cargarUsuarios();
});
