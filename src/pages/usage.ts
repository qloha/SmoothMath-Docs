export function loadUsagePage(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'usage';

    section.innerHTML = `
    <h1>Usage</h1>
    <p>Here's how you can use SmoothMath in your projects:</p>
    <pre><code>
import smoothmath as sm

# Example usage
result = sm.add(5, 3)
print(result)
    </code></pre>
    <p>For a detailed description of all available functions, visit the <a href="/reference" data-link>API Reference</a>.</p>
  `;

    return section;
}