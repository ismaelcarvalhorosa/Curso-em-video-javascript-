function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passos')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('Opes ! 😕 [Erro!] verifique os dados ')
        res.innerHTML = 'Impossível contar! '
    }else{
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

       if (p == 0){
           alert('0 não conta meu filho!')
           p = 1
       }
       if(i < f){
        // Contagem normal
        for(c = i; c <= f; c += p){
            res.innerHTML += `👉 ${c}`
        }
       }else{
        // Contagem regreciva
        for(c = i; c >= f; c -= p){
            res.innerHTML += `👉 ${c}`
        }
       }
        res.innerHTML += `\u{1f3c1}`
    }
}