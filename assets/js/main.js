/**
 * Handle Sticky Header
 *
 * https://wicky.nillia.ms/headroom.js/
 */
(() => {
  new Headroom(document.querySelector('header'), {
    offset: 100,
    tolerance: 30
  }).init();
})();