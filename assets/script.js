const control = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
const desktopLinks = document.querySelectorAll('#navbar a');

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
      
        if(isLeft) {
            currentItem -= 1;
        }else {
            currentItem += 1;
        }
        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if(currentItem < 0) {
            currentItem = maxItems - 1
        };
        items.forEach(item =>
            item.classList.remove('current-item'));
    
       items[currentItem].scrollIntoView({
           inline:"center",
           behavior:"smooth",
           block: "nearest"
       });
       items[currentItem].classList.add('current-item')
        
    })
    
});


function smoothScroll(e) {
    e.preventDefault()
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    
    scroll({
        top:offsetTop,
        behavior:"smooth",
    })

   
    };

    function notification() {
        alert('Página em processo de atualização')
    }

    function init() {
        smoothScroll()
    }
    desktopLinks.forEach((links) => {
        links.addEventListener('click', smoothScroll)
        })

    init();