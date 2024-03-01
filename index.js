let saldoVitorias = calcularRanking(20,5)

function calcularRanking(qntVitorias, qntDerrotas){
    let saldo = qntVitorias - qntDerrotas

    if (saldo <= 10){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Ferro")
    }else if (saldo > 10 && saldo <= 20){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Bronze")
    }else if (saldo > 21 && saldo <= 50){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Prata")
    }else if (saldo > 51 && saldo <= 80){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Ouro")
    }else if (saldo > 81 && saldo <= 90){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Diamante")
    }else if (saldo > 91 && saldo <= 100){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Lendário")
    }else if (saldo > 100){
        console.log("O Herói tem de saldo de "+saldoVitorias+" e está no nível de Imortal")
    }
}