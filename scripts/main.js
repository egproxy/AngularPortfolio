;"use strict";
var portfApp = angular.module('jlinApp', [
	'ngRoute'
]);

portfApp.config(['$routeProvider', function($routeProvider){
$routeProvider
	.when("/", {templateUrl: 'home.html', controller: 'PageCtrl'})
	.when("/project1", {templateUrl: 'project1/index.html', controller: 'PageCtrl'})
}]);


portfApp.controller('PageCtrl', function() {

	// /* when clicking a thumbnail */
	$('figure').click(function(){
	   	var src = $(this).find('img').attr('src');
	   	if( src.indexOf('-thumbnail') > 0 ) {
	   		src = src.substr(0, src.indexOf('-thumbnail')) + '.bmp';
	    	var $img = $("<img />").attr({
	    		'src': src,
	    		'width': '100%',
	    		'height': 'auto'
	    	});
	    	
	    	$('.carousel-inner').children().remove();
	    	$img.appendTo('.carousel-inner');
	    	$('#myModal').modal('show');
	    }
	
	});


});

portfApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})
