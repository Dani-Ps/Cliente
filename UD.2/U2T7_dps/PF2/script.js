const username = () => prompt(`Type your username `);
const password = () => prompt(`Type yout password: `);

function validateUserName() {
    let sucess = false;
    let aux = username();
    if (aux === '' || !isNaN) {
        alert('Username is not valid, try again.');
        validateUserName();
    }
}
function validatePassword() {
    let aux = password();
    if (aux !== 'MeGustaProgramar') {
        alert('Password is not valid, try again.');
        validatePassword();
    }
}

(function () {
    validateUserName();
    validatePassword();
    alert('Data has been stored correctly.');
})();
