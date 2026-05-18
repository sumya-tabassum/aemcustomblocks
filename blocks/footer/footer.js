/* /blocks/footer/footer.js */

export default function decorate(block) {
  // Add CSS classes for structure

  block.querySelector(':scope > div:first-child')?.classList.add('footer-left');
  block.querySelector(':scope > div:last-child')?.classList.add('footer-right');

  // Style logo
  const logo = block.querySelector('p');
  if (logo) logo.classList.add('logo');

  // Style links
  block.querySelectorAll('a').forEach((link) => {
    link.classList.add('footer-link');
  });

  // Style disclaimer text
  block.querySelectorAll('p').forEach((p, index) => {
    if (index > 0) {
      p.classList.add('footer-text');
    }
  });
}