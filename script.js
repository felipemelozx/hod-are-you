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
        if (fsex[0].checked){
            genero = 'male'
        } else {
            genero = 'woman'
           
        }
        res.innerHTML = `we detect a ${genero} age ${idade}`
    }
}