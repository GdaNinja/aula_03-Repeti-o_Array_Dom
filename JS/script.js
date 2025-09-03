function contadorFor() {

    let numero, mensagem = "Contagem for \n";

    numero = parseInt(prompt("Digite um número"));
    for (let index = numero; index <= 500; index++) {
        if (index % 2 === 0) {
            mensagem += index + " é par \n"
        }
        else {
            mensagem += index + " é ímpar \n"
        }
    }
    console.log(`${mensagem}`);
}
function contadorWhile() {
    let numero, mensagem = "Contagem while \n", contador;
    numero = parseInt(prompt("Digite um número"));
    contador = numero;
    while (contador <= 500) {

        if (contador % 2 === 0) {
            mensagem += contador + " é par \n"
        }
        else {
            mensagem += contador + " é ímpar \n"
        }
        contador++;
    }
    console.log(`${mensagem}`);
}
function contadorDoWhile() {
    let numero, mensagem = "Contagem do while \n", contador;
    numero = parseInt(prompt("Digite um número"));
    contador = numero;
    do {
        if (contador % 2 === 0) {
            mensagem += contador + " é par \n"
        }
        else {
            mensagem += contador + " é ímpar \n"
        }
        contador++;
    } while (contador <= 500);
    console.log(`${mensagem}`);
}
function Tabuada() {
    let numero, mensagem, resultado, escolhaNumero, escolha, index = 1;
    escolha = true;

    while (escolha === true) {
        numero = parseInt(prompt("Digite um número para a tabuada"));
        index = 1;
        mensagem = "";
        while (index <= 10) {
            resultado = numero * index;
            mensagem += `${numero} X ${index} = ${resultado} \n`;
            index++;
        }

        alert(mensagem);
        if (escolha === true) {
            escolhaNumero = parseInt(prompt("Digite 1 para refazer a conta, digite 2 para sair"));

            while (escolhaNumero != 1 && escolhaNumero != 2) {
                escolhaNumero = parseInt(prompt("Não irá funcionar, tente novamente"));
            }
            if (escolhaNumero === 1) {
                escolha = true;
                alert("A tabuada recomeçou");
            }
            else {
                escolha = false;
                alert("A brincadeira acabou");
            }
        }

        // Não funcionou o que está abaixo

        // for (let index = 1; index <= 10; index++) {

        //     if (index != 10) {
        //         resultado = numero * index;
        //         mensagem += `${numero} X ${index} = ${resultado} \n`;

        //     }
        //     else {
        //         mensagem += `${numero} X ${index} = ${resultado} \n`;
        //         escolhaNumero = parseInt(prompt("Digite 1 para refazer a conta, digite 2 para sair"));

        //         while (escolhaNumero != 1 && escolhaNumero != 2) {
        //             escolhaNumero = parseInt(prompt("Não irá funcionar, tente novamente"));
        //         }
        //         if (escolhaNumero === 1) {
        //             escolha = true;
        //             alert("A tabuada recomeçou");
        //         }
        //         else {
        //             escolha = false;
        //             alert("A brincadeira acabou");
        //         }
        //     }
        // }

    }

}
function Contagem() {
    let primeiroNumero, segundoNumero, mensagem = "";
    primeiroNumero = parseInt(prompt("Farei uma contagem crescente do primeiro ao segundo número, digite um número"));
    segundoNumero = parseInt(prompt("Digite o segundo número, sendo ele maior que o primeiro"));

    while (primeiroNumero >= segundoNumero) {
        segundoNumero = parseInt(prompt("Não vai funcionar burlar meus sistemas, digite o segundo novamente"));
    }
    for (let index = primeiroNumero; index <= segundoNumero; index++) {
        if (index === primeiroNumero) {
            mensagem += index + " - Início \n"
        }
        else if (index === segundoNumero) {
            mensagem += index + " - Fim \n"

        }
        else {
            mensagem += index + "\n";
        }
    }
    alert(mensagem);
}