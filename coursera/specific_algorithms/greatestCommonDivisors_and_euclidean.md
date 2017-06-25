# bookmark
  - https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/p/challenge-iterative-factorial
# createst common divisors
  - definition: for integers, `a` and `b`, their greatest common divisor, or `gcd(a, b)` is the largest integer `d` so that `d` divides both `a` and `b`
    1. put fraction a/b in simplest form
    2. divide number and denominator by d, to get (a/d)/(b/d)
      1. we need d to divide a and b
      2. we need d to be as large as possible
  - useful for
    1. number theory: very import for computin prime numbers
    2. cryptography: since cryptography is based on prime numbers, GCD calculations are reallly important
  - computation:
    ```
      input: integers a,b >= 0,
      output: gcd(a,b)
    ```
# naive solution
  ```
    gcd(a,b)
      best <--- 0
      for d from 1 to a+b:
        if a/d and b/d:
          best <---- d
      return best
  ```
  - T(n): approximately a+b
    1. very slow for large numbers(e.g. 20 digits)

# euclidean solution
  ```
    euclideanGCD(a,b)
      if b =0:
        return a
      a` <--- the remainder when a/b
      return euclideanGCD(b,a%b)
    /**
     * each step reduces the size by about af actor of 2
     * takes about log(ab) steps, each being a single division
     * GCDs of 100 digit numbers takes about 600 steps
     *
  ```
