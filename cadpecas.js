let listaQtdPecas = 10;
let peso = 50;
let nomePeca = "pneu";

if (peso >= 100) {
     console.log ("Peso da peca possui requisitos para cadastrar");
    } else {
        console.log ("Peso insuficiente - nao pode cadastrar");
    }

    if (listaQtdPecas >= 10) {
        console.log ("nao ha capacidade na Lista: Caixa Lotada!!!");
        }

    if (nomePeca.length < 3) {
        console.log ("Nome invalido para o cadastro da peca: precisa conter pelo menos 3 caracteres" ) ;
        }