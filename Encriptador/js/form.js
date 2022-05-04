// Seleccionar H2 "No mensajes encontrados"
const sinMensaje = document.querySelector(".sinMensajes");
const mensajeAEncriptar = document.querySelector(".textoAEncriptar")
const botonEncriptar = document.querySelector(".btn-encriptar");
const input = document.querySelector("#input-texto");
const outputContainer = document.querySelector(".output-container")
const botonCopiar = document.querySelector(".btn-copiar");
// Aplicar a H2 clase "hidden" para ocultarlo

function modificarElementos(){
  sinMensaje.classList.add("hidden");
  botonCopiar.classList.remove("hidden");
  mensajeAEncriptar.style.textAlign = "left"; 
}

function encriptarMensaje(){
    const mensaje = input.value.split(" ");
    let mensajeEncriptado = "";
    mensaje.forEach(element => {
      const palabra = element;
      let palabraEncriptada = "";
      for(let i = 0; i < palabra.length; i++){
      const caracter = palabra.charAt([i]);
      if(caracter === "e"){
        palabraEncriptada = palabraEncriptada + caracter + "nter";
      } 
      else if(caracter === "i"){
        palabraEncriptada = palabraEncriptada + caracter + "mes";
      }
      else if(caracter === "a"){
        palabraEncriptada = palabraEncriptada + caracter + "i";
      }
      else if(caracter === "o"){
        palabraEncriptada = palabraEncriptada + caracter + "ber";
      }
      else if(caracter === "u"){
        palabraEncriptada = palabraEncriptada + caracter + "fat";
      }else {
        palabraEncriptada = palabraEncriptada + caracter;
      }
      }
      mensajeEncriptado = mensajeEncriptado + " " + palabraEncriptada;
    });
    mensajeAEncriptar.innerText = mensajeEncriptado;
}

function tieneContenido(){
  if(input.value){
    return true;
  } else {
    return false;
  }
}

botonEncriptar.addEventListener("click", function(){
  if(tieneContenido()){
    modificarElementos();
    encriptarMensaje();
  }
})

botonCopiar.addEventListener("click", function(){
  // toDo: Investigar y aplicar método ExecCommand
})

// sinMensaje.classList.add("hidden");
// Si value de input no está vacío. Copiar ese contenido y colocarlo como texto en 
// el "p" de output-container
// modificar css del nuevo p para que su texto no esté alineado al centro
