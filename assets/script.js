const control = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
const menuItems = document.querySelectorAll('.nav-bar a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', smoothScroll)
});

function smoothScroll(event) {
    event.preventDefault();
    const goTo = getScrollTopByHref(event.target);
    
  scrollToPosition(goTo)
};
function scrollToPosition(goTo) {
    window.scroll({
        top:goTo,
        behavior:"smooth",
    })
};
function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop
};

function  caroussel() {
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
};
function init() {
    caroussel();
    smoothScroll();
};

init();