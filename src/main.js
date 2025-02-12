import './scripts/aem.js';
import './scripts/scripts.js';

// append the accordion to the body
document.addEventListener('DOMContentLoaded', () => {
  import('./lazy.scss');
  import('nsw-design-system/dist/js/main.js').then(({ default: nsw }) => {
    // eslint-disable-next-line no-console
    console.debug(nsw);
    return nsw.initSite();
  });
});
