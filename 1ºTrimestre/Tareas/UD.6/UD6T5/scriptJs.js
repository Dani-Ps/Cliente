// VARIABLES
let rows = document.querySelectorAll("tr");

for (let i = 1; i < rows.length; i++) {
    rows[i].addEventListener("mouseleave", function () {
        let cells = rows[i].children;
        for (const item of cells) {
            item.style.backgroundColor = 'white';
        }

    });
}

for (let i = 1; i < rows.length; i++) {
    rows[i].addEventListener("mouseenter", function () {

        let cells = rows[i].children;
        for (const item of cells) {
            item.style.backgroundColor = 'red';
        }

    });
}
