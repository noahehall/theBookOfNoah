f- Algorithms for dummies
  - John paul mueller
  - luca massaron

# TODO
  - skipped `performing essential data manipulations using python` cuz python is for pussies
    - but i need to reread the section
    - i gues ima ...


# Continue Learning
  - [big o cheatsheet](http://bigocheatsheet.com)

## Algorithms
  - [making toast algorithms](https://www.google.com/search?q=making+toast+algorithm)
  - [euclidean algorithm](https://www.google.com/search?q=euclidean+algorithm)
  - [bayes theorem](https://www.google.com/search?q=bayes+theorem)
  - [recursive tail calls vs trampoline](https://www.google.com/search?q=recursive+tail+calls+trampoline)
  - [khan academy algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)
  - [fibonacci heap](https://www.google.com/search?q=fibonacci+heap)

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
### hash functions
  - [SHA secure hash Algorithms](https://www.google.com/search?q=sha+algorithms)

## Books
  - *Art of computer programming* Donald E. Knuth
  - *Machine learning for dummies* John Mueller and Luca MAssaron

# data
  - to create a solution you need data on which to base a conslusion
  - the search size and complexity of data sources can greatly affect the solution resolution
  - humans think about dta in nonspecific ways and apply various rules to the  same data to tunderstand it in ways that computers never can
  - computers view of data is structued, simple, uncompromising, and uncreative
    - you have to consider data from the computers point of view when using algorithms
    - cosearchmputers only see ones and zeros
    - a large part of algorithms is making the data appear in a form that the computer dan use when using the algorithm to find a solution to an issue
    -
## structured data
  - before you can do an ything wiht most data you must structure it in some manner so that you can begin to see what it does and does not contain
  - `structured data`
    - entails organizating data in some way so that all the data has teh same attribu5tes, appearance, and components
  - `organization`
    - you arent changing the data in any wayssimply making the data more useful
    - constrasts  with `remediating` or `shaping` data where you sometimes do change values to convert one data type to another or experience a loss of accurance e.g. with data, or when moving between data sources

## data from multiple sources
  - determine whether all datasets contain all the required data
    - consider whetherh all datasets provide jthe data you need or whether you need to remediate the data in some way to botain the desired result
  - check datasets for datat ype issues
    - e.g. are all dates in the same format and data type (strings vs date objects)
  - ensure all datasets place the same meaning on data elements
    - data from one source might have a different meaning that data created by another source
    - e.g. size of an itneger can vary between sources
      - 32 bit vs 16 bit
      - dates stored in milliseconds vs dates stored in seconds
  - verify the data attributes
    - to combine data from various sources you must understand the data attributes to ensure that you enterpret the data correctly
    - the more time you spend verifying the compatibility of data from each of the sources you want to use for d atat set the less likely you are to encounter problems

## remediation
  - when you find problems in your dataset you need to remediate it so that all datasets work properly with the algorithms you use
  - data duplication
    - e.g. when combining two/more datasets could create multip;e records when the data appears in more than one location
  - missing values
    - can skew the results of an algorithms output
    - you can set missing values to a standard value
    - use the mean of all values
      - this tends to make the missing values not count

## data structures
### stack
  - provides last in/first out (LIFO) data storage
  - issues
    - some lists dont perform well because lsit elements are stored in computer memeory and accessed using an index and memory poitners
    - `memory pointers` a number that provides the memory address of the data

### queues
  - first in/first out (FIFO) data structure

### dictionaries
  - can quickly provide access to specific data items using the key
  - `hash tables`
    - an array thatg maps keys to values
  - requirements
    - `key` must be unique
    - `key` must be immutable

### trees
  - helps you organize data quickly and find it in a shorter time than using other data storage techniques
  - use cases
    - `search`
    - `sort routines`
  - `nodes`
    - each item you add to the tree is a node
    - `root node` provides the starting point for the various kinds of processing you perform
    - `leaf node` always an ending point for the tree
    - `branch n ode` support either other branches or leaves
  - `links`
    - `nodes` connet to each other using link
    - the relationship between nodes is important because discussions about trees often consider the child/parent relationship between nodes
  - `traversing the tree`
    - means travelling between nodes via links
  - building a tree
    - `bottom up`
      - build the leaves first
    - `top down`

...
#### minimum spanning tree
  - defines the problem of finding the most economical way to accomplish a task
  - e.g.
    - when looking at a map you see the number of paths to get from point A to point B
    - each path has places where you must turn or change roads and each of these junctions is a vertex
    - the distnace between vertexes represents the edge weight
    - generally one path between point A and point B provides the shortest route
      -
  - `spanning tree`
    - the list of edges required to connect all the vertexes in an undirected graph
    - a single graph could contain multiple spanning trees
    - for an `unweighted graph`
      - its spanning trees are all the same length
      - and since all edges haave teh same length, and the order you visit them doesnt matter because the run path is all the same
        - all spanning trees have the same number of edges
    - for a `weighted graph`
      - edges have different lengths
        - minimum spanning tree is the spanning tree that guarantees a path with the least possible edge weight
  - kind of tree that maintains a balanced structure through reorganization so that it can provide reduced access times
  - the number of elements on the left size differs from the elements right side by at most one

#### unbalanced trees
  - places new data items wherever necessary inn the tree without regard to balance
  - this method of adding items makes buiding the tree faster but reduces access speed when searchiong or sorting

#### heaps
  - sophisticated tree that allows data insertions into the tree structure
  - the use of data insertion makes sorting faster
  - you can further classify these trees as `max heaps` and `min heaps`
    - depending on the trees capability to immediately provide the maximum or minimum value present in tree

#### graphs
  - a set of vertexes, nodes, or points connected by edges, arcs, or lines
    - using graphs enables you to decribe relationships between nodes
  - sort of a tree extension
    - you have `nodes` that connect to each other to create relationships
    - unlike binary trees
      - a graph can have more than one/two connections
      - `graph nodes` often have a multitude of connections
  - structures that present a number of nodes (vertexes) connected by a number of edges/arcs (depending on the presentation)
    - appear as ordered pairs in the form `g=(v,e)`
      - g - the graph
      - v - list of vertexes
      - e - list of edges that connect the vertexes
        - a numeric pair that expresses the two vertexes that it connects
  - most developers use dictionaries, lesser times lists to build graphs
    - dictionaries
      - key - node name
      - values - connections for the node
  - a graph shows connectivity between nodes in a way that is useful for defining complex relationships
  - examples
    - telephone menu systems are a form directional graphs
    - wizards - which lead you through a series of steps in an application
    - recipes in cookbooks are a kind of graph
    - organizational chart - graph that reflects relationnships between people in various settings

##### sorting graphs
  - in order to make sense of a graph you need to sort the nodes to create a specific `organization`
    - without `organization`, making any sort of decision beecomes impossible

##### graph terminology
  - `traversing a graph`
    - to search/visit each vertex/node in a specific order
    - `undiscovered`
      - an unvisited vertex
    - `discovered`
      - a vertex you've previously visited
    - also called `processed`
    - `redundancy`
      - nodes interconnect such that you might have to traverse some nodes more than once toe xplore the entire graph
      - to help reduce redundancy
        - you should mark visited  nodes as such
      - some `redundancy` is desirable in critical transportantion or energey networks even when stringing for economical solutions
        - otherwise if only one method connects the network
        - its easily disrupted accidently or by a voluntary act
          - e.g an act of war
  - `graph complexity`
    - the number of  edges and vertexes
  - graph `centrality`
    - the most important vertexes in a graph
    - can be calculated a number of different ways
      - based on node degrees / connection types
      - `closesness centrality` to other nodes
        - when working with traffic analysis you might need to determine which locaions are central based on their distance to other nodes
          - e.g.
            - even though a shopping center in the suburbs has all sorts of connections
              - the fact that it is in the suburbs (and not the city) may reduce its impact on traffic
              - the same store in the city with fewer connections may have a greater impact on traffic
      - `betweeness centrality`
        - determine the node that has the highest number of short paths coming to it
        -
  - `node degree`
    - the count of edges to a particular node
    - the higher the degree the more complex the node becomes
  - `graph functionality`
    - the capability of the graph to model a specific problem
  - `plotting`
    - the act of turning the numbers that represent a graph into a gaphic visualization
  - `directionality`
    - a graph node can connect to any other node with a specific direction in mind
    - e.g.
      - some streets are bidirectional
      - some streets are one-way streets
  - weights
    -  a graph can designate a weight to a particular connection
      - distintance between two points
      - time required to traverse the route
      - etc
  -

##### graph types
###### `networks`
  - kind of graph that associates names with the vertexes (nodes/points),  edges (artcs/lines), or both

###### undirected graph
    - a graph in which the order of the edge entries doesnt matter
    - edges connect vertexes in both directions
    - e.g.
      - a road map would represent an undirected graph in most cases because traffic can travel along the road in both directions

###### `directed graph`
  - edges have a single direction and can have these additional properties
    - `cyclic`
      - the edges form a cycle that take you back to the initial vertex after having visited the itnermediary vertexes
    - `a-cycle`
      - this graph lacks cycles
  - a graph in which the order of the edge entries does matter because the flow is from the first entry to the second
  - in this case, most people call the edges `arcs` to differentiate them from undirected entries
  - e.g.
    - a graph representation of a traffic light sequence

###### `mixed graph`
  - when a graph has both `undirected` and `directed` subgraphs in the same graph


###### `weighted graph`
    - a graph that has values assigned to each of the edges or arcs
    - each edge has a  cost associated with it
      - e.g. time, money, energey, etc. which you must pay to pass through it

###### unweighted
  - all the edges have no cost or the same cost

###### dense graph
  - a graph that has a large number of edges whenc opamred to the number of vertexes

###### sparse graph
  - a graph that has a small number of edges when compared to the nubmer of vertexes


###### `vertex-labeled graph`
    - each vertex has a name associated with it
    - e.g. a road map with all the towns labeled
###### `directed acyclic graphs` `dags`
  - finite directed graphs that dont have any loops in them
  - you start from a aprticular location and folow specific route to an end9ing location without ever going back to the starting location
    - follow a particular order so that you cant get from one vertex to another and back to the beginning vertex using any route
    - provide a specific path from one vertex to another so that you can reate a predictable set of routes
  - use cases
    - schedules, with each milestone representing a particular milestone
    - family trees
  - `topological sorting`
    - orders all the vertexes of a graph on a line with the directed edges pointing from to right
      - organize the graph so that every graph vertex leads to a later vertex int he sqeuence
    - useful when
      - you have activities requiring you do something in a specific order
      - any sort of scheduling that requires you to move from a specific starting point to a specific ending point can rely on a DAG with topological sorting
      - can you help determine that your graph has no cycles because otherwise you cant order the edges connecting the  vertexes from left to right
    - process
      - obtain topological sorting suing the `dfs` traversal algorithm
      - simply note the processing order of the vertexes by the algorithm
      -

##### graphs in numeric format
  - `matrix`
    - a 2-dimensional array
      - 0 - no connections exist
      - 1 - a connection exist
      - total number of cells is the square  of the number of nodes
  - `sparse matrix`
    - a matrix in which only the actual connection appear in the matrix
    - all other entries do not exist
    - use cases
      - saves resources because the memory requiremments for fa sparse matrix are small
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
    - `abstract machines` | `random access machine` (RAM)
      - consider how well an algorithm would work on a computer without testing it on the real thing yet bound by the type of hardware youd use
      - performs basic arithmetic opeartions and interacts with information in memory
      - `time step` every time the machine does something it takes time
        - i.e. each operation
    - `ram simulation`
      - count each simple operation (arithmetic ones) as a time step
      - break complex operations into simple arithmetic operations and count time steps as defined in step 1
        - count time because when you can employ a solution in so many environments and its resource usage depands on so many factors you have to find a way to simplify comparisons os that they become standard
          - otherwise you cant compare alternatives
      - count every data access from memory as one time step
      - the analysis of algorithms  proposes to use the number of operations you get from a ram simulation and turn them into a mathematical function expressing how yoru algorithm behaves in terms of time which is a quantifications of the steps or operations required when the number of data inputs grows
        - e.g. if your aglorithm sorts object you can express complexity using a function that reports how many operations i t needs depending on the number of objects it receives
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
  - `benchmark` real computer measures where you run the code and verify the time required to run it
    - as opposed to a `RAM simulation` with uses pseudo code
    - is useful but lacks generalization like `RAM simulation`

### big o notation
  - `big o`
    - the algorithm that, after a certain *n* value (threshold for considering an input big) always results in a larger number of operations given the same input than the worse case algoirthm
  - a function describing how an algoirhytm relates its solution to the quantity of data it receives is something you can analyze without specific hardware or software support
  - represents the performance of algorithms
  - visually
    - a cartesian coordinate system can represent its function as measured by `ram simulation` where the
    - abscissa (x coordinate) is the size of the input
    - ordinate (y coordinate) is its resulting number of operations
  - worst case
  - average case
  - best case
  - `constant complexity O(1)`
    - the same time
    - no mater how much input you provide in ithe end it is a constant number of operations no matter how long the input data is
    - very rare in practice
  - `logarithmic complexity O(log n)`
    - the number of operations grows at a slower rate than the input
    - making the algorithm less efficient with small inputs and more efficient with larger ones
    - types
      - `binary search`
  - `linear complexity O(n)`
    - operations grow with athe input in a 1:1 ratio
    - types
      - iteration which you can input once and apply an operation to each element of it
  - `linearithmic complexity O(n log n)`
    - complexity is a mix between logarithmic and linear complexity
    - types
      - `#`
      - `heapsort`
      - `quicksort`
  - `quadratic complexity O(n^2)`
    - operations grow as a square of the number of inputs
    - means that your algorithms may run for hours or even days before reaching a solution
    - types
      - `nested iterations`
      - `bubble sort`
      - `selection sort`
      - `insertion sort`
  - `cubic complexity O(n^3)`
    - operations grow even faster than quadratic because n ow you have multile nested iterations
    - when an algorithm has this order of complexity you need to process a modest amount of data (100k elements)
    - algorithm may run for years
    - when you have operations that is a poer of hte input it is commont to refer tot he algorithm as `running in polynomial time`
  - `exponential complexity O(2^n)`
    - algorithm takes twice the number of previous operations for every new element added
    - when an algorithm has this complexity even small problems may take forever
    - may algoirthms doing exhaustive searches have exponential complexity
    - types
      - `fibonnaci` numbers
  - `factorial complexity O(n!)`
    - a nightmare complexity because of the large number of possible combinations between the elements
    - if your input is 100 objects and an operaton on your computer takes 10^-6 seconds you will need 10^140 years to copmlete the task successfully
    - types
      - the `traveling salesmen` problem
        - a salesman has to find the shortest route for visiting man y cities and coming back to the starting city



# specific algorithms
  - `sequential search`
    - generally takes longer than any other solution you can employ
    -
## comparisons
  - when looking for a maximum value in an array
    - unsorted arraywhichcsmallestsmallest
      - `brute force` > `divide and conquer`
  - heuristic algorithms learn from previous failures
    - brute force solutions dont
  - `search` routines
    - work better with sorted data
  - BST vs binary heap
    - search
      - BST O(log n)
      - binary heap O(n)
    - printing elements in order
      - BST O(log n)
      - binary heap O(n log n)
    - finding the the lfoor and ceiling requires O(log n) for both
    - locating the kth smallest/largest element requires o(log n) when the tree is properly configured
    - BST
      - works best ins ituations inw hich you spend more time searching and less time building the tre
    - binary heap
      - works best in dynamic situations inw hich keys change regularly
      - the following advantages over BST
        - creating the required structures requires fewer resources because the binary heaps rely on arrays and making them cache friendlier as well
        - building a binary heap requires O(n) time,
          - BST requires O(n log n)
        - using pointers to implement the tree isnt necessary
        - relying on binary heap variations (e.g. `fibonacci heap`) offers advantages such as increase and decrease key times of O(1)
  - breadth-first vs depth-first
    - the difference between the two is how each stores the vertexes
    - a `queue` for `bfs`
      - a list that works according to the `fifo` principle
      - newly discovered vertexes dont wait long for processing
    - a `stack` for `dfs`
      - a list that works according `lifo`
    - `bfs` needs lots of memeory because it sytematically stores all the paths before finding a solution
    - `dfs` needs less memory but you have no guarantee that it will find the shortest and most direct solution

## binary search
  - requirements
    - the data has to be in sorted order
  - process
    - split the content in half
      - or split the content in thirds, etc
    - compare the keys for the content with the search term
      - this can be done via `iteration` or `recursion`
    - choose the half that contains the key
    - repeat steps 1 through 3 until you find the key
  - `complexity` O(log n)

### binary search tree
  - BST
  - less numbers appear to the left and greater numbers appear to the right
  - the root node contains a value that is int he middle of the range of keys
    - giving the BST and easily understood balanced approached to storing keys
    -
## binary heap
  - places each of the node elements in a special order
  - the root node always contains either the smallest/largest value
    - `binary min heap` smallest value
    - `binary maxheap` largest value
  - upper level branches are always a smallerlarger vallue than lower level branches and leaves
  - the effect is to keep the tree balanced and in a predictable order so that searching becomes extremely efficient
    - the cost is in keeping the tree balanced

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

### breadth-first search (BFS)
  - begins at the root node
    - explores each of the child nodes first and only then moves down to the next level
    - progresses level by level until it finds a solution
  - use cases
    - checking for duplicate nodes
    - guaranteed to return the shortest path between two points as the first output when used to find paths
    - locating the shortest route between two points as quickly as possible
    - minimization algorithms


#### issues
  - it must store every node in memory
    - i.e. uses a considerable amount of memory for a large number of nodes

### depth-first search (DFS)
  - begins at the root node and explores a set of connected child nodes until reaches a leaf node
  - it progresses branch by branch until it finds a solution
    - i.e. it explores every node from the root down a single path to the end
  - using a stack + recursion makes this algorithm faster
  - use cases
    - its memory efficient thus suited for problems with limited memory resources
    - finding an entire path before exploring any other path
    - when you need to serach in detail, rather than generally
      - e.g. in games where finding a complete path is important
      - optimal approach to perform tasks such as finding a solution in a maze


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
    - reduces the number of resources untestedimproves your chances of finding precisly the solution you need
  - example
    - looking for a book in a library (i.e. dewey decimal system)
      - divide the library into childrens and adults sections
      - divide the adults section into further categories, etc
      - give each category a code
      - map each book to a category code
    - writing a book
      - instead of writing a whole book
      - write it one chapter at a time

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


## recursion
  - solves many computer problems that relies oon the capability of a function to continue calling itself until it satisfies a particular condition
  - you call the same function multiple times but modifying the terms under which you call it until the tasks reaches a specific condition
    - all the previous calls are still active
    - the calls unwind themselves untilt he first call finally ends with the correct answer and th eunwiding proces where most peopel enocunter a problem
  - provides an easier way to solve problems when working with some algorithms because it mimics the way a human would solve it
  - recusive conditions
    - the conditions for ending recursion haven t been met so the function must call itself again
    - the conditions for ending recusion have been  met so the function returns af inal value that is ued to calcule the ending result
  - `factorial`
    - the multiolication of a series of numbers between a starting point and ending a point in which each number in the series is one less than the number before it
      - e.g. 5 * 4 * 3 * 2 * 1
  - `tail call` a tail call occurs any time the resursion makes a call to the function as the last thing before it returns
    - issues
      - forces the programming language to keep track of the individual call values untilt he recursion rewinds
      - each call consumes memory
      - at some point the ssystem will run out of memory and the `tail call` will fail, and thus your algorithm will fail

# searching and sorting data
  - unless you can access the data when you want in the manner you want, you cannot effectively `CRUD`
  - `crud`
    -  create read update delete
    - focus on the needt o access the data you need to perform just about every task in life quickly and easily
  - of all the tass applications do searching is the more time consuming and also the one that is required the most

## hashes
  - the use of indexing makes sorting and searching significantly faster
  - `index`
    - kind of pointer/address; its not the data but it points to the data
    - e.g.
      - your home address points to your home
    - enables you to maintain several sorted orders for the same data
    - sorting a small index is faster than sorting the entire dataset
    - each index maintains a specific data order and points to the full dataset so you find what youre looking for extremely fast
  - `key` the identifying data for a particular data record
  - `hash table`
    - provides the means to create an index of keys that points to the individual items in a data structure so tha tan algoritym can easily predict the location of the data
    - usually provides a search time of O(1)
  - `slots` i.e. buckets for holding data inside the `hash table`
    - each slot can hold one data item
  - `load factor` the number of filled-to-available `slots` in a `hash table`
    - high `load factor` increases the potential for `collisions`
  - `collisions` where two data entries have the same hash value
    - preventing collisions
      - keep the `load factor` low
      - use `partial values` in the hash functioon
        - e.g. dont use the zip code as it repeats for many phone numbers
      - `folding` create a unique number by diving the original number into pieces adding the pieces and using th result of the hash value
        - e.g. split a phone number into 3 pieces and add them as the hash functioon
        - i.e. use some algebra on the value to create the hash function
      - `mid-square`
        - square the center digits of the number, and take the middle digits as the hash value
        - i.e. another algebra function
    - reacting to collisions
      - `open addressing`
        - stores the value in the next open slot by looking throught he slots equentially until it finds an open slot to use
        - issues
          - it assumes an open slot for each potential value which may not be the case
          - the search slows considerably after the load factor increases
            - i.e. you can no longer find the needed value ont he first comparison
      - `rehashing`
        - the code hashes the value plus a constant
          - if sllot X contains a value, rehash  to produce a new hash value
      - `chaining`
        - each slot in the `hash table` can hold multiple values
        - can be implemented using a list
        - everytime a collision ocurs the code simply appends the value to the list in the target slot
        - the hash will always produce a correct slot
          - the list within each slot will still require some osrt of sequential/other search to find the specific value

  - `hash function` placing keys in the index by turning each key into a numeric value
    - the numeric value acts as an index into the hash table and the hash table provides a pointer to the full record in the dataset
    - the `hash function` produces repeatable results - thus you can predict the location of the required data
    - examples
      - obtain the modulus of the value divided by the number of slots
        - *value  % slots.length
      - combine the output of mu8litple hash functions when working with complex applications that rely on a large dataset
  - `sha`
    - secure hash algorithms
    - released by the national institutde of standards and technology (NIST) as a US federal information processing standard (FIPS)
    - provide support for security applications and protocols
    - include `sha1` `sha224` `sha256` `sha384` `sha512`
  - `md5`
    - rsas md5 algoirthm
    - initially designe dfor security applications
    - is now a popular way to `checksum` files
      - reduce files to a single number than enables you to determine whether the file was modified since the hash creation
      - e.g. determine whether the file you downloaded was corrupted/been altered by a hacker
      - to ensure file integrity, checkl whether the md5 checksum of your copy corresponds tot he original one communicated by the author of the file
  - `lsh`
    - `locality-sensitive hasing`
    - chunks information to check into parts and digests it using many hash functions resulting in the production of a special hash result which is an address for a bucket used to hold similar words
    - relies on a large number of hash functions to stitch apparently separeated information together
    - e.g. how marketing companies and intelligence services put different chunks of information together based on names and addresses that arent identical
      - e.g. guessing los angels and los angles both refer to los angeles
  -


## sorting
  - placing data in an order that makes it easy to perform CRUD operations
  - makes searches considerably faster
  - as long as the sort matches the search
  - sorting most focus on a particular need
    - e.g.
      - find employes by last name
        - you would sort by last name, and not birthday
  - comparing sorts via speed
    - `comparisons`
      - to move data from one location in a dataset to antoher you need to know where to move it
        - which means comparing the target datat to other data int he dataset
      - having fewer comparisons = better performance
    - `exchanges`
      - depending on the algorithm, the data may need to be moved several times
        - the number of exchanges affects speed consdierably because youre actually mmoving data from one location in memory to another
      - fewer and smaller exchanges (e.g. when using `indexes`) = better performance

### naive sort
  - ordering using brute-force methods
    - without any regard to making any kind fo guess as tow here the data should appear
  - tend to work with the entire dataset instead of applying approaches that would likey reduce sorting time (e.g. `divide and conquer`)
  - use cases
    - efficient
    - easy to understand

#### selection sort
  - replaces the `bubble sort`
  - also called an `in-place comparison sort`
  - worst case speded  O(n^2)
  - process
    - both types guarantee that items immediately appear in the final location once moved
    - type 1
      - look for the smallest item in the list and place it in the front of the list ensuring that the item is in the correct location
    - type 2
      - looks for the larget item placesit in the back of the list

#### insertion sort
  - process
    - using a single item as a starting point and adding items to the left or right of it based onw hether these items are less than or greater than the selected item
    - checks new items against the sorted items and isnerts the new item into the right position
  - best case O(n)
    - i.e. when the entire dat set is already sorted
  - worst cast O(n^2)
    - i.e when the entire dataset is sorted in reverse order because every insertion will require moving every value

### mergesort
  - use cases
    - sorting linked lists
  - process
    - applying the `divide and conquer` approach by breaking the dataset into individual pieces and sorting the pieces
    - merges the pieces ina  manner that ensures that it has sorted the merged piece
    - first function recursively split the pieces apart and ptuts them back together
    - second function peforms the task of merging the pieces iteravely
  - worst case O(n log n)

### quicksort
  - one of the fastest methods of sorting data
  - use cases
    - arrays
  - worst case O(n^2)
    - the dataset is already sorted in the desired order
    - the dataset is sorted inr everse order
    - all the elements in the dataset are the same
      - occur because of the pivot point that a less intelligent sort function uses
    - using the right programming technique can mitigate these problems by defining something other than the leftmost / rightmost index as the pivot point
      - choosing a random index
      - chsooing the middle index of hte partition
      - choosing the median of the first, middle, and last element of the partition for the pivot
        - especially for longer partions
  - average case O(n log n)
  - process
    - partition the data by choosing a pivot point that determines the left and right side of the sort
    - searches for elements in each partition that are in the wrong place and swaps them
    - when all alements are in the correct place, create a new pivot point and return
    - recursively repeat
