
// tercer ejercicio

function verificarPassword() {
    let valorSelect1 = document.getElementById("select1").value;
    let valorSelect2 = document.getElementById("select2").value;
    let valorSelect3 = document.getElementById("select3").value;
    
    let password = valorSelect1 + valorSelect2 + valorSelect3;
    let resultadoParrafo = document.getElementById("resultado2");
    
    if (password === "911") {
        resultadoParrafo.textContent = "Password 1 correcto";
    } else if (password === "714") {
        resultadoParrafo.textContent = "Password 2 es correcto";
    } else {
        resultadoParrafo.textContent = "Password incorrecto";
    }
}