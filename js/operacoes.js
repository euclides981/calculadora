function multiplicar() {

    contaPonto = 0

    if (valor1.value != '' & valor2.value != '') {

        var primeiroValorFloat = parseFloat(valor1.value)
        var segundoValorFloat = parseFloat(valor2.value)
        
        if(operador == 0) {
            valor2.value = primeiroValorFloat
            valor1.value = ''
        }
        else {
            valor2.value = `${segundoValorFloat*primeiroValorFloat}`
            valor1.value = ''
        }
    }
    else if (valor1.value != '' ){
        valor2.value = valor1.value
        valor1.value = ''
    }
    limitaCaracter()
}

function divisao() {

    contaPonto = 0

    if (valor1.value != '' & valor2.value != '') {

        var primeiroValorFloat = parseFloat(valor1.value)
        var segundoValorFloat = parseFloat(valor2.value)
        
        if(operador == 0) {
            valor2.value = primeiroValorFloat
            valor1.value = ''
        }
        else {
            valor2.value = `${segundoValorFloat/primeiroValorFloat}`
            valor1.value = ''
        }
    }
    else if (valor1.value != '' ){
        valor2.value = valor1.value
        valor1.value = ''
    }
    limitaCaracter()
}

function somar() {

    contaPonto = 0
    
    if (valor1.value != '' & valor2.value != '') {

        var primeiroValorFloat = parseFloat(valor1.value)
        var segundoValorFloat = parseFloat(valor2.value)

        if(operador == 0) {
            valor2.value = primeiroValorFloat
            valor1.value = ''
        }
        else {
            valor2.value = `${segundoValorFloat+primeiroValorFloat}`
            valor1.value = ''
        }
    }
    else if (valor1.value != '' ){
        valor2.value = valor1.value
        valor1.value = ''
    }
    limitaCaracter()
}

function subtrair() {

    contaPonto = 0

    if (valor1.value != '' & valor2.value != '') {

        var primeiroValorFloat = parseFloat(valor1.value)
        var segundoValorFloat = parseFloat(valor2.value)
        
        if(operador == 0) {
            valor2.value = primeiroValorFloat
            valor1.value = ''
        }
        else {
            valor2.value = `${segundoValorFloat-primeiroValorFloat}`
            valor1.value = ''
        }
    }
    else if (valor1.value != '' ){
        valor2.value = valor1.value
        valor1.value = ''
    }
    limitaCaracter()
}