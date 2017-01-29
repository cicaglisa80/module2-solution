(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBougthController', AlreadyBougthController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // LIST #1 - controller
  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var list1 = this;

    $scope.availableItems = ShoppingListCheckOffService.getToBuyItems();

    $scope.buyItem = function (item, $index) {
      ShoppingListCheckOffService.buyItem(item, $index);
    };
  }

  // LIST #2 - controller
  AlreadyBougthController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBougthController($scope, ShoppingListCheckOffService) {
    var list2 = this;

    $scope.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [
      { name: "cookies", quantity: 10},
      { name: "cookies 2", quantity: 20},
      { name: "cookies 3", quantity: 30},
      { name: "cookies 4", quantity: 40},
      { name: "cookies 5", quantity: 50}
    ];

    var boughtItems = [];

    service.buyItem = function (item, itemIndex) {
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(item);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

})();
