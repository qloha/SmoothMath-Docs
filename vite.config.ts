import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    base: '/SmoothMath-Docs/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
});