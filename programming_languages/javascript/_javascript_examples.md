# [debounce]
  - [david walsh1](https://davidwalsh.name/javascript-debounce-function)
  - [david walsh + underscore](https://davidwalsh.name/function-debounce)
  - to accomplish taxing tasks, a debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance.
  - [lodash debounce](https://lodash.com/docs/4.17.4#debounce)
  - limits the rate at which a function can fire.
    ```js
      // Returns a function, that, as long as it continues to be invoked, will not
      // be triggered. The function will be called after it stops being called for
      // N milliseconds. If `immediate` is passed, trigger the function on the
      // leading edge, instead of the trailing.
      function debounce(func, wait, immediate) {
      	var timeout;
      	return function() {
      		var context = this, args = arguments;
      		var later = function() {
      			timeout = null;
      			if (!immediate) func.apply(context, args);
      		};
      		var callNow = immediate && !timeout;
      		clearTimeout(timeout);
      		timeout = setTimeout(later, wait);
      		if (callNow) func.apply(context, args);
      	};
      };

      // You'll pass the debounce function the function to execute and the fire rate limit in milliseconds.  Here's an example usage:

      var myEfficientFn = debounce(function() {
      	// All the taxing stuff you do
      }, 250);

      window.addEventListener('resize', myEfficientFn);
    ```

# [throttling]
  - [remysharp](https://remysharp.com/2010/07/21/throttling-function-calls)
  ```js
    // Below is an actual throttle function, that fires a message every 250ms by default (rather than at the end of a burst of events):

    function throttle(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last,
          deferTimer;
      return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
    // So when you use this, moving the mouse around the example below, will echo out the tick on the first time you move, but then every 1 second until you stop moving the mouse:

    $('body').on('mousemove', throttle(function (event) {
      console.log('tick');
    }, 1000));
  ```

# [request animation frame]
  - [html5rocks](https://www.html5rocks.com/en/tutorials/speed/animations/)
