var imagenes = [
    'imagenes/MILITAR_BEIGE.jpeg',
    'imagenes/MILITAR_CLASICO.jpeg',
    'imagenes/MILITAR_MANUEL.jpeg',
    'imagenes/PIOLIN_BEIGE.jpeg',
    'imagenes/VIRGINIA_VERDE.jpeg',
    'imagenes/TACO_ROJO.jpeg',
];

// Índice de la imagen actual
var indice = 0;

// Función para cambiar la imagen cada 15 segundos
function cambiarImagen() {
    // Actualiza la URL de la imagen de fondo del div
    var contacto = document.getElementById('contacto');
    contacto.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + imagenes[indice] + ')';

    // Incrementa el índice para mostrar la próxima imagen
    indice = (indice + 1) % imagenes.length;
}

// Llama a la función cambiarImagen inmediatamente
cambiarImagen();

// Llama a la función cambiarImagen cada 15 segundos
setInterval(cambiarImagen, 15000); // 15000 milisegundos = 15 segundos
