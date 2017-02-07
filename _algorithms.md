# current
  - thinking in aglorithms
    + page 1
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
  - stability/robustness
  - features & functionality
  - modularity in design
  - security
  - usability (user-friendliness)

## Algorithms:
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
