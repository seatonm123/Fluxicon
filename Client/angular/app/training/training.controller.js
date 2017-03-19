(function(){
  'use strict';

  angular
    .module('fluxicon')
    .controller('TrainingController', TrainingController);

    TrainingController.$inject = ['$http', '$stateParams', '$state'];

    function TrainingController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.showFlux = false;
        vm.showSetup = true;
        vm.showScore = false;
        console.log('At least this works.');
      };

      vm.wordArray = [];
      var thisOne = "";
      var thatOne = "";
      vm.counter = 0;
      vm.totalPoints = 0;

      vm.startFlux = function(){
        vm.showFlux = true;
        vm.showSetup = false;
        var thisPhrase = getPhrase();

      };

      function getPhrase(){
          vm.thisLanguage = vm.configureLanguage(vm.language);
          let thisDiff = vm.difficulty.toString().trim();
          let queryString = '';
          if(thisDiff == 'Very Easy'){
            queryString = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=4&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          } else if(thisDiff == 'Easy'){
            queryString = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=6&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          } else if(thisDiff == 'Normal'){
            queryString = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=6&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          } else if(thisDiff == 'Hard'){
            queryString = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=8&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          } else if(thisDiff == 'Very Hard'){
            queryString = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=10&maxLength=20&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          }
          $http.get(queryString).then(function(response){
             vm.myPhrase = response.data.word;
             console.log(vm.myPhrase);
            $http.get('https://translation.googleapis.com/language/translate/v2?key=AIzaSyBApbjktvbol-fvZXCJISFwbNNjDXY2N5k&source=en&target=' + vm.thisLanguage + '&q=' + vm.myPhrase)
              .then(function(response){
                vm.activePhrase = response.data.data.translations[0].translatedText;
              });
          });
      }

      vm.configureLanguage = function(lang){
        let thisLang = lang.toString().trim();
        let inputLang = "";
          switch(thisLang){
            case "French":
              inputLang = "fr";
              break;
            case "Spanish":
              inputLang = "es";
              break;
            case "German":
              inputLang = "de";
              break;
            case "Latin":
              inputLang = "la";
              break;
            case "Italian":
              inputLang = "it";
          }
          return inputLang;
      };

      vm.makeGuess = function(){
        vm.counter += 1;
        vm.finalLength = vm.counter * 10;
        vm.showFlux = false;
        vm.showResults = true;
        vm.noAnswer = true;
        console.log('WTF???');
        if(vm.yourGuess == vm.myPhrase){
          vm.rightAnswer = true;
          vm.totalPoints += 1;
          vm.rightWrong = "Correct!";
        } else {
          vm.rightAnswer = false;
          vm.wrongAnswer = true;
          vm.rightWrong = "Wrong!";
        }
      };

      vm.nextPhrase = function(){
        vm.noAnswer = false;
        if(vm.counter < 10){
          vm.showResults = false;
          vm.showFlux = true;
          vm.yourGuess = "";
          getPhrase();
        } else{
          wrapup();
        }
      };

      function wrapup(){
        assessMastery();
        vm.showFinal = true;
        vm.showFlux = false;
        vm. showSetup = false;
        vm.showResults = false;
      }

      function assessMastery(){
        if (vm.totalPoints >= 9){
          vm.mastery = "masterfully";
        } else if (vm.totalPoints >= 8){
          vm.mastery = "extremely well";
        } else if (vm.totalPoints >= 7){
          vm.mastery = "really well";
        } else if (vm.totalPoints >= 6){
          vm.mastery = "proficiently";
        } else if (vm.totalPoints >= 5){
          vm.mastery = "adequately";
        } else {
          vm.mastery = "like a fish knows how to fly. Keep practicing"
        }
      }

  }

})();
