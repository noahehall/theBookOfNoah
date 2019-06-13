- Algorithms for dummies
  - John paul mueller
  - luca massaron


# Continue Learning
## Algorithms
  - [making toast algorithms](https://www.google.com/search?q=making+toast+algorithm)
  - [euclidean algorithm](https://www.google.com/search?q=euclidean+algorithm)
  - [bayes theorem](https://www.google.com/search?q=bayes+theorem)


## algorithm problems
  - [change making problem](https://www.google.com/search?q=change+making+problem)


## other things
  - [intel xeon phi](https://www.google.com/search?q=intel+xeon+phi)
    - processor add-on for performing compute-intensive tasks e.g. machine learning
  - [nvidia tesla p100](https://www.google.com/search?q=nvidia+tesla+p100)
    - supports neural network algorithms among other things
  - [ibm artificial neurons](https://www.google.com/search?q=ibm+artificial+neurons)
    - memory that simulates the human brain
  - [proportional integral derivative](https://www.google.com/search?q=proportional+integral+derivative+algorithm)


## Books
  - *Art of computer programming* Donald E. Knuth
  - *Machine learning for dummies* John Mueller and Luca MAssaron


# Algorithms - background
  - algorithms are all about finding solutions
    - i.e. present methods for solving formulas
    - given a particular input, you should expect a specific output
    - consider the inputs
      - often require changing the data to match the algorithms requirements
        - it doesnt change the content of the data
        - just the presentation to help you see patterns new patterns that werent apparent before but were actually present in the data all along
    - desired outputs
    - process/sequence of actions used to obtain a desired output fromm a given input

  - algorithms can see multiple presentations
    - recursive vs iterative

  - elements of all algorithms
    - describe the problem
    - create a series of steps to solve the problem

  - `data`
    - to create a solution you need data on which to base a conslusion
    - the size and complexity of data sources can greatly affect the solution resolution
    - humans think about dta in nonspecific ways and apply various rules to the  same data to tunderstand it in ways that computers never can
    - computers view of data is structued, simple, uncompromising, and uncreative
      - you have to consider data from the computers point of view when using algorithms
      - computers only see ones and zeros
      - a large part of algorithms is making the data appear in a form that the computer dan use when using the algorithm to find a solution to an issue
      -
  - algorithms have two main perspectives
    - issues - problems tha tyou need to solve
      - can describe the desired output of an algorithm
      - describe a hurdle you must overcome to obtain a desried output
    - solutions
      - the methods, or steps used to address the issue
        - can related to just one step or many steps within the algorithm
        - the output of an algorithm, i.e. the response to the last step is the solution
  -


## General Use Cases
  - making your day an algorithm that solves the problem of how to live successfully while expending the least amount of energy possible
  -
## General terminology
  - `equation`
    - numbers and symbols that, when taken as a whoe, equate to a specific value
    - always contains an equals sign

  - `formula`
    - combination of numbers and symbols used to express information or ideas
    - generally show the relationship between two/more variables

    - `function`
      - a way to map some inputs to a response
      - a transformation (based on math operations) that transform
      -
  - `algorithm`
    - sequence of steps used to solve a problem
    - `finite`
      - the algorithm must eventually solve the problem
    - `well-defined`
      - series of steps must be precise and present steps that are understandable
    - `effective` an algorithm must solve all cases of hte problem for which someone defined it
      - failures should bhe inputs
      - often require changing the data to match the algorithms requirements
        - it doesnt change the content of the data
        - just the presentation to help you see patterns new patterns that werent apparent before but were actually present in the data all along
    - desired outputs
    - process/e rare and occur only in situations that are acceptable for the intendsorting ed algorithm use

  - `parallel processing` performing more than one algorithmic step at a time

  - `neural networks`
    - technology that is used to simulate human thought and make deep learning tehcniques possible for machine learning scenarios

  - `pyrrhic victory`
    - one in which someone wins every battle but ends up losing the war because the cost of the victory exceeds the gains of winning by such a large margin

  - `problem space`
    - an environment in which a search for a solution takes place
    - things to consider
      - `space complexity`
        - maximum number of nodes that will fit in memory
      - `time complexity`
        - the maximum number of nodes created to solve the problem
          - determines whether all of the nodes will fit into memory
        - the standard measure is time, which you set equal to the  number of operations, and indicates the complexity of the algorithm
      - `branching factor`
        - the average number of nodes created in the `problem space graph` to solve a problem
    - `problem space graph`
      - visual representation of the problem space
      - each node of hte problem space graph represents a state
      - the edges represent operations
      - movement along the edges represent a state transition      -
    - example
    - `problem depth`
      - the minimum number of state transitions required to reach a solution
      - a tile game that has 8 tiles in a 3x3 frame, each tile shows one part of a ppicture and the tiles start in somme random order so that the picture is scrambled
        - `problem instance`
          - the combination of the start state, randomized tiles and the goal state (tiles ina particular order)
    -

## other things
  - GPUs are commonly used chips for perming algorithm-related tasks
    - specialize in providing support for math-intensive tasks, especially those that involve data transformations
  - using multiple cores makes parallel processing possible
  -
  -
## Types of algorithms
  - searching
    - locating information or verifying that the information you see is the information you want
    - use cases
      - finding a website
  - sorting
    - determining which order to use to present information
    - many algoirthms require data in the proper order to work dependably
    - use cases
  - transforming
    - converting on sort of data to another sort of data
    - use cases
      - understanding and using data effectively
  - scheduling
    - making the use of  resources fair to all concerned
    - use cases
      - traffic lights
      - parallel processing
  - graph analysis
    - deciding on the shortest line between two points
    - use cases
      - GPS
  - cryptography
    - analyze data, put it into some other form and then return it to its orginal form later
    - use cases
      - security


# algorithm design
  - `cluster computing`
    - network computers together using special software
    - a master computer can use the the processors of slave computers running an agent
      - agent - a kind of in memory backgorund application that makes the processor available
    - offload pieces of th eproblem to a number of slave copmuters
    - as each computer in the network solves its part of th eproblem, it sends the results back to the master,
    - the master then puts the pieces together to create a consolidated answer
  - `distributed computing`
    - another version of cluster computing but with a looser organization
  - algorithms consist of a series of steps used to solve a problem
  - you need to know how to measure algoirthms
    - usability
    - size
    - resource usage
    - cost
  - solving a problem
    - discover how ohter people have created new problem solutions
    - know whaat resources you have on hand
    - determine the sorts of solutions that wowrked for similar problems in the pastg
    - consider what sorts of solutions havent produced desirable result
  - `problem solution`
    - the solution to the problem you are trying to solve
  - `counterexamples`
    - playing the devils advocate by locating scenarios where a solution fails
    - potentially disprove the solution
    - provide boundaryies that define the solution better
    - consider situations in which the hypothesis used as a basis for the solution remains untested
    - help you understand the limits of the solution
    - `ensemble` of simple algorithms ca n produce better results with fewer potential counterexamples than a single complex algorithm
    - example
      - all prime numbers are odd
        - 2 is prime but its even
        - 1 is odd but isnt considered a prime number
  - `good solution`
    - provides optimal results that can be measured and best meets the needs of the problem and problem domain and resources
      - you have to create an environment in which you can fully test
        - the algorithm
        - the state it creates
        - the operators it uses to change those states
        - and the time required to derive a solution
      - example
        - providing change
          - you want to use the fewest amount of coins to reduce reduce equipment wear and the weight of coins required and the time required to make change
  - `ensemble`
    - a series of algorithms used together to create a desire result
  - `setting time` the time during which the algorithm controlling the machine hasnt yet found the right answer
  -

# algorithm evaluation
  - `analysis of algorithms`
    - the branch of computer science devote dto understanding how algorithms work in a formal way
      - measures resources required in terms of the number of operations an algorithm reqires to reach a solution or by its `occupied space`

  - determining whether an algorithm actually performs in the way you need it to
  - perform accurate comparisons to know whether you really do need to discover a new mehtod of solving a problem when an older solution works to slowly or uses to many resources

## complexity
  - a measure of algoirhytm efficiency in terms of tiem usage because each operations takes some time
  - the more operations an algoirthms requires the more complex it is
  - measuring operations
    - `random access machine` (RAM)
      - `abstract machines` consider how well an algorithm would work on a computer without testing it on the real thing yet bound by the type of hardware youd use
        - performs basic arithmetic opeartions and interacts with information in memory
        - `time step` every time the machine does something it takes time
          - i.e. each operation
      - `ram simulation`
        - count each simple operation (arithmetic ones) as a time step
        - break complex operations into simple arithmetic operations and count time steps as defined in step 1
          - count time because when you can employ a solution in so many environments and its resource usage depands on so many factors you have to find a way to simplify comparisons os that they become standard
            - otherwise you cant compare alternatives
        - count every data access from memory as one time step
        - the analysis of algorithms  proposes to use the number of operation syou get from a ram simulation and turn them into a mathematical function expressing how yoru algorithm behaves in terms of time which is a quantifications of the steps or operations required when the number of data inputs grows
          - e.g. if your aglorithm sorts object you can express complexity using a function that reports how many operations i t needs depending on the number of objects it receives
          -
  - measuring space
    - e.g. memory usage
    - you consider space when your problem is greedy for resources
    - resource consumption aspects
      - running time
        - for quicker execution you can increase memory or power consumption
      - computer memory requirements
      - hard disk usage
      - power consumption
      - data transmission speed in a network
      -
  - `benchmark` real computer measures where you run the code and verify the time required to run it
    - as opposed to a `RAM simulation` with uses pseudo code
    - is useful but lacks generalization like `RAM simulation`


# specific algorithms
## comparisons
  - when looking for a maximum value in an array
    - unsorted arraywhichc
      - `brute force` > `divide and conquer`
  - heuristic algorithms learn from previous failures
    - brute force solutions dont
    -

## greedy approach
  - one that makes an optimial choice at each problem-solving stage to obtain an overall optimal solution to solve the problem
    - this can oft times lead to a `pyrrhic victory`
  - it looks for an overall solution such that it chooses the best possible outcome at each problem solution state
  - `greedy reasoning`
    - views the problem one step at a time and focuses just on the steep at hand
    - often used as part of an optimization process

### issues
  - since a greedy solution uses the optimal solution at every stage, it may pick a non optimal solution
    - e.g. when giving change for $.40
      - greedy solution - .25 + .10 + (5 * .1)
      - optimal - 4 * .10
        - it will never pick a .10 if a .25 is available

### process greedy approach
  - you can make a single optimal choice at a given step
  - by choosing the optimal selection at each step you can find an optimal solution for the overall problem

### graph analysis
#### krusklas Minimum spanning tree (MST)
   - chooses the edge between two nodes with the smallest value, not the greatest value as the word greedy might initially convey
   - use cases
     - find the shortest path between two locations on a maps
     - perform graph-related tasks

#### prims Minimum spanning tree (MST)
  - splits an undirected graph in half then selects the edge that connects the two halves such that the total weight of the two halves is the smallest it can be
  - use cases
    - locate the shortest distance between the start and finish of a maze

    -
## brute force approach
  - one in which you try each possible answer one at a time to locate the best possible answer
  - very thorough but wastes time and resources in most cases
  - example
    - hacking a combination lock
      - start at 0,0,0,0
      - increment by 1 until you find the correct combination
  - use cases
    - finding a solution if one exsits is require d
    - the problem size is limited
    - you can use `heuristics` to reduce the size of the solution set
    - simplicity of implementation is more important than speed
  - doesnt require any domain specific knowledge to use one of these type of algorithms
    - as it tries every possible pathway without considering the environment
    - uses the simplest possible approach to solving the problem
    -

### breadth-first search
  - begins at the root node, explores each of the child nodes first and only then moves down to the next level
  - progresses level by level until it finds a solution
  - use cases
    - chcking for duplicate nodes


#### issues
  - it must store every node in memory
    - i.e. uses a considerable amount of memory for a large number of nodes

### depth-first search
  - begins at the root node and explores a set of connected c hild nodes until reaches a leaf node
  - it progresses branch by branch until it finds a solution
  - use cases
    - its memory efficient thus suited for problems with limited memory resources


#### issues
  - it must store ever node in memory which means that it might traverse the same node paths mmore than once
    - i.e.it might not find a solution at all
    - thus yoou must define a cutoff point to keep the algorithm from searching infinetely


### bidirectional search
  - searches simultaneously from the root node and the goal node until the two search paths meet in the middle
  - use cases
    - its time efficient because it finds the solution faster than many other brute force solutions
    - uses memory more efficiently that other approaches and always finds a solution

#### issues
  - complexity of implementation translating into a longer development cycle


## divide and conquer
  - divide the problem into smaller pieces each of which is manageable on its own
  - by making a problem simpler, you dan create a set of simpler steps to finding a problem solution
    - reduces  the time to find the solution
    - reduces the number of resources untestedimproves you rchances of finding precisly the solution you need
  - example
    - looking for a book in a library (i.e. dewey decimal system)
      - divide the library into childrens and adults sections
      - divide the adults section into further categories, etc
      - give each category a code
      - map each book to a category code

### process divide and conquer
  - create a precise problem definition
  - divide the problem into manageable pieces

## heuristic approach
  - relies on `self-discovery` and produces sufficiently useful (not optimal but good enough) results
    - i.e. the algorithm makes an educated guess and then tries again when it fails
  - `self-discovery`
    - the process of allowing the algorithm to show you a potentially useful path to a solution but you still rely on human intuition and understanding to know whether the solution is the right one
  - `cost function`
  - use cases
    - advantage in solving complex problems


### issues
  - are complex
  -

### pure heuristic approach
  - expands nodes in order of their cost to perform an intelligent cost-based search for the solution
  - it maintains two lists
    - `closed list` contains the nodes it has already explored
    - `open list` contains the nodes its yet to explore
  - in each iteration  the algorithm expands the node with the lowest possible cost
    - all its child nodes with low cost are placed back in the open list
    - the high cost nodes are deleted

### A* search
  - tracks the cost of nodes as it explores them using the eqution `f(n) = g(n) + h(n)`
    - n - the node identifier
    - g(n) - the cost of reaching the node so far
    - h(n) - the estimated cost to reach the goal from the node
    - f(n) - the estimated cost of the path from n to the goal
  - the idea is to search the most  promising paths first and avoid expensive paths

### greedy best-first search
  - always chooses the path that is closest to the goal using the equation `f(n) = h(n)`
  - can find solutions quite quickly but it can also get stuck in loops
    - thus many people dont consider it an optimal appraoch to finding a solution
  -