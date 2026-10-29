var r = document.getElementById('resp')
var ver = document.getElementById('clicar')
var opA = document.getElementById('opcaoA')
var opB = document.getElementById('opcaoB')




ver.addEventListener('click', Verificar)
function Verificar(){
    if (opA.checked){
        r.innerHTML = 'Voce e uma menina!'
    } else if (opB.checked){
        r.innerHTML = 'Voce e um menino!'
    }else {
        alert('Error, selecione uma opcao!')
    }
}

var rest = document.getElementById('resetar')

rest.addEventListener('click', reset)
function reset(){
    r.innerHTML = ''
    opA.checked = false
    opB.checked = false
}



var cl = document.getElementById('claro')
var es = document.getElementById('escuro')
var altema = document.getElementById('aplicar')

altema.addEventListener('click', alterartema)

function alterartema(){
    if(cl.checked){
        document.body.style.backgroundColor = '#ffee00'
    } else if (es.checked){
        document.body.style.backgroundColor = 'black'
    }
}