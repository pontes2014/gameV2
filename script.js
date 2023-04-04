let Valorclick = 1
let saldo = 0
let moedaPorSegundo = 0
let valorCavalo = 10
let valorGalinha = 150
let valorPato = 300
let valorPorco = 500
let valorOvelha = 1000
let valorVaca = 1500
let quantidadeCavalo = 0
let quantidadeGalinha = 0
let quantidadePato = 0
let quantidadePorco = 0
let quantidadeOvelha = 0
let quantidadeVaca = 0



function moedaClick() {
    saldo += Valorclick
    document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
}

setInterval(moedasPorSegundo, 1000)

function comprarAnimals(acao) {
    if (acao == 'cavalo') {
        if (saldo >= valorCavalo) {
            saldo -= valorCavalo
            Valorclick += 1
            valorCavalo *= 2
            quantidadeCavalo += 1
            document.getElementById('quantidadeCavalo').innerHTML = `CAVALO: ${quantidadeCavalo}`
            document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
            document.getElementById('valorCavalo').innerHTML = `Cada unidade custa: ${valorCavalo} moedas`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${Valorclick}`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'galinha') {
        if (saldo >= valorGalinha) {
            saldo -= valorGalinha
            valorGalinha *= 2
            quantidadeGalinha += 1
            moedaPorSegundo += 1
            document.getElementById('quantidadeGalinha').innerHTML = `GALINHA: ${quantidadeGalinha}`
            document.getElementById('valorGalinha').innerHTML = `Cada unidade custa: ${valorGalinha} moedas`
            document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${moedaPorSegundo}`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'pato') {
        if (saldo >= valorPato) {
            saldo -= valorPato
            saldo *= 2
            Valorclick += 2
            quantidadePato += 1
            moedaPorSegundo += 1
            valorPato *= 2
            document.getElementById('quantidadePato').innerHTML = `PATO: ${quantidadePato}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${moedaPorSegundo}`
            document.getElementById('valorPato').innerHTML = `Cada unidade custa: ${valorPato} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'porco') {
        if (saldo >= valorPorco) {
            saldo -= valorPorco
            saldo *= 2
            Valorclick += 2
            quantidadePorco += 1
            moedaPorSegundo += 5
            valorPorco *= 2
            document.getElementById('quantidadePorco').innerHTML = `PORCO: ${quantidadePorco}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${moedaPorSegundo}`
            document.getElementById('valorPorco').innerHTML = `Cada unidade custa: ${valorPorco} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'ovelha') {
        if (saldo >= valorOvelha) {
            saldo -= valorOvelha
            Valorclick += 20
            quantidadeOvelha += 1
            moedaPorSegundo *= 2
            valorOvelha *= 2
            document.getElementById('quantidadeOvelha').innerHTML = `OVELHA: ${quantidadeOvelha}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${moedaPorSegundo}`
            document.getElementById('valorOvelha').innerHTML = `Cada unidade custa: ${valorOvelha} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'vaca') {
        if (saldo >= valorVaca) {
            saldo -= valorVaca
            Valorclick *= 2
            quantidadeVaca += 1
            moedaPorSegundo *= 3
            valorVaca *= 2
            document.getElementById('quantidadeVaca').innerHTML = `VACA: ${quantidadeVaca}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${moedaPorSegundo}`
            document.getElementById('valorVaca').innerHTML = `Cada unidade custa: ${valorVaca} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    }
}

function moedasPorSegundo() {
    saldo += moedaPorSegundo
    document.getElementById('saldo').innerHTML = `<p>Saldo: ${saldo}</p>`
}
