(function() {
  'use strict';

  angular
    .module('photoStickerApp')
    .controller('ModalController', ModalController);
   
    

  /** @ngInject */
  function ModalController(ngDialog, ModalService) {
 var vm = this;
    vm.clickToOpen = function () { 
        ngDialog.open({ 
                    template: 'app/components/modal/modaldialog.html',
                    controller: UpdateStickerLibrary
                });
}

    function UpdateStickerLibrary ($scope) {
                        $scope.submitSticker = function() { 
                          debugger;
                        $scope.lists = shareDataService.getSticker();
                        alert('ppp..');
                      }  
                    }


  };


  



})();
