export function loadReferencePage(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'reference';

    section.innerHTML = `
    <h1>API Reference</h1>
    <p>Here are the core functions provided by SmoothMath:</p>
    <h2>add(x, y, [output='return|print'])</h2>
    <p>Adds two numbers and outputs the result.</p>
    <pre><code>
sm.add(2, 4)
# Result: 6
    </code></pre>
    <h2>subtract(x, y, [output='return|print'])</h2>
    <p>Subtracts two numbers and outputs the result.</p>
    <pre><code>
sm.subtract(2, 4)
# Result: -2
    </code></pre>
    <h2>multiply(x, y, [output='return|print'])</h2>
    <p>Multiplies two numbers and outputs the result.</p>
    <pre><code>
sm.multiply(2, 4)
# Result: 8
    </code></pre>
    <h2>divide(x, y, [output='return|print'])</h2>
    <p>Divides two numbers and outputs the result.</p>
    <pre><code>
sm.divide(2, 4)
# Result: 0.5
    </code></pre>
  `;

    return section;
}