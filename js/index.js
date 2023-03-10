const navEls = document.querySelectorAll('.navigation__link');
const navCheckBoxEl = document.querySelector('#navi-toggle');
navEls.forEach((el) => {
  el.addEventListener('click', () => {
    navCheckBoxEl.checked = false;
  });
});
