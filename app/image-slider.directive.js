(function(angular){

  'use strict';

  angular.module('myApp').directive("imageSlider", ["$timeout", function($timeout) {
    return {
      restrict : "E",
      templateUrl : "image-slider.template.html",
      scope: {
        sources: '='
      },
      link: function ($scope) {

        function init()
        {
          $scope.currentSrc = 0;
          $scope.direction = 'left';

          $scope.move = move;
          $scope.setSrc = setSrc;
        }

        init();

        /**
         * Moves the slider in the specified direction
         *
         * @param direction - either 'left' or 'right'
         */
        function move(direction)
        {
          $scope.direction = direction;

          // wait a cycle for the direction class to be applied to the image
          $timeout(function(){

            if(direction === 'right')
            {
              $scope.currentSrc = ($scope.currentSrc === 0) ? $scope.sources.length - 1 : $scope.currentSrc - 1;
            }
            else
            {
              $scope.currentSrc = ($scope.currentSrc === $scope.sources.length - 1) ? 0 : $scope.currentSrc + 1;
            }
          })
        }

        /**
         * Sets the current image source index
         *
         * @param index - the image source position
         */
        function setSrc(index)
        {
          $scope.currentSrc = index;
        }
      }
    };
  }]);


})(window.angular);
