let saldoHeroi = saldo (300, 10) 

function saldo (vitoriasJogador, derrotasJogador){
    let saldoHeroi = vitoriasJogador - derrotasJogador
    var rankFerro = "Ferro"
    var rankBronze = "Bronze"
    var rankPrata = "Prata"
    var rankOuro = "Ouro"
    var rankDiamante = "Diamante"
    var rankLendario = "Lendário"
    var rankImortal = "Imortal"

    if(saldoHeroi <= 9 ){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankFerro )
    }
    if(saldoHeroi >= 11 && saldoHeroi <= 20 ){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankBronze)
    }
    if(saldoHeroi >= 21 && saldoHeroi <= 50 ){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankPrata)
    }
    if(saldoHeroi >= 51 && saldoHeroi <= 80 ){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankOuro)
    }
    if(saldoHeroi >= 81 && saldoHeroi <= 90 ){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankDiamante)
    }
    if(saldoHeroi >= 91 && saldoHeroi <= 100){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankLendario)
    }
    if(saldoHeroi >= 101){
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no Rank " + rankImortal + ", Parabéns, você alcançou o maior Rank !")
    }
    

    
    
}