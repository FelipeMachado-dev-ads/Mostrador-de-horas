function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let titulo = window.document.getElementById('titulo')
    let footer = window.document.getElementById('footer')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = './src/img/manha.png'
        document.body.style.backgroundColor = '#fdc060'
        msg.style.color = '#425151'
        titulo.style.color = '#425151'
        footer.style.color = '#425151'

    } else if (hora >= 12 && hora <= 18) {
        img.src = './src/img/tarde.png'
        document.body.style.backgroundColor = '#fef2dd'
        msg.style.color = '#49403c'
        titulo.style.color = '#49403c'
        footer.style.color = '#49403c'

    } else {
        img.src = './src/img/noite.png'
        document.body.style.backgroundColor = '#101d25'
        msg.style.color = '#f2f2f2'
        titulo.style.color = '#f2f2f2'
        footer.style.color = '#f2f2f2'
    }
}
