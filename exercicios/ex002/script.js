function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert("ERRO! Verifique se os campos foram preenchidos corretamente e depois tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked) {
            genero = "Masculino"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute("src", "bebemenino.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "jovemhomem.png")
            } else if (idade < 59) {
                // Adulto
                img.setAttribute("src", "adultohomem.png")
            } else {
                // Idoso
                img.setAttribute("src", "senhorhomen.png")
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute("src", "bebemenina.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "jovemmulher.png")
            } else if (idade < 59) {
                // Adulto
                img.setAttribute("src", "adultomulher.png")
            } else {
                // Idoso
                img.setAttribute("src", "senhoramulher.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectado: ${genero} com ${idade} ano(s) de idade.`
        res.appendChild(img)
    }
    
}
