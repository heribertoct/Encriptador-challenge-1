var btnencriptar = document.querySelector(".btn-encriptar");
var btndesencriptar = document.querySelector(".btn-desencriptar");
var munheco = document.querySelector(".munheco");
var mensaje = document.querySelector(".mensaje");
var texto = document.querySelector(".texto");
var mensajeresultado = document.querySelector(".mensaje-resultado");
var btncopiar = document.querySelector(".btn-copiar"); 
var encriptardes = document.querySelector(".encriptar-desencriptar");
var pegar = document.querySelector(".text-area");

btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.addEventListener("click", copyText);


function encriptar(){
    ocultarDerecha();
    var textorecuperado = recuperarTexto();
    mensajeresultado.textContent = encriptartexto(textorecuperado);
    encriptardes.textContent = "Mensaje encriptado: "
}

function desencriptar(){
    ocultarDerecha();
    var textorecuperado = recuperarTexto();
    mensajeresultado.textContent = desencriptartexto(textorecuperado);
    encriptardes.textContent = "Mensaje desencriptado: "
}

function recuperarTexto(){
    var texarea = document.querySelector(".text-area")
    return texarea.value;
}


function ocultarDerecha(){
    munheco.classList.add("ocultar");
    mensaje.classList.add("ocultar");
    texto.classList.add("ocultar");
}

function encriptartexto(texto){
    var mensaje = texto;
    var textoresultado = "";

    for(var i=0; i<mensaje.length; i++){
        if(mensaje[i] == "a"){
            textoresultado = textoresultado + "ai"
        }
        else if(mensaje[i] == "e"){
            textoresultado = textoresultado + "enter"
        }
        else if(mensaje[i] == "i"){
            textoresultado = textoresultado + "imes"
        }
        else if(mensaje[i] == "o"){
            textoresultado = textoresultado + "ober"
        }
        else if(mensaje[i] == "u"){
            textoresultado = textoresultado + "ufat"
        }

        else {
            textoresultado = textoresultado + mensaje[i];
        }
    }

    return textoresultado;
}

function desencriptartexto(texto){
    var mensaje = texto;
    var textoresultado = "";

    for(var i=0; i<mensaje.length; i++){
        if(mensaje[i] == "a"){
            textoresultado = textoresultado + "a"
            i = i+1;
        }
        else if(mensaje[i] == "e"){
            textoresultado = textoresultado + "e"
            i= i+4;
        }
        else if(mensaje[i] == "i"){
            textoresultado = textoresultado + "i"
            i=i+3;
        }
        else if(mensaje[i] == "o"){
            textoresultado = textoresultado + "o"
            i=i+3;
        }
        else if(mensaje[i] == "u"){
            textoresultado = textoresultado + "u"
            i=i+3;
        }

        else {
            textoresultado = textoresultado + mensaje[i];
        }
    }

    return textoresultado;
}

function mostrarDerecha(){
    munheco.classList.add("mostrar");
    mensaje.classList.add("mostrar");
    texto.classList.add("mostrar");
}

function copyText(){
    navigator.clipboard.writeText(mensajeresultado.innerText);
    alert("Copiado en portapapeles")
    pegar.value = mensajeresultado.innerText;
    mensajeresultado.textContent = "";
    encriptardes.textContent = "";
    mostrarDerecha();
  }