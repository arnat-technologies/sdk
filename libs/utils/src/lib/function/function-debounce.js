
/* **********************************

vanilla javascript debounce function

  @params:
    -> func [the function being debounced]
    -> wait [time in milliseconds to wait before firing func]
    -> now [boolean to fire func immediately]

********************************** */

function debounce(func, wait, now) {

  var timeout;

  return function() {
    
    var self    = this,
        args    = arguments,
        callNow = now && !timeout,
        runlater  = function() {
          timeout = null;
          if (!now){
            func.apply(self, args);
          }
        };

    clearTimeout(timeout);

    timeout = setTimeout(runlater, wait);

    if (callNow) {
      func.apply(self, args);
    }
  };
};

/* **********************************

function use:

  @summary: 
    myFunction() needs to be called inside of runMyDebouncedFunction(). 
    runMyDebouncedFunction() is called from the event listener. 
    In this case, it is on scroll but it can be any function.

********************************** */

function myFunction(){
    alert('You just scrolled!');
}

var runMyDebouncedFunction = debounce(function() {
  myFunction();
}, 50);


window.addEventListener('scroll', function(e) {
  runMyDebouncedFunction();
});
