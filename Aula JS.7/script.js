var r = document.getElementById('resp')

function opcaoA(){
    var fem = document.getElementById('opcaoA')
    r.innerHTML = '<p>Voce e uma menina</p>'
    
}


var c = document.getElementById('clicar')

function soma() {
    var campoData = document.getElementById('idade')
    var res = document.getElementById('som')

    var nascimento = new Date(campoData.value + 'T00:00:00')
    var hoje = new Date()

    var idadeCalculada = hoje.getFullYear() - nascimento.getFullYear()

    if (
        hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() &&
         hoje.getDate() < nascimento.getDate())
    ) {
        idadeCalculada--
    }

    res.textContent = `A sua idade é ${idadeCalculada} anos.`
}

c.addEventListener('click', soma)