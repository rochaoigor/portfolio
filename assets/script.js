function carregar() {

let nome=prompt('Qual o seu nome?')
let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()
let res = document.querySelector('#hello')
if (hora >=0 && hora <12 ) 
{
res.innerHTML = `Bom dia, ${nome}! <Br>Seja Bem-vindo(a)`}
else if (hora >= 12 && hora <19){
    res.innerHTML =`Boa tarde, ${nome}! <Br>Seja Bem-vindo(a)`
} else {
    res.innerHTML = `Boa noite, ${nome}!<br>Seja Bem-vindo(a)`
}
}
    function clickmenu() {
        if (items.style.display== "block") {
         items.style.display = "none"
        }
        else {
         items.style.display = "block"
        }
     }
     function tamanho() {
         if (window.innerwidth >= 768) {
             items.style.display = "block"
         }else {
             items.style.display = "none"
         }
     }
    