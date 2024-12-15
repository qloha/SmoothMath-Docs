export function createNavbar(): HTMLElement {
    const basePath = '/SmoothMath-Docs';
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    navbar.innerHTML = `
    <div class="container">
      <h1 class="logo">SmoothMath</h1>
      <ul class="nav-links">
        <li><a href="${basePath}/" data-link>Home</a></li>
        <li><a href="${basePath}/installation" data-link>Installation</a></li>
        <li><a href="${basePath}/usage" data-link>Usage</a></li>
        <li><a href="${basePath}/reference" data-link>Reference</a></li>
        <li><a href="${basePath}/contributing" data-link>Contributing</a></li>
        <li><a href="${basePath}/downloads" data-link>Downloads</a></li>
      </ul>
    </div>
  `;
    return navbar;
}