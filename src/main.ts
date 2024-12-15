import { createNavbar } from './components/navbar';
import { createFooter } from './components/footer';
import { loadHomePage } from './pages/home';
import { loadInstallationPage } from './pages/installation';
import { loadUsagePage } from './pages/usage';
import { loadReferencePage } from './pages/reference';
import { loadContributingPage } from './pages/contributing';
import { loadDownloadsPage } from './pages/downloads';

const routes: Record<string, () => HTMLElement> = {
    '/': loadHomePage,
    '/installation': loadInstallationPage,
    '/usage': loadUsagePage,
    '/reference': loadReferencePage,
    '/contributing': loadContributingPage,
    '/downloads': loadDownloadsPage,
};

function navigateTo(url: string) {
    history.pushState(null, '', url);
    updatePage();
}

function updatePage() {
    const root = document.querySelector('#app') as HTMLElement;
    const renderPage = routes[window.location.pathname] || loadHomePage;

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
            const target = event.target as HTMLAnchorElement;
            navigateTo(target.href);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updatePage();
    window.addEventListener('popstate', updatePage);
});