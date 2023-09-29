/* Função que gera uma senha numérica aleatória
param: qtde de digitos que a senha terá

Exemplo: gerarSenhaNumerica(8)
*/
function gerarSenhaNumerica(qtde){

    let senha = "";
    for(let i = 0; i < qtde; i++){
        let numero = 65 + parseInt(Math.random() * 60); //65 a 124
        senha += String.fromCodePoint
        //Console.log(Senha)
    }
    return senha;
}

function gerarSenhaNumerica(qtde){

    let senha = "";
    for(let i = 0; i < qtde; i++){
        parseInt(Math.random()*10);
        console.log(senha);
        //Console.log(Senha)
    }
    return senha;
}