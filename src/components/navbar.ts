export function createNavbar(): HTMLElement {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    navbar.innerHTML = `
    <div class="container">
      <h1 class="logo">SmoothMath</h1>
      <ul class="nav-links">
        <li><a href="/" data-link>Home</a></li>
        <li><a href="/installation" data-link>Installation</a></li>
        <li><a href="/usage" data-link>Usage</a></li>
        <li><a href="/reference" data-link>Reference</a></li>
        <li><a href="/contributing" data-link>Contributing</a></li>
        <li><a href="/downloads" data-link>Downloads</a></li>
      </ul>
    </div>
  `;
    return navbar;
}