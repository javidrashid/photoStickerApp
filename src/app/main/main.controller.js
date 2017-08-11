(function() {
  'use strict';

  angular
    .module('photoStickerApp')
    .controller('MainController', MainController);
  /** @ngInject */
  function MainController($window, $scope, $timeout, webDevTec, toastr, FileUploader, ngDialog) {
 var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1445432115361;
    vm.showToastr = showToastr;
   vm.activeButton = activeButton;
   vm.reload = reload;

     vm.isActive = false;

     function activeButton() {  
      vm.isActive = !vm.isActive; 
    }

function reload() {
  $window.location.reload();
}
    $scope.addSticker = function() {
      $scope.addStickerFormData = {};
      $scope.openDialogId = 
        ngDialog.open({
            template: 'app/components/modal/modaldialog.html',
            scope: $scope
        });
    };    

    var notEmpty = function(someObject) {
      return !angular.equals(someObject,{});
    };
    

 $scope.saveSticker = function(){
      console.log($scope.addStickerFormData);
      if (notEmpty($scope.addStickerFormData)) {
        $scope.stickers.push($scope.addStickerFormData);
         console.log($scope.stickers);
      } else {
        console.log('addStickerFormData is empty!');
      }


      ngDialog.closeAll();
    };

    $scope.stickers = [
            {
              'title':'A sample title',
              'images':'http://lorempixel.com/150/150/'
          }
      ];

    activate();

    function activate() {

      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
//debugger;



    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

  };

      



})();
