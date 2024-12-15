(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function h(){const e="/SmoothMath-Docs",o=document.createElement("nav");return o.className="navbar",o.innerHTML=`
    <div class="container">
      <h1 class="logo">SmoothMath</h1>
      <ul class="nav-links">
        <li><a href="${e}/" data-link>Home</a></li>
        <li><a href="${e}/installation" data-link>Installation</a></li>
        <li><a href="${e}/usage" data-link>Usage</a></li>
        <li><a href="${e}/reference" data-link>Reference</a></li>
        <li><a href="${e}/contributing" data-link>Contributing</a></li>
        <li><a href="${e}/downloads" data-link>Downloads</a></li>
      </ul>
    </div>
  `,o}function u(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
    <div class="container">
      <p>© ${new Date().getFullYear()} SmoothMath. All rights reserved.</p>
      <p>
        <a href="https://github.com/qloha/SmoothMath" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://pypi.org/project/SmoothMath" target="_blank" rel="noopener noreferrer">PyPI</a>
      </p>
    </div>
  `,e}function c(){const e=document.createElement("section");return e.className="home",e.innerHTML=`
    <h1>Welcome to SmoothMath</h1>
    <p>SmoothMath is a Python package designed to simplify mathematical operations and provide a smooth experience for developers.</p>
    <a href="https://pypi.org/project/smoothmath" target="_blank" rel="noopener noreferrer" class="button">View on PyPI</a>
  `,e}function d(){const e=document.createElement("section");return e.className="installation",e.innerHTML=`
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
  `,e}function p(){const e=document.createElement("section");return e.className="usage",e.innerHTML=`
    <h1>Usage</h1>
    <p>Here's how you can use SmoothMath in your projects:</p>
    <pre><code>
import smoothmath as sm

# Example usage
result = sm.add(5, 3)
print(result)
    </code></pre>
    <p>For a detailed description of all available functions, visit the <a href="/reference" data-link>API Reference</a>.</p>
  `,e}function m(){const e=document.createElement("section");return e.className="reference",e.innerHTML=`
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
  `,e}function f(){const e=document.createElement("section");return e.className="contributing",e.innerHTML=`
    <h1>Contributing</h1>
    <p>If you would like to contribute to SmoothMath, please follow these guidelines:</p>
    <ol>
      <li>Fork the repository on GitHub.</li>
      <li>Create a new branch for your feature or bug fix.</li>
      <li>Make your changes and commit them with clear messages.</li>
      <li>Submit a pull request to the main repository.</li>
    </ol>
    <p>We welcome contributions from the community and appreciate your help in making SmoothMath better!</p>
  `,e}function g(){const e=document.createElement("section");return e.className="downloads",e.innerHTML=`
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
  `,e}const a="/SmoothMath-Docs",b={[`${a}/`]:c,[`${a}/installation`]:d,[`${a}/usage`]:p,[`${a}/reference`]:m,[`${a}/contributing`]:f,[`${a}/downloads`]:g};function y(e){const o=`${a}${e.startsWith("/")?e:`/${e}`}`;history.pushState(null,"",o),l()}function l(){const e=document.querySelector("#app"),o=window.location.pathname.replace(a,""),r=b[`${a}${o}`]||c;e.innerHTML="",e.appendChild(h()),e.appendChild(r()),e.appendChild(u()),v()}function v(){document.querySelectorAll("[data-link]").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault();const n=i.currentTarget.getAttribute("href")||"/";y(n)});const r=o;r.href=`${a}${r.getAttribute("href")||"/"}`})}document.addEventListener("DOMContentLoaded",()=>{l(),window.addEventListener("popstate",l)});
