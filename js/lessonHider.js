// angular.module('directivePractice')
// .directive('lessonHider', function() {
//
//   return {
//     templateUrl: 'lessonHider.html',
//     restrict: 'E',
//     scope: {
//       lesson: '='
//     },
//     controller: function( $scope, lessonService ) {
//       $scope.getSchedule = lessonService.getSchedule();
//     },
//     link: function( scope, element, attributes ) {
//
//       scope.getSchedule.then(function( response ) {
//         scope.schedule = response.data;
//
//         scope.schedule.forEach(function( scheduleDay ) {
//           if (scheduleDay.lesson === scope.lesson) {
//             element.css('text-decoration', 'line-through');
//             return;
//           }
//         });
//       });
//
//     }
//   }
//
// });

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

      link: function (scope, elem, attrs) {//elem attribute was different, so it was not applying

          scope.getSchedule.then(function (response) {
            scope.schedule = response.data;

            for (var i = 0; i < response.data.length; i++) {

              if (response.data[i].lesson === scope.lesson) {
                scope.lessonDay = response.data[i].weekday
                elem.css("text-decoration", "line-through");
                return;
              }
            }
          })
      }

    }

  })
