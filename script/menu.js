const toggleMenuEelment  = document.getElementById('toggle-menu');
const mainMenuElement  = document.getElementById('main-menu');

toggleMenuEelment.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show');
})
