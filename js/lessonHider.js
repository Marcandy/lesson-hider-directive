angular.module('directivePractice')
  .directive('lessonHider', function () {

    return {
      scope: {
        
      }
      restrict: 'E',
      templateUrl: './lessonHider.html',
      link: function (scope, elem, attrs) {
          console.log(scope, elem, attrs);
      }
    }
  })
