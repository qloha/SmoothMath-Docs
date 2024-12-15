export function loadHomePage(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'home';

    section.innerHTML = `
    <h1>Welcome to SmoothMath</h1>
    <p>SmoothMath is a Python package designed to simplify mathematical operations and provide a smooth experience for developers.</p>
    <a href="https://pypi.org/project/smoothmath" target="_blank" rel="noopener noreferrer" class="button">View on PyPI</a>
  `;

    return section;
}