/* variaveis 
    espaço para armazenar uma informação por um espaço de tempo

    3 jeitos de criar uma variavel
    - var / jeito antigo - NAU USE
    - let -> VOCÊ pode alterar o valor depois
    - const -> constante
*/

/* 
    Funçoes
    Um trecho de codigo que só é executado, quando é chamado
*/
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}
function cliqueMascara() {
    form.style.left = "-3000px"
    form.style.transform = "translatex(50%)"
    mascara.style.visibility = "hidden"
}

function clickfaleconosco() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}