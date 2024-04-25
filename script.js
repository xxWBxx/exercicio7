function numeroInvertido(numero) {
    const numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    console.log(numeroInvertido);
}

const numero = parseInt(prompt("Digite um número: "));
numeroInvertido(numero);