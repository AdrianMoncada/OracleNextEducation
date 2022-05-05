// Seleccionar H2 "No mensajes encontrados"
const sinMensaje = document.querySelector(".sinMensajes");
const mensajeAEncriptar = document.querySelector(".textoAEncriptar")
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
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

function desencriptarMensaje(){
  const mensaje = input.value;
  let re = [/enter/gi,/imes/gi,/ai/gi,/ober/gi,/ufat/gi];
  let mensajeDesencriptado = mensaje.replace(re[0], 'e').replace(re[1], "i").replace(re[2], "a").replace(re[3], "o").replace(re[4], "u");
  mensajeAEncriptar.innerText = mensajeDesencriptado;
}

botonDesencriptar.addEventListener("click", function(){
  if(tieneContenido()){
    modificarElementos();
    desencriptarMensaje();
  }
})

botonCopiar.addEventListener("click", function(){
  // toDo: Investigar y aplicar método ExecCommand
})

// sinMensaje.classList.add("hidden");
// Si value de input no está vacío. Copiar ese contenido y colocarlo como texto en 
// el "p" de output-container
// modificar css del nuevo p para que su texto no esté alineado al centro
