jquery-slider
=============

Perform horizontal sliding with dynamic content.

API
=============

First apply the slider to a DOM element :

	jQuery(document.body).slider();
	
Then slide left or right to new content :

	jQuery(document.body).slider('<div>my new content<div>', 'left', 2000, callback);

Angular Directive
=============

Look at angular-demo...

	<body ng-controller="index" slider="content" direction="left" duration="2000">

In you controller :

	Index($scope) {
		//initial content after page load
		$scope.content = '<div>my new content<div>';
		
		//...then slide somewhere
		$scope.name = 'World';
		$scope.content = '<div>Hello {{name}} !<div>';
	}	

### Activate vertical overflow hidden

	<body ng-controller="index" slider="content" direction="left" options="options" duration="2000">
	
	Index($scope) {
		...
		$scope.options = { 'vertical-overflow-hidden' : true };
		...
	}
