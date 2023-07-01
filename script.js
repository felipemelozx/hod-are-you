function check() {
    var data = new Date();
    var year = data.getFullYear();
    var fano = document.querySelector('.text');
    var ress = document.querySelector('.result');

    if (fano.value.length === 0 || fano.value > year) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        alert('Tudo ok');
    }
}