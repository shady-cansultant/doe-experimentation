import './eager.scss';

// append the accordion to the body
document.addEventListener('DOMContentLoaded', () => {
  import('./lazy.scss');
  import('nsw-design-system/dist/js/main.js').then(({ default: nsw }) => nsw.initSite());
});
