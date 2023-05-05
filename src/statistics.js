import * as $ from 'jquery';

function createStatistics() {
  let counter = 0;
  let isDestroyed = false;
  const listener = () => ++counter;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      isDestroyed = true;

      return 'Destroyed successfully';
    },
    getClicks() {
      if (isDestroyed) return 'Statistics was destroyed';

      return counter;
    }
  };
}
window.statistics = createStatistics();
