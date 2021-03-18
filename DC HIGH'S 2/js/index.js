//Menu
let menuActive = false;
function showmenu() {
  menuActive = !menuActive;
  const menu = document.querySelector(".menu");

  if (menuActive) {
    menu.style.left = "0";
  } else {
    menu.style.left = "-100%";
  }
}

/*sub menu(Dowloads)
Mapas
tabelas
*/
function showmenudow() {
  const menu_dow = document.querySelector('.menu ul li ul');
  if (menu_dow.style.display == "none") {
    menu_dow.style.display = "block";
  } else {
    menu_dow.style.display = "none";
  }

}

//temas
function tema() {
  const html = document.querySelector('html')
  const temas = document.getElementsByName('temas');
  const temaesc = document.querySelector('#temaesc');
  let tema = '';
  if (temas[0].checked) {
    tema = 'ligth';
    html.classList.remove('tema-dark')
    html.classList.toggle('tema-ligth')
  } else if (temas[1].checked) {
    tema = 'dark';
    html.classList.remove('tema-ligth')
    html.classList.add('tema-dark')
  }
  temaesc.innerHTML = `<p>o tema escolhido é o ${tema}</p>`;
}