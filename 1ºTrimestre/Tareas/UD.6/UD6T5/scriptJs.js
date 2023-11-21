let rows = document.querySelectorAll("tr");

function mouseEntrar() {
    let celda = this.children;
    for (const item of celda) {
        item.style.backgroundColor = 'red';
    }
}

function mouseSalir() {
    let celda = this.children;
    for (const item of celda) {
        item.style.backgroundColor = 'white';
    }
}

for (const item of rows) {
    item.addEventListener("mouseenter", mouseEntrar);
    item.addEventListener("mouseleave", mouseSalir);
}


