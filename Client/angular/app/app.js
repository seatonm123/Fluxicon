(function(){
  'use strict';


  angular
  .module('fluxicon', [])
  .component('flux', {
    controller: fluxController,
    templateUrl: 'app/templates/flux.html'
  });

    fluxController.$inject = ['$http'];

    function fluxController($http){
      const vm = this;
      vm.$onInit = function(){
        console.log('it is working');
        $http.get('http://localhost:2500/phrases/12')
          .then(function(response){
            // vm.activePhrase = response.data;
          })
          .catch(err =>{
            console.log(err);
            console.log('angular sucks');
          });
      };
      vm.showFlux = false;
      vm.showSetup = true;

      vm.startFlux = function(){
          vm.configureScheme()
          .then(function(array){
            vm.activePhrase = array[0].content;
            vm.makeGuess = function(){
              if(vm.yourGuess === vm.activePhrase){
                alert('You did it!');
              }
            };
          });
        vm.showFlux = true;
        vm.showSetup = false;
      };

      vm.configureCategory = function(){
        var thisCategory = vm.category.toString().trim();
        var urlCategory = "";
        if(thisCategory == "Famous Quotes"){
          urlCategory = "quotes";
        } else if (thisCategory == "Song Lyrics"){
          urlCategory = "music";
        } else if (thisCategory == "Movie Quotes"){
          urlCategory = "film";
        } else if (thisCategory == "Jokes"){
          urlCategory = "jokes";
        } else if (thisCategory == "Random Facts"){
          urlCategory = "facts";
        }
        return urlCategory
      };

      vm.configureDifficulty = function(){
        var thisDifficulty = vm.difficulty.toString().trim();
        var urlDifficulty = "";
        if(thisDifficulty == "Very Easy"){
          urlDifficulty = "1";
        } else if (thisDifficulty == "Easy"){
          urlDifficulty = "2";
        } else if (thisDifficulty == "Normal"){
          urlDifficulty = "3";
        } else if (thisDifficulty == "Hard"){
          urlDifficulty = "4";
        } else if (thisDifficulty == "Very Hard"){
          urlDifficulty = "5";
        }
        return urlDifficulty;
      };

      vm.configureScheme = function(){
        var inputCategory = vm.configureCategory();
        var inputDifficulty = vm.configureDifficulty();
        return $http.get('http://localhost:2500/phrases/' + inputCategory + '/' + inputDifficulty)
          .then(function(response){
            return response.data;
            // for(var i = 0; i < response.data.length; i++){
            //   phraseArray.push(response.data[i]);
            // }
          });
      };

    }
})();
