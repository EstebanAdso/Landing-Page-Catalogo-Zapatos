const openmodal = document.querySelector(".ventana"); //Boton de Enviar
const modal = document.querySelector (".modal1"); //Seccion del contenido
const closemodal = document.querySelector(".modal_close1"); //Cerrar Modal

openmodal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show1");
    console.log("Hola Le dimos click al boton para dirigirnos al Modal!");
});

closemodal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show1");
    console.log("Cerramos el Modal!")
});