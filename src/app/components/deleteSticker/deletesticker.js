(function()  {

	'use strict';
	angular.module('photoStickerApp')
			.directive('deleteSticker', deleteSticker);

			function deleteSticker() {
					var directive = {
					      restrict: 'EAC',
					      link: function (scope, iElement, iAttrs) { 
								iElement.bind('mouseover', function() {	
									$(function() {
										iElement.next().toggle();
										if(iElement.next().length !== 1) {
											$(iElement).after('<buttton class="btn btn-danger btn-xs del-btn">Delete</button>');
										};
										iElement.next().click(function() {
											iElement.next().parents('tr').empty();
										})	
									});
								});
							}
					    };
		    		return directive;
				} 
}
)();


