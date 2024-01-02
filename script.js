function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA!!    
        img.src = 'fotomanha.gif'
        document.body.style.background = '#ffbeb3'
    }else if(hora >= 12 && hora < 18){
        // BOA TARDE!!
        img.src = 'fototarde.png'
        document.body.style.background = '#922e15'
    } else {
        // BOA NOITE!!
        msg.innerHTML = `BOA NOITE`
        msg.innerHTML = `Agora são ${hora} horas.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#182f54'
    }
    
}