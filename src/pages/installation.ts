export function loadInstallationPage(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'installation';

    section.innerHTML = `
    <h1>Installation</h1>
    <p>To install SmoothMath, use one of the following methods:</p>
    <h2>Install via PIP</h2>
    <pre><code>pip install smoothmath</code></pre>
    <h2>Install via tar.gz</h2>
    <pre><code>pip install smoothmath-x.x.x.tar.gz</code></pre>
    <h2>Alternative tar.gz Method</h2>
    <pre><code>
tar -xvf smoothmath-x.x.x.tar.gz
cd smoothmath-x.x.x
pip install .
    </code></pre>
  `;

    return section;
}