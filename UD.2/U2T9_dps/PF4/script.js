(function () {
    let status = false;
    const chain = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const chainArray = chain.split('');
    while (!status) {
        const response = prompt('Introduce los numeros de su DNI');
        if (response == null) {
            alert('Wrong answer, try again');
        } else {
            if (!isNaN(response)) {
                let number = parseInt(response);
                let result = chainArray[number % 23];
                alert(`La letra de tu DNI es:\n- ${result}`);
                status = true;
            }
        }
    }
})();
