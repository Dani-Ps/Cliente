const Baraja = [[],[],[],[]];

function Carta(palo, valor) {
    this.palo = palo;
    this.valor = valor;

}

function darValor(palo, valor) {
    let carta;
    if (palo > 1 && palo < 4 && valor > 1 && valor < 10) {
        carta = new Carta(palo, valor);
    }
    return carta;

}

function toString(carta) {
    const Palo = carta.palo;
    const Valor = carta.valor;
    let mensajePalo;
    let mensajeValor;
    let mensaje;

    switch (Palo) {
        case 1:
            mensajePalo = " de Oros."
            break;
        case 2:
            mensajePalo = " de Copas"
            break;
        case 3:
            mensajePalo = " de Espadas"
            break;
        case 4:
            mensajePalo = " de Bastos";
            break;
        default:
            alert("Error ha habido algún problema con el palo");
            break;
    }

    switch (Valor) {
        case 1:
            mensajeValor = "1"
            break;
        case 2:
            mensajeValor = "2"
            break;
        case 3:
            mensajeValor = "3"
            break;
        case 4:
            mensajeValor = "4"
            break;
        case 5:
            mensajeValor = "5"
            break;
        case 6:
            mensajeValor = "6"
            break;
        case 7:
            mensajeValor = "7"
            break;
        case 8:
            mensajeValor = "8"
            break;
        case 9:
            mensajeValor = "9"
            break;
        case 10:
            mensajeValor = "10"
            break;

        default:
            alert("Error ha habido algún problema con el palo");
            break;
    }
    
 return  mensaje = mensajeValor+mensajePalo;

}

function generarBaraja(Baraja) {
    
    for (let i = 0; i < 4; i++) {
        Baraja[index] = [];
        while (Baraja[index].length < 10) {
            let numero ;
            do {
                for (let j = 1; j < 10; j++) {
                    numero = j;
                }
            } while (Baraja.some((fila => fila.includes(numero))));
            Baraja[index].push(numero);
        }
    }
    return Baraja;
}

function barajar() {
    Baraja = generarBaraja(Baraja);

    Baraja.array.forEach(element => {
        let numero;
        for (let index = 0; index < element.length; index++) {
            numero = Math.floor(Math.random()* (10-1)+1);
            if(element[index]!= numero){
                element[index]= numero           
             }
            
        }

        for (let index = 0; index < Baraja.length; index++) {
            let numero;
            numero = Math.floor(Math.random()* (4-1)+1);
            if (Baraja[index]!= numero) {
                Baraja[index]= numero           

            }
        }
        
    });

    return Baraja;
}


