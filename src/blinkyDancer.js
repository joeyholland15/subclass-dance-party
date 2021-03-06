// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.colorNum = Math.random();

  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var styleSettings = {
    border : '10px solid green',
  };
  if(this.colorNum < 0.25){
    styleSettings.border = '10px solid red';
  } else if (this.colorNum < 0.5){
    styleSettings.border = '10px solid yellow';
  } else if (this.colorNum < 0.75){
    styleSettings.border = '10px solid blue';
  }




  this.$node.css(styleSettings);


};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);


makeBlinkyDancer.prototype.step = function() {

  //makeBlinkyDancer.prototype.step.callCount++;
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this); 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

}; 

//makeBlinkyDancer.prototype.step.callCount = 0;                                      