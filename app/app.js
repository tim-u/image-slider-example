(function(angular){

  'use strict';

  angular.module('myApp', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function($scope){

      // sample images
      $scope.pics = [
        'https://images-na.ssl-images-amazon.com/images/I/610sfktPLuL._SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61aN%2BSE-F9L._SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71TtQbuOTgL._SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71VbRZX0nTL._SX522_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/51-0fvyu5ML._SX522_.jpg'
      ];
    });

})(window.angular);