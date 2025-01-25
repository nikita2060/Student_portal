export default {
  server: {
    proxy: {
      '/login': {
        target: 'http://127.0.0.1:4000',
        changeOrigin: true,
      },
    },
  },
};
