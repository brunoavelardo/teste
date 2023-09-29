//função armazenada em uma constante
const valor = function(){ //função anônima(sem nome)
    let numero = parseInt(math.random() * 101)
    return numero;
}


//função que recebe i,a frase e a retorna de forma inversa
function inverter(frase){
    let tamanho = frase.length;
    fraseInversa = "";
    for(let i = tamanho; i >= 0;i--){
        fraseInversa =+ frase.charAt(i);
    }
    return fraseInversa;
}

//função que recebe i,a frase e a retorna de forma inversa sem as vogais
function inverter(frase){
    let tamanho = frase.length - 1;
    fraseInversa = "";
    for(let i = tamanho; i >= 0;i--){
        let letra = frase.charAt(i);
        if(!'aeiou'.includes(letra.toLowerCase())){
            fraseInversa += letra;
        }
        
        //if(letra.toUpperCase() != 'A' && letra.toUpperCase() != 'E' &&
        //letra.toUpperCase() != 'I' && letra.toUpperCase() != 'O' &&
        //letra.toUpperCase() != 'U' ){
        //    fraseInversa =+ letra;
        //}
    }
    return fraseInversa;
}