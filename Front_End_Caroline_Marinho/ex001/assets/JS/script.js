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
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
nome.style.width='100%'
email.style.width='100%'
//window.alert("Olá Mundo!")

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'greenyellow'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'greenyellow'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#Assunto')
    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "O assunto deve ter 100 ou menos caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else if (assunto.value.length < 10) {
        txtAssunto.innerHTML = 'O assunto deve ter 10 caracteres ou mais'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.innerHTML = ''
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk==true && emailOk==true && assuntoOk==true) {
        alert("Formulário enviado com sucesso!!!")
    } 
    else 
    {
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}
function mapaZoom(){
    mapa.style.width= '800px'
    mapa.style.height='650px'
}
function mapaNormal (){
    mapa.style.width='500px'
    mapa.style.height='350px'
}