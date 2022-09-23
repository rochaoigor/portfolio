let nome=prompt('Qual o seu nome?')
let res = alert(`Prazer em te conhecer, ${nome}!`)

 
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
