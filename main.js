// $(document).ready(function(){
   // alert("Ola")
// })

$(document).ready(function(){

    console.log(document.querySelector('header button'))
    console.log($("#botao-cancelar"))

})

$('header button').click(function(){
    // alert("Expandir botão")
    $('form').slideDown()
})

$('#botao-cancelar').click(function(){
    $('form').slideUp()
})

$('form').on('submit',function(e){
    // console.log("submit")
    e.preventDefault()
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style ="display:none" ></li>')
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)

    $(`
    <div class = "overlay-imagem-link">
    <a href = "${enderecoDaNovaImagem}" target = "black" titke = "Ver imagem em tamanho real"
    <a/>
    `).appendTo(novoItem)
    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(1000)    
    $('#endereco-imagem-nova').val('')
})


