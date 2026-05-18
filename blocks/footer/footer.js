/* /blocks/footer/footer.js */

export default function decorate(block) {
  // Convert authored rows into key-value object
  const data = {};

  block.querySelectorAll(':scope > div').forEach((row) => {
    const key = row.children[0]?.textContent.trim();
    const valueEl = row.children[1];

    if (key && valueEl) {
      data[key] = valueEl;
    }
  });

  // Clear existing content
  block.innerHTML = '';

  // Build footer HTML using your JSON field names
  block.innerHTML = `
    <div class="footer-left">
      <p class="logo">${data.logoText?.textContent || '(ON) Path™'}</p>
    </div>

    <div class="footer-right">
      <div class="footer-links">
        <a href="${data.privacyLink?.textContent || '#'}">${data.privacyLabel?.textContent || 'Privacy Policy'}</a>
        <a href="${data.termsLink?.textContent || '#'}">${data.termsLabel?.textContent || 'Terms of Use'}</a>
        <a href="${data.cookieLink?.textContent || '#'}">${data.cookieLabel?.textContent || 'Cookie Policy/Settings'}</a>
        <a href="${data.privacyShieldLink?.textContent || '#'}">${data.privacyShieldLabel?.textContent || 'Privacy Shield'}</a>
        <a href="${data.sitemapLink?.textContent || '#'}">${data.sitemapLabel?.textContent || 'Site Map'}</a>
      </div>

      <div class="footer-text">
        <p>${data.disclaimer?.innerHTML || ''}</p>
        <p>${data.copyright?.textContent || ''}</p>
      </div>
    </div>
  `;

  /* ✅ Keep your existing styling logic */

  // Style links
  block.querySelectorAll('a').forEach((link) => {
    link.classList.add('footer-link');
  });

  // Style disclaimer text
  block.querySelectorAll('.footer-text p').forEach((p) => {
    p.classList.add('footer-text-item');
  });
}