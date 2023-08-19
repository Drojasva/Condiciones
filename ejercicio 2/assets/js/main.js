
// Segundo ejercicio 

function calcularStickers() {
    const cantidadSticker1 = parseInt(document.getElementById("sticker1Input").value) || 0;
    const cantidadSticker2 = parseInt(document.getElementById("sticker2Input").value) || 0;
    const cantidadSticker3 = parseInt(document.getElementById("sticker3Input").value) || 0;
    
    let totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;
    let resultadoParrafo = document.getElementById("resultado");


    // para ue no puedan poner numeros negativos 
    if (cantidadSticker1 < 0 || cantidadSticker2 < 0 || cantidadSticker3 < 0) {
        alert("Ingresa cantidades válidas para los stickers (no negativas).");
        return; // Detener la ejecución si se ingresan valores negativos
    }
    
    if (totalStickers <= 10) {
        resultadoParrafo.textContent = "Llevas " + totalStickers + " stickers";
    } else {
        resultadoParrafo.textContent = "Llevas demasiados stickers";
    }
}
