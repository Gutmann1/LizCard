const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu-content');

menu.addEventListener('click', () => {
  menuContent.style.display = menuContent.style.display === 'flex' ? 'none' : 'flex';
});