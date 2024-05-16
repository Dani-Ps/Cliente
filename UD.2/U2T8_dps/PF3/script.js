(function () {
    const normalIng = ['peperoni', 'jamon', 'salmon.'];
    const vegIng = ['pimiento', 'tofu.'];
    const ingredients = [...normalIng].concat(vegIng);
    let status = false;
    while (!status) {
        let choose = '';
        let response = prompt('Choose an option for the pizza: \n- Vegetarian\n- Regular');
        if (response === null) {
            continue;
        }
        if (response.toLowerCase() !== 'vegetarian' && response.toLowerCase() !== 'regular') {
            alert('Wrong answer, try again');
            continue;
        }
        let ok = false;
        while (!ok) {
            if (response.toLowerCase() === 'vegetarian') {
                choose = prompt(`Choose one additional ingredient: \n${vegIng.join(', ')}`);
            }
            if (response.toLowerCase() === 'regular') {
                choose = prompt(`Choose one additional ingredient: \n${normalIng.join(', ')}`);
            }
            if (choose === null) {
                alert('Goodbye.');
                status = true;
                break;
            }
            if (ingredients.includes(choose)) {
                ok = true;
                status = true;
            }
            alert(`Your ${response.toUpperCase()} pizza with:\n- Tomato.\n- Mozzarella.\n- ${choose}.`);
        }
    }
})();