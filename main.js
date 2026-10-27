const escolhido = document.querySelector("#numero");
const btn = document.querySelector("#botao")

let aleatorio = Math.floor(Math.random() * 5);

btn.onclick = function() {
    
    let alt = Number(escolhido.value);

    if (alt === aleatorio) {
        alert("Você acertou!");
    } else {
        escolhido.value = " "
        escolhido.placeholder = "Tente novamente";
    }
}