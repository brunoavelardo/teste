
// função que recebe um array de inteiros e retorna a soma de seus elementos

function somaArray(array){
    let qtdeElementos = arrray.length;
    let total = 0;
    for(let i=0; i<qtdeElementos; i++){
        total += parseInt(array[1]);
    }
    return total;
}

// função que recebe um valor do usuário e o compara com um valor gerado aleatoriamente.
// retorna uma mensagem indicando se o usuário acertou ou não o valor
function verificarSorte(n){
    let num = parseInt(Math.random()*10);
    if(parseInt(n) == num){
        return 'Acertou!!!!!';
    }
    else{
        return
    }
}