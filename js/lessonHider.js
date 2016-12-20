angular.module('directivePractice')
  .directive('lessonHider', function () {

    return {
      restrict: 'E',
      templateUrl: './lessonHider.html',
      link: function (scope, elem, attrs) {
          scope.getSchedule.then(function (response) {
            scope.schedule = response;
          })
          
      },
      scope: {
        lesson: '='
      },
      controller: function ($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      }
    }
  })
