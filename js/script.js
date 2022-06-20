var valor1 = document.querySelector('#primeiroValor')
var valor2 = document.querySelector('#segundoValor')
var dividir = document.getElementById('dividir')
var operador = document.getElementById('sinal')
var vezes = document.getElementById('vezes')
var ponto = document.getElementById('ponto')
var menos = document.getElementById('menos')
var igual = document.getElementById('igual')
var mais = document.getElementById('mais')
var del_dois = document.getElementById('del_campo_dois')
var del_um = document.getElementById('del_campo_um')
var del = document.getElementById('del_tudo')
var n0 = document.getElementById('v0')
var n1 = document.getElementById('v1')
var n2 = document.getElementById('v2')
var n3 = document.getElementById('v3')
var n4 = document.getElementById('v4')
var n5 = document.getElementById('v5')
var n6 = document.getElementById('v6')
var n7 = document.getElementById('v7')
var n8 = document.getElementById('v8')
var n9 = document.getElementById('v9')

operador = 0

del.addEventListener('click', () => {
    valor1.value = ''
    valor2.value = ''
})
del_um.addEventListener('click', () => {
    valor1.value = ''
})
del_dois.addEventListener('click', () => {
    valor2.value = ''
})
vezes.addEventListener('click', () => {
    operador = 1
})
dividir.addEventListener('click', () => {
    operador = 2
})
mais.addEventListener('click', () => {
    operador = 3
})
menos.addEventListener('click', () => {
    operador = 4
})

function resultado() {
    
    contaPonto = 0
    
    if (valor1.value != '' & valor2.value != '') {

        var primeiroValorFloat = parseFloat(valor1.value)
        var segundoValorFloat = parseFloat(valor2.value)

        if (operador == '' ) {
            valor2.value = ''
        }
        else if (operador == 1 ) {
            valor2.value = segundoValorFloat*primeiroValorFloat
            valor1.value = ''
        }
        else if (operador == 2) {
            valor2.value = segundoValorFloat/primeiroValorFloat
            valor1.value = ''
        }

        else if (operador == 3 ) {
            valor2.value = primeiroValorFloat+segundoValorFloat
            valor1.value = ''
        }    
        else if (operador == 4 ) {
            valor2.value = segundoValorFloat-primeiroValorFloat
            valor1.value = ''
        }
    }
    limitaCaracter()
}

function limitaCaracter() {
    if(valor2.value.length > 14) {
        valor2.value = valor2.value.substring(0,14)
    }   
}