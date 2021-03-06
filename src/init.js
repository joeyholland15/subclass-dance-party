$(document).ready(function() {
  window.squareDancers = [];
  window.circleDancers = []; 

  $( "body" ).on("mouseover", ".square", function() {
    console.log(this.status); 
    if(this.status === undefined){
      this.status = true;
    }
    if(this.status) {
      this.status = false; 
    } else {
      this.status = true; 
    }
  }); 

  $("body").on("click", ".square", function(event){
     $(this).attr("src", "src/arnold.png");  
  })

  $('.squareDanceButton').on('click', function(){
    for(var i = 0; i < window.squareDancers.length; i++){

    }
  })

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var amount = 1; 
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if(dancerMakerFunctionName === 'snow') {
      amount = 200;  
    }

    if(dancerMakerFunctionName === 'lineup') {
      dancerMakerFunction(); 
    } else {
    // make a dancer with a random position
      for(var i = 0; i < amount; i++) {
        var dancer = new dancerMakerFunction(
          Math.floor($("body").height() * Math.random()),
          Math.floor($("body").width() * Math.random()),
          Math.random() * 1000);

          if(dancerMakerFunctionName === 'firstDancer') {
            window.squareDancers.push(dancer); 
            console.log(dancer);
          } else if (dancerMakerFunctionName === 'blinkyDancer') {
            window.circleDancers.push(dancer);  
          }
        $('body').append(dancer.$node);
      }; 
    }  
    
    
  });

});

