const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerLinkEls = document.querySelectorAll('[data-menu-link]');

if (openBtnEl && closeBtnEl && burgerMenuEl) {
  const openMenu = () => {
    burgerMenuEl.dataset.visible = 'open';
    openBtnEl.setAttribute('aria-expanded', 'true');
    document.body.dataset.menu = 'open';
  };

  const closeMenu = () => {
    burgerMenuEl.dataset.visible = 'closed';
    openBtnEl.setAttribute('aria-expanded', 'false');
    document.body.dataset.menu = 'closed';
  };

  openBtnEl.addEventListener('click', openMenu);

  closeBtnEl.addEventListener('click', closeMenu);

  burgerLinkEls.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
