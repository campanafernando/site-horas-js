function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   
    if (hora >= 0 && hora < 12){
        img.src = 'matinapng.png'
        document.body.style.background = '#ec2cd9f'
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'tardepng.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
    }
    else{
        img.src = 'noitepng.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
    }
}
