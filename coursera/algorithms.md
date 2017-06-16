# questions
  - naive solution: algorithms usually takeen directly from the problem definition, but takes a considerable amount of time
  - algorithm proofs
    - by induction
    - by direct computation
    - formula theorom
  - algorithm `proofs`
# answers
  - Integer Overflow: a number that exceeds the limits, e.g. in C++ a large number as 9,000,000,000 does not fit into the standard C++ int type (on most modern machines, it ranges from −2,147,483,648 to 2,147,483,647).
  - stress test: e.g. inputting a large data set to test an algorithms capability to handle it
# links
  - [recursion by khan academy](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion)
  - [permutations, combinations (statistics)](https://www.khanacademy.org/math/statistics-probability/probability-library#permutation-lib)
  - [dynamic programming: fibonacci](http://www.cs.usfca.edu/~galles/visualization/DPFib.html)
  - [lemma](https://en.wikipedia.org/wiki/Lemma_(mathematics))
    0.  a lemma can be considered a minor result whose sole purpose is to help prove a theorem  – a step in the direction of proof
    1. e.g. in order to solve the *Greatest common divisor* algorithm, a key **lemma** is to know that:
      1. let a` (a prime) by the remainder when a is divided by b, then gcd(a,b) = gcd(a`,b) = gcd(b,a`)
        - i.e. the common divisors of a and b, is the same as the common divisors of a` and b
# NOTES
  - modern machines can perform roughly 109 basic operations per second (this depends on a machine of course, but 109 is a reasonable average estimate).
# best Practices
  1. dont bruteforce anything, always think
    - if I store the result of this calculation, will future calculations be easier?
  2. can I reduce the LOC? this will shorten T(n)
  3. are their any key **lemma*s? intermidiary algorithms that will help you solve your current problem?

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
# algorithm problems

# algorithm types
