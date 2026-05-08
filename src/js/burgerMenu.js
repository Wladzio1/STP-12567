const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerLinkEls = document.querySelectorAll('.burger-link');

if (openBtnEl && closeBtnEl && burgerMenuEl) {
  openBtnEl.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'open';
    openBtnEl.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  });

  closeBtnEl.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
    openBtnEl.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });

  burgerLinkEls.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenuEl.dataset.visible = 'close';
      openBtnEl.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}
