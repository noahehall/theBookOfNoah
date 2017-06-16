# bookmark
  - https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/p/challenge-iterative-factorial
# factorial function
  - `n by n!`: production of integers 1 through n,
    + 5! = 1 * 2 * 3 * 4 * 5
  - useful for:
    + how many different orders there are for things
    + how many different ways we can combine things
    + how many different ways can we arrange n things?
      - For each of these n nn choices, we are left with n-1 n−1n, minus, 1 choices for the second thing, so that we have n ⋅ (n-1) n⋅(n−1)n, dot, left parenthesis, n, minus, 1, right parenthesis choices for the first two things, in order. Now, for each of these first two choices, we have n-2 n−2n, minus, 2 choices for the third thing, giving us n ⋅ (n-1) ⋅ (n-2) n⋅(n−1)⋅(n−2)n, dot, left parenthesis, n, minus, 1, right parenthesis, dot, left parenthesis, n, minus, 2, right parenthesis choices for the first three things, in order. And so on, until we get down to just two things remaining, and then just one thing remaining. Altogether, we have n ⋅ (n-1) ⋅ (n-2) ⋅s 2 ⋅ 1 n⋅(n−1)⋅(n−2)⋯2⋅1 ways that we can order n nn things. And that product is just n! n! ( n nn factorial), but with the product written going from **n down to 1 rather than from 1 up to n.**
    + how many ways you can choose things from a coolection of things
      -  suppose you are going on a trip and you want to choose which T-shirts to take. Let's say that you own n nn T-shirts but you have room to pack only k kk of them. How many different ways can you choose k kk T-shirts from a collection of n nn T-shirts? The answer (which we won't try to justify here) turns out to be
      **n! / (k! ⋅ (n-k)!) n!/(k!⋅(n−k)!)**

# background
  - The factorial function is defined for all positive integers, along with 0
    + 0: we define 0! to equal the identity for multiplication, which is 1.
