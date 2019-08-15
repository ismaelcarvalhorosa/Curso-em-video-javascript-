var num = document.getElementById('numt')
var lista = document.getElementById('formu')
let res = document.getElementById('res')
var vetor = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !isLista(num.value, vetor)){
        var item = document.createElement('option')
        vetor.push(Number(num.value))
        item.text = `◽  ${num.value}`
        res.appendChild(item)
       // alert('teste' + vetor)
    }else{
        // alert('Opa deu [erro] Verifique os datos 😕')
        M.toast({html: 'Opa deu [erro] Verifique os datos 😕'})
    }
    num.value = ''
    num.focus()
    retorno.innerHTML = ''
}

function calcular(){
    if(vetor.length == 0 ){
        // alert('Calcular o que meu filho? 🤔')
        M.toast({html: 'Calcular o que meu filho? 🤔'})
    }else{
        let tot = vetor.length
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0

        for(var pos in vetor){
            soma += vetor[pos]

            if(vetor[pos] > maior){
                maior = vetor[pos]
            }
            if(vetor[pos] < menor ){
                menor = vetor[pos]
            }
        }
        var madia = soma / tot
        retorno.innerHTML = ''
        retorno.innerHTML = `<p> Total de itens adicionados:${tot} </p>`
        retorno.innerHTML += `<p> Maior número: ${maior}</p>`
        retorno.innerHTML += `<p> Menor núemro: ${menor} </p>`
        retorno.innerHTML += `<p> A soma de todos os valores é :${soma} </p>`
        retorno.innerHTML += `<p> A madia de todos os valores é :${media}</p>`
    }
}