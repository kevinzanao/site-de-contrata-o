const iconMenuMobile = document.querySelector('.header-toolbar-icon #iconMobile');
const menuMobileItens = document.querySelector('.header-toolbar div:nth-child(2)');

iconMenuMobile.addEventListener('click', () => {

   console.log(menuMobileItens)
   menuMobileItens.classList.toggle("header-toolbar-itens");  
})