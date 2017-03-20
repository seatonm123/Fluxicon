(function(){
  'use strict';

  angular
    .module('fluxicon')
    .controller('ProgressionController', ProgressionController);

    ProgressionController.$inject = ['$http', '$stateParams', '$state'];

    function ProgressionController($http, $stateParams, $state){
      const vm = this;

      var dataArray = [20];


      vm.$onInit = function(){

        var width = 750;
        var height = 750;
        //
        // var widthScale = d3.scaleLinear()
        //                   .domain([0, width])
        //                   .range([0, width]);
        //
        // var color = d3.scaleLinear()
        //                 .domain([0, 60])
        //                 .range(['red', 'blue']);
        //
        // var axis = d3.axisTop(widthScale)
        //               .ticks(5)

        var canvas = d3.select('#outer-container')
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height);
                        // .append('g')
                        // .attr('transform', 'translate(50, 50)')

      // var bars = canvas.selectAll('rect')
      //             .data(dataArray)
      //             .enter()
      //               .append('rect')
      //               .attr('width', function(d){return widthScale(d);})
      //               .attr('height', 25)
      //               .attr('fill', function(d){return color(d);})
      //               .attr('y', function(d, i){return i * 100;});
      //
      // canvas.append('g')
      //         .attr('transform', 'translate(0, 350)')
      //         .call(axis);

      var circle1 = canvas.append('circle')
                      .attr('cx', 50)
                      .attr('cy', 50)
                      .attr('r', 25);

      circle1.transition()
              .duration(1500)
              .delay(500)
              .attr('cx', 250)
              .transition()
              .attr('cy', 250)
              .attr('fill', 'red');

      // var circle2 = canvas.append('circle')
      //                 .attr('cx', 100)
      //                 .attr('cy', 100)
      //                 .attr('r', 20);

      // var circles = canvas.selectAll('circle')
      //             .data(dataArray)
      //             .attr('fill', 'green')
      //             .exit()
      //               .attr('fill', 'blue');
                  // .attr('fill', 'yellow')
                  // .enter()
                  //     .append('circle')
                  //     .attr('cx', 150)
                  //     .attr('cy', 150)
                  //     .attr('r', 25)
                  //     .attr('fill', 'brown');

      };


    }

})();
