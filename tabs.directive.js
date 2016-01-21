(function() {
  'use strict';

  angular
    .module('ionicTopTabs')
    .directive('topTabs', topTabs);

  /** @ngInject */
  function topTabs($timeout) {
    var directive = {
      restrict: 'E',
      scope: {
        tabs: '=',
        activated: '='
      },
      required: 'type',
      replace: true,
      templateUrl: './tabs.html',
      link: function(scope, element, attr) {
        $timeout(function() {
          var type = attr.type;

          element.find('a').addClass('tab-item-' + type);
        }, 100);

        scope.active = function(id) {
          scope.activated = id;
        };
      }
    };

    return directive;
  }

})();
