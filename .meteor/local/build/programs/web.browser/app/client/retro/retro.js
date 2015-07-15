(function(){var retroModule = angular.module("retrospective");
retroModule.controller("RetrospectiveCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
    $scope.sections = [{name:'good'},{name:'bad'},{name: 'keep'}];
}]);

})();
