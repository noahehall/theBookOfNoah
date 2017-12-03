# fibonacci numbers
  - 0, 1, then add the sum of the previous numbers
  - an algorithm that takes a non-negative integer N and returns the fibonacci number

# naive solution: FibRecurse(20)
  - T(n): is naive and slow because it recomputes previouse calls multiple times, e.g.  FibRecurse(20) will recompute f(n-3) 3 times, f(n-4) computed 5 times
  ```
    if (n <= 1)
      return n
    else
      return FibRecurse(n - 1) + FibRecurse(n - 2)
  ```

# efficient solution
  - T(n): T(n) = 2n+2, so T(100)= 202
  ```
    create an array F[0...n]
    F[0] <--- 0
    F[1] <--- 1
    for i from 2 to n:
      F[i] <-- F[i-1] + F[i-2]
    return F[n]
  ```
