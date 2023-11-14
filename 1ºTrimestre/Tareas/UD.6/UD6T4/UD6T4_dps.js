let buttons = document.getElementsByTagName("button");
let texto = document.querySelector("h1");

function llamada(index) {
    if (index == 0) {
        texto.style.color = "red";
    } else if (index == 1) {
        texto.style.color = "yellow";
    } else {
        texto.style.color = "green";
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        llamada(i);
    });
}