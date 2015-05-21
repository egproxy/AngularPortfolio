;"use strict";
var jlinApp = angular.module('jlinApp', [
	'ngRoute'
]);

jlinApp.config(['$routeProvider', function($routeProvider){
$routeProvider
	.when("/", {templateUrl: 'home.html', controller: 'PageCtrl'})
	.when("/project1", {templateUrl: 'project1/index.html', controller: 'PageCtrl'})
	.when("/project2", {templateUrl: 'project2/index.html', controller: 'PageCtrl'})
}]);


jlinApp.controller('PageCtrl', function() {
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

jlinApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})