
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        // BOM DIA
        img.src = "pexels-diverse-graphics-92519-297954 (1).jpg"
        document.body.style.background = "#8FBC8F"
    }else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = "pexels-lukas-rychvalsky-670735.jpg"
        document.body.style.background = "#FF4500"
    }else {
        //BOA NOITE
        img.src = "pexels-rbrigant44-771883.jpg"
        document.body.style.background = "#9370DB"
    }
}