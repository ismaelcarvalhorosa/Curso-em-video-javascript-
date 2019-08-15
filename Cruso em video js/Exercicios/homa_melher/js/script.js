function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('Opa ! Deu [Erro !] verifique de novo ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = '👔 Home'
            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', 'imagem/bebe.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovem.jpg')
            }else if(idade < 50){
                //aduto
                img.setAttribute('src', 'imagem/adulto.jpg')
            }else if(idade < 200){
                // idoso
                img.setAttribute('src', 'imagem/velho.jpg')
            }else{
                img.setAttribute('src', 'imagem/caveira.jpg')
            }
        }else{
            genero = '👗 Ela'
            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', 'imagem/bebe')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovemEla.jpg')
            }else if(idade < 50){
                //aduto
                img.setAttribute('src', 'imagem/mulher.jpg')
            }else if(idade < 200){
                // idoso
                img.setAttribute('src', 'imagem/velha.jpg')
            }else{
                img.setAttribute('src', 'imagem/caveira-de-mulher.jpg')
            }
        }
        res.innerHTML = `Resultado: ${genero} de idade : ${idade}`
        res.appendChild(img)
    }
}