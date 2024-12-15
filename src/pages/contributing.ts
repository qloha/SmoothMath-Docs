export function loadContributingPage(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'contributing';

    section.innerHTML = `
    <h1>Contributing</h1>
    <p>If you would like to contribute to SmoothMath, please follow these guidelines:</p>
    <ol>
      <li>Fork the repository on GitHub.</li>
      <li>Create a new branch for your feature or bug fix.</li>
      <li>Make your changes and commit them with clear messages.</li>
      <li>Submit a pull request to the main repository.</li>
    </ol>
    <p>We welcome contributions from the community and appreciate your help in making SmoothMath better!</p>
  `;

    return section;
}