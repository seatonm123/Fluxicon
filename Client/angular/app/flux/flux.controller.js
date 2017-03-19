(function(){
  'use strict';

  angular
    .module('fluxicon')
    .controller('FluxController', FluxController);

    FluxController.$inject = ['$http', '$stateParams', '$state'];

  function FluxController($http, $stateParams, $state){
    const vm = this;

    vm.$onInit = function(){
      vm.showFlux = false;
      vm.showSetup = true;
      vm.showScore = false;
      getPhraseArray();
    };

    var phraseArray = [];
    var translateArray = [];
    var queryStringArray = [];
    var toGuess = {};
    var guessContent = "";
    vm.currentScore = 0;
    vm.optimalScore = 0;
    vm.initialLength = 0;

    vm.startFlux = function(){
      let finalCategory = configureCategory(vm.category);
      let finalDifficulty = configureDifficulty(vm.difficulty);
      for(var i = 0; i < phraseArray.length; i++){
        if(phraseArray[i].category == finalCategory && phraseArray[i].difficulty == finalDifficulty){
          translateArray.push(phraseArray[i]);
          vm.optimalScore += phraseArray[i].points;
          vm.initialLength += 1;
        }
      }
      for(var j = 0; j < translateArray.length; j++){
        let finalLang = configureLanguage(vm.language);
        console.log(finalLang);
        let thisQuery = buildQuery(translateArray[j], finalLang);
        queryStringArray.push(thisQuery);
      }
      queryThatShiz(queryStringArray);
    };

  function queryThatShiz(stringArray){
    $http.get(stringArray[0])
      .then(function(response){
        vm.activePhrase = response.data.data.translations[0].translatedText;
      });
      vm.showFlux = true;
      vm.showSetup = false;
      toGuess = translateArray[0];
      guessContent = toGuess.content;
      queryStringArray.shift();
      translateArray.shift();
    }

    function getPhraseArray(){
      $http.get('http://localhost:2500/phrases')
        .then(function(response){
          for(var i = 0; i < response.data.length; i++){
            phraseArray.push(response.data[i]);
          }
        });
    }

  function configureCategory(category){
    let thisCategory = category.toString().trim();
    let inputCategory = "";
    switch (thisCategory){
      case "Famous Quotes":
        inputCategory = "quotes";
        break;
      case "Song Lyrics":
        inputCategory = "music";
        break;
      case "Movie Quotes":
        inputCategory = "film";
        break;
      case "Jokes":
        inputCategory = "jokes";
        break;
      case "Random Facts":
        inputCategory = "facts";
    }
    return inputCategory;
  }

  function configureDifficulty(difficulty){
    let thisDifficulty = difficulty.toString().trim();
    let inputDifficulty = "";
    switch (thisDifficulty){
      case "Very Easy":
        inputDifficulty = "1";
        break;
      case "Easy":
        inputDifficulty = "2";
        break;
      case "Normal":
        inputDifficulty = "3";
        break;
      case "Hard":
        inputDifficulty = "4";
        break;
      case "Very Hard":
        inputDifficulty = "5";
    }
    return inputDifficulty;
  }

  function configureLanguage(lang){
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
  }


  function buildQuery(obj, language){
    obj.content.replace(/\.$/, "");
    let newContent = obj.content.replace(/ /g, '%20');
    var queryString = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyBApbjktvbol-fvZXCJISFwbNNjDXY2N5k&source=en&target=' + language + '&q=' + newContent;
    return queryString;
  }

  vm.makeGuess = function(){
    var finalScore = 0;
    var score = 0;
    vm.wrongArray = [];
    var noSpaceAnswer = guessContent.split(' ');
    console.log(noSpaceAnswer);
    var noSpaceGuess = vm.yourGuess.split(' ');
    console.log(noSpaceGuess);
    for(var i = 0; i < noSpaceAnswer.length; i++){
      if(noSpaceAnswer[i] == noSpaceGuess[i] || noSpaceAnswer[i] == noSpaceGuess[i+1] || noSpaceAnswer[i] == noSpaceGuess[i-1]){
        score += 1;
      } else {
        vm.wrongArray.push(noSpaceAnswer[i]);
      }
    }
    finalScore = Math.ceil((score/noSpaceAnswer.length) * toGuess.points);
    vm.yourScore = "'" + guessContent + "' : " + toGuess.author;
    vm.thisScore = finalScore;
    vm.currentScore += finalScore;
    vm.showScore = true;
    vm.noAnswer = true;
  };

  vm.nextPhrase = function(){
    if(queryStringArray.length > 0){
    vm.thisLength = queryStringArray.length;
    console.log(vm.thisLength);
    vm.yourGuess = "";
    vm.yourScore = "";
    queryThatShiz(queryStringArray);
    vm.showScore = false;
    vm.noAnswer = false;
    vm.finalLength = 100 - ((vm.thisLength / vm.initialLength) * 100);
    } else {
      isFinal();
    }
  };

  function isFinal(){
      vm.endItAll = true;
      vm.showFlux = false;
      vm.showSetup = false;
      assessMastery();
  }

  function assessMastery(){
    let finalPercentage = (vm.currentScore/vm.optimalScore) * 100;
    let yourMastery = ""
    if(finalPercentage <= 100 && finalPercentage > 90){
      yourMastery = "master";
    } else if (finalPercentage <= 90 && finalPercentage > 80){
      yourMastery = "guru";
    } else if (finalPercentage <= 80 && finalPercentage > 70){
      yourMastery = "scholar";
    } else if (finalPercentage <= 70 && finalPercentage > 60){
      yourMastery = "acolyte";
    } else if (finalPercentage <= 60 && finalPercentage > 50){
      yourMastery = "novice";
    } else {
      yourMastery = "beginner";
    }
    vm.mastery = yourMastery;
  }

  vm.backHome = function(){
    $state.go('home')
  }

}

})();
