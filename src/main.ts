import { createNavbar } from './components/navbar';
import { createFooter } from './components/footer';
import { loadHomePage } from './pages/home';
import { loadInstallationPage } from './pages/installation';
import { loadUsagePage } from './pages/usage';
import { loadReferencePage } from './pages/reference';
import { loadContributingPage } from './pages/contributing';
import { loadDownloadsPage } from './pages/downloads';

const basePath = '/SmoothMath-Docs';

const routes: Record<string, () => HTMLElement> = {
    [`${basePath}/`]: loadHomePage,
    [`${basePath}/installation`]: loadInstallationPage,
    [`${basePath}/usage`]: loadUsagePage,
    [`${basePath}/reference`]: loadReferencePage,
    [`${basePath}/contributing`]: loadContributingPage,
    [`${basePath}/downloads`]: loadDownloadsPage,
};

function navigateTo(url: string) {
    const fullUrl = `${basePath}${url.startsWith('/') ? url : `/${url}`}`;
    history.pushState(null, '', fullUrl);
    updatePage();
}

function updatePage() {
    const root = document.querySelector('#app') as HTMLElement;

    const relativePath = window.location.pathname.replace(basePath, '');
    const renderPage = routes[`${basePath}${relativePath}`] || loadHomePage;

    root.innerHTML = '';
    root.appendChild(createNavbar());
    root.appendChild(renderPage());
    root.appendChild(createFooter());

    setupLinks();
}

function setupLinks() {
    const links = document.querySelectorAll('[data-link]');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.currentTarget as HTMLAnchorElement;

            const relativePath = target.getAttribute('href') || '/';
            navigateTo(relativePath);
        });

        const linkElement = link as HTMLAnchorElement;
        linkElement.href = `${basePath}${linkElement.getAttribute('href') || '/'}`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updatePage();
    window.addEventListener('popstate', updatePage);
});