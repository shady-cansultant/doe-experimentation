// add delayed functionality here
import('nsw-design-system/dist/js/main.js').then(({ default: nsw }) => {
  // eslint-disable-next-line no-console
  console.debug(nsw);
  return nsw.initSite();
});
