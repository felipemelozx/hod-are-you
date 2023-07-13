function check() {
    var data = new Date();
    var year = data.getFullYear();
    var fano = document.querySelector('.text');
    var res = document.querySelector('.result');

    if (fano.value.length === 0 || Number(fano.value) > year) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = year - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'male'
            if (idade >= 0 && idade < 10) {
                //crianca
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto    
            } else {
                //idoso
            }

        } else {
            genero = 'woman'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', '../image/bebe-w.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../image/jovem-w.jpg')

            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }


        }

        res.innerHTML = `we detect a ${genero} age ${idade}`
        res.appendChild(img)
    }
}