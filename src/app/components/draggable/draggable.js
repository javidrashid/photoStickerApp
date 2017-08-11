(function()  {

	'use strict';
	angular.module('photoStickerApp')
			.directive('dragStickers', dragStickers);

			function dragStickers() { 
					var directive = {
					      restrict: 'A',
					      link: function (scope, iElement, iAttrs) {
							iElement.on('drag', function() {
							$(function() {

								$(".stickers img").draggable({
									  appendTo: "body",
									  containment:"document",
									  helper: "clone",
									  start: function( event, ui ) {
							              $(this).addClass('resize-stickers'); 
							         }
								});

									$("#banner").droppable({
									  activeClass: "ui-state-highlight", 
									  accept:"td img",
									  hoverClass: "drop-hover", 
									  //tolerance: "fit",
									  drop: function() { 
									  	$(this).css("border","2px dotted black");
									  	$('img.draggable').resizable({
									  		minWidth:50,
									  		minHeight:50,
									  		maxWidth:250,
									  		maxHeight:250
									  	});
									    deleteImage(); //A hack

									  }
									});

							})
								

					      	})
				}
					    };
		    		return directive;
				} 
}
)();


