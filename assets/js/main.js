

// Priemer ejercicio


function toggleBorde(elemento) {
    elemento.classList.toggle("con-borde");
}


// Segundo ejercicio 

function calcularStickers() {
    var cantidadSticker1 = parseInt(document.getElementById("sticker1Input").value) || 0;
    var cantidadSticker2 = parseInt(document.getElementById("sticker2Input").value) || 0;
    var cantidadSticker3 = parseInt(document.getElementById("sticker3Input").value) || 0;
    
    var totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;
    var resultadoParrafo = document.getElementById("resultado");
    
    if (totalStickers <= 10) {
        resultadoParrafo.textContent = "Llevas " + totalStickers + " stickers";
    } else {
        resultadoParrafo.textContent = "Llevas demasiados stickers";
    }
}

// tercer ejercicio

function verificarPassword() {
    var valorSelect1 = document.getElementById("select1").value;
    var valorSelect2 = document.getElementById("select2").value;
    var valorSelect3 = document.getElementById("select3").value;
    
    var password = valorSelect1 + valorSelect2 + valorSelect3;
    var resultadoParrafo = document.getElementById("resultado2");
    
    if (password === "911") {
        resultadoParrafo.textContent = "Password 1 correcto";
    } else if (password === "714") {
        resultadoParrafo.textContent = "Password 2 es correcto";
    } else {
        resultadoParrafo.textContent = "Password incorrecto";
    }
}