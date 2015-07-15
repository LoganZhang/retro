var retroModule = angular.module("retrospective");
retroModule.controller("RetroSectionCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
  	var projectId = window.location.hash;
  	$scope.query = {
  		section : $scope.section.name,
  		projectId : projectId
  	};
  	$scope.tasks = $meteor.collection(function() {
      return Tasks.find($scope.getReactively('query'), {sort: {createdAt: -1}})
    });
    $scope.addTask = function(newTask) {
      $meteor.call("addTask", newTask, $scope.section.name, projectId);
    };
    $scope.deleteTask = function(task) {
      $meteor.call("deleteTask", task._id);
    };
}]);
retroModule.directive('retroSection', function() {
	return {
	    restrict: 'E',
	    templateUrl: 'client/retro-section/retro-section.ng.html',
		controller: 'RetroSectionCtrl'
	};
});
