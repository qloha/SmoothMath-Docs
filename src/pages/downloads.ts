export function loadDownloadsPage(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'downloads';

    section.innerHTML = `
    <h1>Downloads</h1>
    <p>Download the latest versions of SmoothMath:</p>
    <h2>.tar.gz Downloads</h2>
    <ul>
      <li><a href="https://files.pythonhosted.org/packages/54/6e/927db974dc40d9fe4a9e763d8cce31c2611fc53c2efb84e2c35ed7a548e7/smoothmath-1.0.5.tar.gz" target="_blank">1.0.5 [LATEST]</a></li>
    </ul>
    <h2>.whl Downloads</h2>
    <ul>
      <li><a href="https://files.pythonhosted.org/packages/c7/ed/565633b9225a32ffbbaf10bb9b43965c6c044d0d992451618bf6a57f3444/smoothmath-1.0.5-py3-none-any.whl" target="_blank">1.0.5 [LATEST]</a></li>
    </ul>
    <p>For help with installing, please visit the <a href="/installation" data-link>Installation</a> section.</p>
  `;

    return section;
}