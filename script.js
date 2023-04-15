let dadosFazendeiro = {
    Valorclick: 1, saldo: 0, moedaPorSegundo: 0
}

let valoresAnimais = {
    valorCavalo: 10, valorGalinha: 150, valorPato: 300, valorPorco: 500, valorOvelha: 1000, valorVaca: 1500
}

let animais = {
    cavalo: 0, galinha: 0, pato: 0, porco: 0, ovelha: 0, vaca: 0
}

function moedaClick() {
    dadosFazendeiro.saldo += dadosFazendeiro.Valorclick
    document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
}

setInterval(moedasPorSegundo, 1000)

function comprarAnimals(acao) {
    if (acao == 'cavalo') {
        if (dadosFazendeiro.saldo >= valoresAnimais.valorCavalo) {
            dadosFazendeiro.saldo -= valoresAnimais.valorCavalo
            dadosFazendeiro.Valorclick += 1
            valoresAnimais.valorCavalo *= 2
            animais.cavalo += 1
            document.getElementById('quantidadeCavalo').innerHTML = `CAVALO: ${animais.cavalo}`
            document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
            document.getElementById('valorCavalo').innerHTML = `Cada unidade custa: ${valoresAnimais.valorCavalo} moedas`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${dadosFazendeiro.Valorclick}`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'galinha') {
        if (dadosFazendeiro.saldo >= valoresAnimais.valorGalinha) {
            dadosFazendeiro.saldo -= valoresAnimais.valorGalinha
            valoresAnimais.valorGalinha *= 2
            animais.galinha += 1
            dadosFazendeiro.moedaPorSegundo += 1
            document.getElementById('quantidadeGalinha').innerHTML = `GALINHA: ${animais.galinha}`
            document.getElementById('valorGalinha').innerHTML = `Cada unidade custa: ${valoresAnimais.valorGalinha} moedas`
            document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${dadosFazendeiro.moedaPorSegundo}`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'pato') {
        if (dadosFazendeiro.saldo >= valoresAnimais.valorPato) {
            dadosFazendeiro.saldo -= valoresAnimais.valorPato
            dadosFazendeiro.saldo *= 2
            dadosFazendeiro.Valorclick += 2
            animais.pato += 1
            dadosFazendeiro.moedaPorSegundo += 1
            valoresAnimais.valorPato *= 2
            document.getElementById('quantidadePato').innerHTML = `PATO: ${animais.pato}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${dadosFazendeiro.Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${dadosFazendeiro.moedaPorSegundo}`
            document.getElementById('valorPato').innerHTML = `Cada unidade custa: ${valoresAnimais.valorPato} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'porco') {
        if (dadosFazendeiro.saldo >= valoresAnimais.valorPorco) {
            dadosFazendeiro.saldo -= valoresAnimais.valorPorco
            dadosFazendeiro.saldo *= 2
            dadosFazendeiro.Valorclick += 2
            animais.porco += 1
            dadosFazendeiro.moedaPorSegundo += 5
            valoresAnimais.valorPorco *= 2
            document.getElementById('quantidadePorco').innerHTML = `PORCO: ${animais.porco}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${dadosFazendeiro.Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${dadosFazendeiro.moedaPorSegundo}`
            document.getElementById('valorPorco').innerHTML = `Cada unidade custa: ${valoresAnimais.valorPorco} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'ovelha') {
        if (dadosFazendeiro.saldo >= valoresAnimais.valorOvelha) {
            dadosFazendeiro.saldo -= valoresAnimais.valorOvelha
            dadosFazendeiro.Valorclick += 20
            animais.ovelha += 1
            dadosFazendeiro.moedaPorSegundo *= 2
            valoresAnimais.valorOvelha *= 2
            document.getElementById('quantidadeOvelha').innerHTML = `OVELHA: ${animais.ovelha}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${dadosFazendeiro.Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${dadosFazendeiro.moedaPorSegundo}`
            document.getElementById('valorOvelha').innerHTML = `Cada unidade custa: ${valoresAnimais.valorOvelha} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'vaca') {
        if (dadosFazendeiro.saldo >= valoresAnimais.valorVaca) {
            dadosFazendeiro.saldo -= valoresAnimais.valorVaca
            dadosFazendeiro.Valorclick *= 2
            animais.vaca += 1
            dadosFazendeiro.moedaPorSegundo *= 3
            valoresAnimais.valorVaca *= 2
            document.getElementById('quantidadeVaca').innerHTML = `VACA: ${animais.vaca}`
            document.getElementById('moedaPorClick').innerHTML = `Moeda por click: ${dadosFazendeiro.Valorclick}`
            document.getElementById('saldo').innerHTML = `Saldo: ${dadosFazendeiro.saldo}`
            document.getElementById('moedaPorSegundo').innerHTML = `Moeda por segundo: ${dadosFazendeiro.moedaPorSegundo}`
            document.getElementById('valorVaca').innerHTML = `Cada unidade custa: ${valoresAnimais.valorVaca} moedas`
        } else {
            alert('Dinheiro insuficiente')
        }
    }
}

function moedasPorSegundo() {
    dadosFazendeiro.saldo += dadosFazendeiro.moedaPorSegundo
    document.getElementById('saldo').innerHTML = `<p>Saldo: ${dadosFazendeiro.saldo}</p>`
}
