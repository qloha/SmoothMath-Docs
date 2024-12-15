(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function c(){const e=document.createElement("nav");return e.className="navbar",e.innerHTML=`
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
  `,e}function u(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
    <div class="container">
      <p>© ${new Date().getFullYear()} SmoothMath. All rights reserved.</p>
      <p>
        <a href="https://github.com/qloha/SmoothMath" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://pypi.org/project/SmoothMath" target="_blank" rel="noopener noreferrer">PyPI</a>
      </p>
    </div>
  `,e}function l(){const e=document.createElement("section");return e.className="home",e.innerHTML=`
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
  `,e}function h(){const e=document.createElement("section");return e.className="usage",e.innerHTML=`
    <h1>Usage</h1>
    <p>Here's how you can use SmoothMath in your projects:</p>
    <pre><code>
import smoothmath as sm

# Example usage
result = sm.add(5, 3)
print(result)
    </code></pre>
    <p>For a detailed description of all available functions, visit the <a href="/reference" data-link>API Reference</a>.</p>
  `,e}function p(){const e=document.createElement("section");return e.className="reference",e.innerHTML=`
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
  `,e}function m(){const e=document.createElement("section");return e.className="contributing",e.innerHTML=`
    <h1>Contributing</h1>
    <p>If you would like to contribute to SmoothMath, please follow these guidelines:</p>
    <ol>
      <li>Fork the repository on GitHub.</li>
      <li>Create a new branch for your feature or bug fix.</li>
      <li>Make your changes and commit them with clear messages.</li>
      <li>Submit a pull request to the main repository.</li>
    </ol>
    <p>We welcome contributions from the community and appreciate your help in making SmoothMath better!</p>
  `,e}function f(){const e=document.createElement("section");return e.className="downloads",e.innerHTML=`
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
  `,e}const g={"/":l,"/installation":d,"/usage":h,"/reference":p,"/contributing":m,"/downloads":f};function b(e){history.pushState(null,"",e),s()}function s(){const e=document.querySelector("#app"),n=g[window.location.pathname]||l;e.innerHTML="",e.appendChild(c()),e.appendChild(n()),e.appendChild(u()),y()}function y(){document.querySelectorAll("[data-link]").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault();const r=a.target;b(r.href)})})}document.addEventListener("DOMContentLoaded",()=>{s(),window.addEventListener("popstate",s)});
