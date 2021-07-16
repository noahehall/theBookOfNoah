# calc2
  - 60% is trig

# calc1
## teacher office hours
  - tues + thursday 6:10 -> 6:50 in G206
  -
## exams
### exam 1 questions
  - problem 62 in 1.1
  - composite functions
    - find f(x)
    - find g(x)
      ```js

      ```



## pre calc
## functinos
  - definition: `f:(x is input) -> y is output`
  - domain / range
    - domain: is X (the input) -> the set of all inputs x
    - range: is Y (the output) -> the set of all output Y
      ```js
        // find domain/range of
        // TODO: confirm thisd
          `y = ROOT(x-2)`
          // graph starting at x = 2, sloping up to the right

        // use interval notation
        // domain: x >= 2 = [2, INFINITY)
        // range: y => 0 = [0, INFINITY)

        // y = |X| + 2
        // graph: top left diagnal down to 2, then diagnal up to top right
        // domain: -INFINITE < x < INFINITE = (-INFINITY, INFINITY) = set of all real numbers
        // range: y >= 2 = [2, INFINITY) =
      ```
  - composition functions : `(fog)x === f(g(x))`
  - TODO: study this
    ```js
      if `g:x (is input) -> w (is output)`
        `w = g(x)`
        `f:w -> y` -> `f(w) = f(g(x))`
        `y = (fog)(x) = f(g(x))`


      if `f(x) = x^2 -> g(x) = sin x`
        `(fog)(x) = f(g(x)) = f(sin x) = (sin x)^2 = sin^2 x`

      if `(gof)x = g(f(x)) = g(x^2) = sin(x^2)`

      if `g(x) = 2x + 1, h(x) = 6x + 7`
      find `f(x) such that f(g(x)) = h(x)`
          `f(g(x)) = h(x)`
          `f(2x +1) = 6x + 7`
            // rewrite right side in terms of left side
              ` = 3(2 + 1) + 4`
              `f(x) = 3x + 4`
          ``
            // every x you see replace with g(x)
          if `f(x) = 3x + 4, and h(x) = 6x + 7`
          then `f(g(x)) = h(x)`
            `3g(x) + 4 = 6x + 7`
            `3g(x) = 6x + 7 - 4`
            `g(x) = (6x + 7 - 4) / 3`
            `g(x) = 2x + 1`


          if `g(x) = x + 1, h(x) = x^2 + 2x +7`
          find `f(x)` such that `f(g(x)) = h(x)`
            `f(g(x)) = h(x)`
            `f(x + 1) = x^2 + 2x + 7`
              // rewrite the right side in terms of the left side
              ` = (x+1)^2 `
              ` = x^2 + 2x + 1`
              ` = x^2 + 2x + 1 + 6`
                // every x + 1 === f(x)
                // replace every x+1 with f(x)
              `f(x) = x^2 + 6`

          if `f(x) = 4x + 5, h(x) = 6x +7`
            // find f(x) such that f(g(x)) = h(x)
                                   // g(x) === 4x + 5

          // given f and g, sketch (fog)x
          // f(x): looks like a music sine wave crossing X
          // g(x): is two separate lines
    ```
    -

## examples
## algorithms
  ```js
    `(a+b)^2 = a^2 + 2ab + b^2`
    `(a-b)^2 = a^2 - 2ab + b^2`
    `(a+b)^3 = a^3 + 3a^2b + 3ab^3 + b^3`
    `a^3 + b^3 = (a + b)(a^2 - ab + b^2)`
    `a^3 - b^3 = (a - b)(a^2 + ab + b^2)`
    `a^2 - b^2 = (a - b)(a + b)`


  ```

## graphs
  ```js
    // parabala
      `y = x^2` // U shape with bottom at y = 0
      `y = x^2 + 1` // u shoape with  bottom at y = 1


  ```

## geometry
  ```js
    // triangle: find the x
    // TODO: confirm this
      3 is on bottom
      4 is on right (straight up)
      x is diagnal bottom to right
        x === 5
  ```
