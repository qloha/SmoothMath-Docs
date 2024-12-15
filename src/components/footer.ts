export function createFooter(): HTMLElement {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.innerHTML = `
    <div class="container">
      <p>© ${new Date().getFullYear()} SmoothMath. All rights reserved.</p>
      <p>
        <a href="https://github.com/qloha/SmoothMath" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://pypi.org/project/SmoothMath" target="_blank" rel="noopener noreferrer">PyPI</a>
      </p>
    </div>
  `;
    return footer;
}