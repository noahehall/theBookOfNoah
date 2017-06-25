# questions
  - naive solution: algorithms usually takeen directly from the problem definition, but takes a considerable amount of time
  - algorithm proofs
    - by induction
    - by direct computation
    - formula theorom
  - algorithm `proofs`
  - wtf is logn again?

# answers
  - Integer Overflow: a number that exceeds the limits, e.g. in C++ a large number as 9,000,000,000 does not fit into the standard C++ int type (on most modern machines, it ranges from −2,147,483,648 to 2,147,483,647).
  - stress test: e.g. inputting a large data set to test an algorithms capability to handle it
# links
  - [recursion by khan academy](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion)
  - [permutations, combinations (statistics)](https://www.khanacademy.org/math/statistics-probability/probability-library#permutation-lib)
  - [intro to greatest common divisor](https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-greatest-common-divisor/v/greatest-common-divisor-factor-exercise)
  - [dynamic programming: fibonacci](http://www.cs.usfca.edu/~galles/visualization/DPFib.html)
  - [lemma](https://en.wikipedia.org/wiki/Lemma_(mathematics))
    0.  a lemma can be considered a minor result whose sole purpose is to help prove a theorem  – a step in the direction of proof
    1. e.g. in order to solve the *Greatest common divisor* algorithm, a key **lemma** is to know that:
      1. let a` (a prime) by the remainder when a is divided by b, then gcd(a,b) = gcd(a`,b) = gcd(b,a`)
        - i.e. the common divisors of a and b, is the same as the common divisors of a` and b
  - [asymptotic notation tutorial](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
  - [intro to logarithms](https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/a/intro-to-logarithms)
# NOTES
  - modern machines can perform roughly 109 basic operations per second (this depends on a machine of course, but 109 is a reasonable average estimate).
# best Practices
  1. dont bruteforce anything, always think
    - if I store the result of this calculation, will future calculations be easier?
  2. can I reduce the LOC? this will shorten T(n)
  3. are their any key **lemma*s? intermidiary algorithms that will help you solve your current problem?
    - usually the correct algorithm requires knowing something interesting about the structure of the  problem

# background

# testing
  - A few small manual tests.
  - A test for each possible type of answer (smallest answer, biggest answer, answer doesn't exist, etc.)
  - Test for time/memory limit: generate a test with the largest possible size of input ("max test"), run your program, measure time and memory consumption.
  - Tests for corner cases:
    + Smallest possible "n": the length of the input sequence or string, the number of queries, etc.
    + Equal numbers, equal letters in the string, more generally, equal objects in the input. Any two objects that are not restricted to be different in the problem statement can be equal.
    + Largest numbers in the input allowed by the problem statement - for example, to test for integer overflow.
    + Degenerate cases like empty set, three points on one line, a tree which consists of just one chain of nodes.
## stress testing
  - a program that generates random tests in an infinite loop
    - for each tests it compares the results from two alternative solutions
    - great for testing different solutions for the same problem
    - when you find a test case where alternative solutions give different answers, you can debug and figure out why, revise the solutions, and run the test case again
  - The idea behind stress testing is that:
    + if: you have two correct solutions, and the answer to the problem is unique, then for any possible test case they are guaranteed to give the same answer.
    + If: however, at least one of the solutions is incorrect, then with very high probability there exists a test on which their answers differ.
    + The only case when it is not so is when there is a common mistake in both solutions, but that is very unlikely (unless the mistake is somewhere in the input/output routines which are common to both solutions - check for that separately).
    + if one solution is correct and the other is wrong, then there obviously exists a test case on which they differ.
    + If both are wrong, but the bugs are different, then most probably there exists a test on which one solution gives a correct answer and another gives wrong answer, so they differ.
  1. The solution you want to test.
  2. A different, possibly trivial and very slow, but easy to implement and obviously correct solution to the problem.
  3. A test generator.
  4. An infinite loop in which a new test is generated, it is fed into both solutions, then the results are compared, and if they differ, the test and both answers are output, and the program stops, otherwise the loop repeats.
  - steps
    1. generate random test
      - start with small and quick random tests
      - bump up to larger and larger tests
    2. launch both solutions
    3. comp results
    4. if results differ, halt the loop
    5. if results are identical, continue loop
## testing best practices:
  - It is very important to write programs that work correctly on all the allowed inputs.
  - Testing is essential to writing correct programs.
  - First test on a few small manual tests, then test for each type of answer, then test on large test cases for time limit and memory limit, then test on corner cases.
  - After that, apply stress testing to ensure your program works - it will almost always lead to correct solution. You can do it before your first attempt to submit your solution - and will often get it right from the first attempt!
  - Stress testing consists of implementing the intended solution, another simple possible slow solution, a test generator and an infinite loop which generates tests and compares answers of the two solutions.
  - Always try to find the smallest test cases on which your solution fails.
Try different regions of the test space when generating cases for stress testing.

# algorithm problem types
  - simple problems:
    1. has linear scan
    2. cannot do much better
    3. the obvious program works
  - moderate problems:
    - shortest path between locations
    - best pairing items based on configuration
    - measure similarity of documents
    - description of above
      1. not clear how to do
      2. simple ideas too slow
      3. room for optimization
  - difficult problems
    - artificial intelligence problems
    - understand natural language
    - identify objects in a photograph
    - play games well
    - description of above
      1. hard to even clearly state
  - good algorithms problems
    1. clearly formulated (mathmetical problems)
    2. hard to do efficiently
# algorithm analysis
  - running time: let `T(n)` denote the number of lines of code executed by `someFunction(n)`
    + good estimate for determining how long it would take a computer that can execute a billion of code each year

# computing run times
  - need to know:
    1. speed of computer
    2. system architecture
      - control unit,
      - airhtmetic logic unit,
      - accumulator
      - compiler used for your programing language that turns your code into machine code and what optimizations it uses
      - details of the memory hierarchy
        - if you can do it all in RAM, its the best
        - if you need to save things to disk, the Read/Write of the disk will slow you down
  - reasonable way is to know runtime without knowing the above, and get results that work for large inputs
## asymptotic notation
  - idea:
    1. measure runtime in a way that ignores constant multiples
    2. asymptotic runtimes: how does the runtiem scle with input size
      - as the input size gets larger, does the runtime get larger by n, n2, or n3? etc.
        1. the difference between n and n squared affects runtimes greater than any constant multiple will
          - so ignore constant multiples and focus on asymptotic differences
    3. you can ignore the messy details in runtime analysis and focus on large input

  - assumptions:
    1. most issues in calculating run time can be multiplied by (some large) constant
      - if your program is heavy on mulitplications, it may take 3x as long
      - if your disk lookups require 3
## big-O notation
  - a type of asymptotic notation that allows you to ignore complicated details when figuring out algorithm runtimes
    + if two things are off by some constant multiple, that mulitple can be ignored
  - Big-O says that your algorithm runtime is bounded above some multiple of another thing
  - issues with big o
    1. using big-O loses important information about constant multiples
    2. big-O is only asymptotic:all it tells you is what happens when you put really large input into the algorithm
  - big-O definition
    ```
      1. two functions: f and g
        - f(n) === O(g(n))
      2. two constants: N and c
        - all n >= N and f(n) <= c * g(n)
      3. if 1 and 2 above are true
        - f is bounded above by some constant multiple of g
      3. formal definition
        f(n) === O(g(n))(f is Big-O of g) or f <= g
          if there exist constants N and c so that for:
            all n >= N, f(n) <= c * g(n)
    ```
  - best practices
    1. once you have a solid big-O runtime, you can then look into the finer (constant factors; memory, etc) details to figure out how you can save additional runtime
    2. sometimes big-O fails you on practical applicataions, where very large numbers are never relevant, in that case you need to look at best practice number 1
    3. if you want to make your program fast, you need to make use of another notations and analysis
## common rules
  1. multiplicative/division constants can be removed
    - ` 7n^3 = O(n^3)`
    - `(n^2)/3 = O(n^2)`
  2. if you have two powers of `n`, the one with the larger exponent grows faster (is worse)
    -`n^a < n^b for O <a < b`
    - `root(n) = O(n)` < `n = O(n^2)`
  3. any polynomial vs exponential, the exponential always grows faster
    - `n^5 = O(root(2)^n)`
    - `n^100 = O(1.1^n)`
  4. any power of `logn^a < n^b`
    - `log(n)^3` = O(root(n))``  < `nlogn = O(n^2)`
  5. if you have some sum of terms, smaller terms can be omitted
    - `n^2 + n` = O(n^2)`
    - `2^n + n^9 = O(2^n)`
## calculation steps
  1. write down each distinct operation in the algorithm
  2. compute big-O for each operation
  3. add up all the operations and pick the most dominant term
### common big-O runtimes for operations:
  - create an array: `O(n)`
  - instantiate an array index: `O(1)`
  - loops (not embedded): `loop O(n) times`
  - adding two things: `O(n)`
  - a loop with an embedded O(n) operation: `O(n^2)`
    -  this is because the loop is `O(n)`, and the embedded operation is `O(n)`, so to do the entire operation its `O(n) * O(n)`
  - calling a function: `O(1)`
## calculation examples
  1. O(n^2)
    ```
      3n^2 + 5n + 2 = O(n^2)
        because if n >= 1
          3n^2 + 5n + 2 <= 3n^2 + 5n^2 + 2n^
            because 3n^2 + 5n^2 + 2n^ = 10n^2
    ```
  2. O(n)
    ```
      n + log2(n) + sin(n) = O(n)
    ```
  3. O(nlog(n))
    - log2(n), log3(n), logx(n) differ by constant multiples, dont need to specify the base that is used
    ```
      4nlog2(n) + 7 = O(nlog(n))
    ```
## other notation
  - if you want to say your algorithm runtime is bounded below some multiple of another thing
    ```
      f(n) = bigOmega(g(n)) or f > g if for some c,
        f(n) >= c * g(n)
          i.e. f grows no slower than g

    ```
  - if you want to say your algorithm runtime grows at the same rate as some other thing
    ```
      f(n) = bigTheta(g(n)) or f === g if f = O(g) and f = omega(g)
        i.e. f grows at the same rate as g
        which means f is both O(g) and bigOmega(g)
    ```
  - if you want to say that your algorithm runtime grows strictly slower than some other thing (little o of g(n))
    ```
      f(n) o(g(n)) or f < g
        if as f(n)/g(n) approaches O then n approaches infinite, f grows slower than g
    ```
# algorithm problems

# algorithm types
