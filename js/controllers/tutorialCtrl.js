angular.module('tutorialCtrlModule', [])

.controller("TutorialCtrl", ["$scope", "Calculations", function($scope, Calculations){
	// code goes here
	$scope.tutorialObject = {};
	$scope.tutorialObject.title = "Main Page";
	$scope.tutorialObject.subTitle = "Sub Title";
	$scope.tutorialObject.firstName = "Charlie";
	$scope.tutorialObject.lastName = "Brown";

	// Angular best practice is, when you use a model, make sure you use a dot notation, if you don't you're probably doing something wrong.
	// So create the object first (as an empty one) then create methods. This helps things work better down the line..

	$scope.tutorialObject.bindOutput = 2;
	$scope.timesTwo = function(){
		$scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
	}

	Calculations.pythTheorum();
}])

.directive("myWelcomeMessage", function(){
	return {
		restrict: "AE", //this restricts the directive to BOTH an element(E) and an attribute(A)
		template: "<div> Howdy how are you?</div>" //the template
	}
})

// This is a service
.factory("Calculations", function(){
	var calc = {};

	calc.timesTwo = function(a){
		return a * 2;
	}

	calc.pythTheorum = function(a, b){
		return (a * a) + (b * b);
	}
	return calc;
});

