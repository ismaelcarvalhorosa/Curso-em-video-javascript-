function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são  ${hora} 🕒 `
    if (hora >= 0 && hora < 12){
        // Manha 
        img.src = 'imagem/manha.jpg'
        document.body.style.background = '#0077e8'
    }else if (hora >= 12 && hora < 18){
        // Tarde 
        img.src = 'imagem/dia.jpg'
        document.body.style.background = '#926004'
    }else{
        // Noite
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#06294f'
    }

}


