document.getElementById("send").addEventListener('click', sendForm);

function sendForm() {

    const data = {
        name: document.getElementById("name").value,
        passwd: document.getElementById("passwd").value
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => {
            const resultDiv = document.getElementById('result');
            resultDiv.className = "result ";
            resultDiv.innerHTML = `ID asignado: ${json.id}<br/> Nombre: ${json.name}<br/> Passwd: ${json.passwd}`;
        })
        .catch(error => {
            console.error('Error:', error);
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'Ha ocurrido un error. Por favor, inténtalo de nuevo.';
        });
}

/**
 * Daniel Perez Serrano
 */