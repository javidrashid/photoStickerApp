(function() {
  'use strict';

  angular
    .module('photoStickerApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
