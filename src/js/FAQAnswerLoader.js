document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('[data-faq-item]');

  faqItems.forEach(item => {
    const header = item.querySelector('[data-faq-header]');

    header.addEventListener('click', () => {
      const isActive = item.hasAttribute('data-faq-active');

      faqItems.forEach(el => el.removeAttribute('data-faq-active'));

      if (!isActive) {
        item.setAttribute('data-faq-active', '');
      }
    });
  });
});
