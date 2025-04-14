import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/project_Frontend-Flux-Architecture/', // Thay bằng tên repository của bạn
});
