function soDoze() {
    if(valor1.value.length > 13) {
        valor1.value = valor1.value.substring(0,13)
    }
}

var contaPonto = 0

n0.addEventListener('click',()=>{
valor1.value +=  '0'
}) 
n1.addEventListener('click',()=>{
    valor1.value += '1'
}) 
n2.addEventListener('click',()=>{
    valor1.value += '2'
}) 
n3.addEventListener('click',()=>{
    valor1.value += '3'
}) 
n4.addEventListener('click',()=>{
    valor1.value +=  '4'
}) 
n5.addEventListener('click',()=>{
    valor1.value +=  '5'
}) 
n6.addEventListener('click',()=>{
    valor1.value += '6'
}) 
n7.addEventListener('click',()=>{
    valor1.value += '7'
}) 
n8.addEventListener('click',()=>{
    valor1.value += '8'
}) 
n9.addEventListener('click',()=>{
    valor1.value += '9'
}) 
ponto.addEventListener('click',()=>{
    if(contaPonto == 0) {
        if(valor1.value != '') {
            valor1.value += '.'
            contaPonto = 1
        }
    }
})