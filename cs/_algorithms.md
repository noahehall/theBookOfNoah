# current
  - thinking in aglorithms
    + page 18: lower and upper bounds
# class: https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb
  37 minutes

# next up
  - [data structures and algorithms in js](https://mgechev.github.io/javascript-algorithms/data-structures_avl-tree.js.html)
  - [quora list](https://www.quora.com/How-do-I-start-learning-or-strengthen-my-knowledge-of-data-structures-and-algorithms/answers/20773316?ref=fb_page)

## Design and analysis of algorithms
  + is all about designing and analyzing algorithms for a given problem in terms of time (performance) and memory (Ram/disk) & communication (i/o) (resource usage)
  + efficient procedures for solving problems with large inputs

### Good Quotes
  + algorithms are on the cutting edge of innovation
    - people generally dont do things because of performance and resource usage (two legs of algorithms) if you can do something more performance &&|| less resources you have an innovation!

## whats more important that performance?
  - maintainability
  - correctness
  - simplicity
  - cost (dev time)
  - stability/robustness algorithms used to find approximate solutions to optimization problems. Approximation algorithms are often associated with NP-hard problems; since it is unlikely that there can ever be efficient polynomial-time exact algorithms solving NP-hard problems, one settles for polynomial-time sub-optimal solutions
  - features & functionality
  - modularity in design
  - security
  - usability (user-friendliness)

## geometry
  - convex hull: the smallest convex shape that fully encloses all points (image a scatter chart)

## Best Practices:
  1. design of efficient algorithms start by selecting the proper data structures in which to represent the problem
  2. for many problems, no single optimal algorithm exists. Choosing an algorithm depends on understanding the problem being solved and the underlying probability distribution of the instances likely to be treated, as well as the behavior of the algorithms being considered.
  3. classify an algorithm by determining its class, sometimes you have to subdivide as it might be multiple classifications, always choose the most complex classification when determining the algorithms performance (listed in increasing complexity)
    0. Constant: `O(l)`
    1. Logarithmic: `O(log n)`
    2. Sublinear: `O(n d ) for d < 1`
    3. Linear: `O(n)`
    4. Linearithmic: `O(n log n)`
    5. Quadratic: `O(n 2 )`
    6. Exponential: `O(2 n )`

## Terminology
  - multiplicative constant: an algorithm that performs a computation using integers stored using 64 bits may take twice as long as a similar algorithm coded using integers stored in 32 bits
    + performance costs that differ by a multiplicative constant are asymptotically equivalent,
  - asymptotic analysis: considering the performance of algorithms when applied to very very big input datasets.

## Just enough data structures
  1. Array: contiguous regions of memory indexed by an integer i to enable rapid access to the Ith element. An array is one-dimensional when each element fits into a word in the platform (e.g., an array of integers or Boolean values). Some arrays extend into multiple dimensions, enabling more complex data representations.

## Algorithm Basics
### types
  1. Naive: an algorithm is said to be naive when it is simple and straightforward but does not exhibit a desirable level of efficiency (usually in terms of time, but also possibly memory) despite finding a correct solution or it does not find an optimal solution to an optimization problem, and better algorithms can be designed and implemented with more careful thought and clever techniques.
  2. Greedy: solves an optimization problem in a series of steps by making a locally optimal choice at each step. For some problems, a greedy algorithm may produce a global optimum for all instances; we say that such problems may be solved greedily. For other problems, greedy algorithms will produce the correct answer only for some instances. When a greedy algorithm exists for a problem, it is generally the method of choice, because of its efficiency.
  3. divide and conquer:  is an algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.
  4. parallel: as opposed to a traditional serial algorithm, is an algorithm which can be executed a piece at a time on many different processing devices, and then combined together again at the end to get the correct result.
  5. approximation:  algorithms used to find approximate solutions to optimization problems. Approximation algorithms are often associated with NP-hard problems; since it is unlikely that there can ever be efficient polynomial-time exact algorithms solving NP-hard problems, one settles for polynomial-time sub-optimal solutions
  6. generalization:

### specific
  - Bentley–Faust–Preparata: BFP: algorithm for approximating a convex hull
    1. constructs an approximate convex hull by partitioning the points into vertical strips (Bentley et al., 1982). Within each strip, the maximum and minimum points (based on y coordinate) are identified (they are drawn in Figure 1-6 with squares around the points). Together with the leftmost point and the rightmost point in P, these extreme points are stitched together to form the approximate convex hull.
  - Sequential Search: examines a list of n ≥ 1 distinct elements, one at a time, until a desired value, v, is found.
  - *guessing algorithm*: start by guessing `n`, is it too low ? double it by half, is to too low ? double it by half, etc., and keep going up/down until find the correct solution
## Mathematics
  - all can be used to choose the correct algorithm for a specific problem
### Size of a Problem Instance
  - Problem Instance: is a particular input data set given to a program
    + in most programs, the execution time of a program increases with the size of the input data set
    + worse case problem instance: an algorithm exhibits its worst runtime behavior
    + average case: executing an algorithm on random problem instances; an attempt to describe the expectation an average user of the algorithm should have
    + best case: an algorithm exhibits its best runtime behavior
  - rate of growth: we describe the behavior of an algorithm by representing the rate of growth of its executing time as a function of the size of the input problem instance. Characterizing an algorithm’s performance in this way is a common abstraction that ignores numerous details.
    1. The computer on which the program is run, its CPU, data cache, floating-point unit (FPU), and other on-chip features
    2. The programming language in which the program is written, along with the compiler/interpreter and optimization settings for generated code
    3. The operating system
    4. Other processes being run in the background
      - the assumption with rate of growth functions: changing one of the four above (and others) will change the execution time of the program by a constant factor, and thus can be ignored
      - to use it:
        1. analyze the speed of an algorithm(s) to resolve a problem of a set N, and choose the one with the smallest execution time to find the optimal solution
        2. test the algorithm with best, average, and worst case size problem instances
#### Big O Notation
  - Big O notation: classify the behavior of an algorithm as it solves problem instances of increasing size, n
    + O(f(n)): where f(n) is comonly a function such as n, n^3, or 2^n
    + analyzes the efficiency (time) of code execution as the input gets larger
      + how much time it will take to solve a problem of increasing orders of magnitude
    + examples
      + O(1) = no loops and you just do something and return
      + O(n) = if you only loop once
      + O(n^2) = if you loop twice
      + O(log n) = as you add more inputs it takes less and less time, a diminishing adding of time
        + divide and conquer
        + recursion: costly because each functional call must be added to the stack which could lead to stack overflows due to memory running out
          + do recursion with loops
  - Lower (best) and Upper (worst) bounds:
    - some constant `c > 0` : a different `c` exists for upper and lower bounds
    - problem instance size `n0` is the point at which each problem instance is 'large enough' to satisfy the formula
      + a different `n0` exists for bount upper and lower bounds
    1. worst-case performance / upper bound: the execution time is classified as O(f(n)) and corresponds to the worst-case scenario
      - is never greater than directly proportiional to the size of the input problem instance, once the size is large enough
      - O(n) === `t(n) < c*n` for all `n > n0`
    2. best case performance / lower bound: the execution time of an algorithm is classified as Ω(f(n)) and corresponds to the best-case scenario
      - is never smaller than directly proportional to the size of the input problem instance
      - Ω(n) === `t(n) > c*n` for all `n > n0`
  - complexity theory and `Θ(f(n))`
    - combines lower and upper bounds to identify an accurate tight bound: when the lower bound is `Ω(f(n))` and the upper bound is also `O(f(n))` for the same classification `f(n)``
  -
    ```js
      3x2 +x +1 === O(n2)

    ```
#### performance families
  - compare algorithms: by evaluating their performance on problem instances of size `n`
    + time: used to determine which algorithms scale to solve problems of a nontrivial size by evaluating the running time needed by the algorithm in relation to the size of the provided problem instance
    + memory: a secondary performance evaluation is to consider how much memory/storage an algorithm needs
  - you must identify the mot expensive computation within an algorithm to determine its classification
  - list of evaluation functions in decreasing efficiency
    0. Constant: `O(l)`
      - algorithm that provides constant performance, e.g. comparing whether two 32bit numbers `x` and `y` are th same value should have the same performance regardless of the actual values of `x` and `y` up to some fixed size `k`
      - the problem size (i.e. `x` and `y`) cannot be `> k`
    1. Logarithmic: `O(log n)`
      - algorithms that succeed in finding an optimial solution by reducing the size of the problem instance by half each time
        + *guessing algorithm*: start by guessing `n`, is it too low ? double it by half, is to too low ? double it by half, etc., and keep going up/down until find the correct solution
        +
    2. Sublinear: `O(n d ) for d < 1`
    3. Linear: `O(n)`
    4. Linearithmic: `O(n log n)`
    5. Quadratic: `O(n 2 )`
    6. Exponential: `O(2 n )`

# recursion
  ```js
    recursive(max, current) {
      if (current > max) return; // base case
      recursive(max, current + 1)
    }
  ```

# sorting algorithms
## bubble sort
  - compare two things at a time and swap them if their out of order
  - O(n2)
  ```js

  ```
## insertion sort
  - good for arrays that are already/close to sorted
  - O(n)
  ```js

  ```
################ OLD NOTES ###############
### uncategorized
  - dynamic programming
  - trees

## DATA Structures
  - Trees: good for scheduling and sorting
    + binary search trees
    + balanced binary search trees
  - hash tables / dictionaries
  - Graphs

## Asymptotic Notations
  + for problem P1, there may be solutions S#...
    - which SN is good in terms of time and memory
      + time: execution speed
      + memory: less memory less i/o
  + Big (oh) aka O
    - as input N (x) increases then time complexity increases (y) stops getting more complex after a certain number of N

## Sorting
### [Insertion Sort](https://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/)
### [radix sort](https://en.wikipedia.org/wiki/Radix_sort)
## Matching

## RSA Encryption:
  - uses primary numbers that are really long

## Peak Finder:
### One Dimensionsal version
  - array filled with numbers, and you want to find the peak
  - B is a peak if: b >= A && B >= C
    + i.e. B is greater than the immediately surrounding items

#### Straight Forward algorithm
  - starts at the left / right, and goes the other way
  - look over n/2 elements if peak is in center
  - worst case: theta N, i.e. of the other of N, you will have to potentially search through all items to find peak
  - the asymptopic complexity is linear

#### Binary Search
  - is a divide and conquer algorithm
    + if a[n/2] < a[n/2 -1] then only look at left half
      - 1...n/2 to look for a peak
    + else if a[n/2] < a[n/2 +1] look at n/2+1...N for peak
    + else you must be at the peak
  - this is the BEST solution for 1 Dimensoinal peak finding

### two dimensional version
  - two dimensional array of N rows and N columns
  - A is a 2D peak if
    + A >= B, A>=D, A>=C, A>=E

#### Greed Assent algorithms
  - picks a direction, and follows it, until it finds a peak
