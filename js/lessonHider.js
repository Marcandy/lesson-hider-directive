angular.module('directivePractice')
  .directive('lessonHider', function () {

    return {
      restrict: 'E',
      templateUrl: './lessonHider.html',
      scope: {
        lesson: '=',
        datAlert: '&'
      },

      controller: function ($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },

      link: function (scope, elem, attrs) {

          scope.getSchedule.then(function (response) {
            scope.schedule = response.data;

            for (var i = 0; i < scope.schedule.length; i++) {
              if (scope.schedule[i].lesson === scope.lesson) {
                element.css("text-decoration", "line-through");
                return;
              }
            }
          })
      }



    }
  })
