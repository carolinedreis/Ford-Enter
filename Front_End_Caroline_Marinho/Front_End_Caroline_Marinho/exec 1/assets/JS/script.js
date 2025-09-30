/*
Case sensitive -> diferencia maiuscula e minuscula
por tag: getElementsByTagName()
por id: getElementsById()
por nome: getElementsByName()
por Classe: getElementsClassName()
por Seletor: querySelector()
let preco = Number(document.squerySelector('#preco'))
*/
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')
nome.style.width='100%'
email.style.width='100%'
//window.alert("Olá Mundo!")

function validaNome(){
    let txtNome=document.querySelector('#txtNome')
    if(nome.ariaValueMax.length<3)
    {
        txtNome.innerHTML='Nome Invalido!'
        txtNome.style.color='red'

    }
    else{
txtNome.innerHTML='Nome Valido'
txtNome.style.color='greenyellow'
nomeOK=true

    }
}
