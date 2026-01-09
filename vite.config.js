import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  build: {
    outDir: 'dist', // <-- use 'dist' for Vercel
    emptyOutDir: true,
  },
  plugins: [
    laravel({
      input: [
        'resources/scss/index.scss',
        'resources/scss/admin/adminlogin.scss',
        'resources/scss/admin/admindashboard.scss',
        'resources/scss/admin/adminemployee.scss',
        'resources/scss/user/userlogin.scss',
        'resources/scss/user/userregister.scss',
        'resources/scss/sidebar.scss',
        'resources/scss/modal.scss',
        'resources/js/admin/dashboard.js',
        'resources/js/admin/employee.js',
        'resources/js/admin/user.js',
        'resources/js/user/verification.js',
      ],
      refresh: true,
    }),
  ],
});
