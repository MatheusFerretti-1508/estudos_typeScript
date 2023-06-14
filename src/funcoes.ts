const calculaArea = (base: number, altura: number): number =>  base * altura;

function somar(...numeros: number[]) {
    // numeros.reduce();
    console.log(numeros);
}

function teste(): number | string {
    if (10 > 5) {
        return 'Dez maior que cinco'
    } else {
        return 5
    }
}

const ResultadoDeTeste = teste();
