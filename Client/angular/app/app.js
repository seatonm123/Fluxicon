(function(){
  'use strict'

  angular
    .module('fluxicon', [])
    .component('flux', {
      controller: function() {
        console.log("I hope this works.");
          const vm = this;

          vm.$onInit = function(){
            vm.guesses = [];
          };

          vm.makeGuess = function(){
            vm.guesses.push(vm.newFlux);
            console.log(vm.guesses)
          };

      },
      templateUrl: 'app/templates/flux.html'
    });

})();
