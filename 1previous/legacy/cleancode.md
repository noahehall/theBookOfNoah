https://learning.oreilly.com/library/view/clean-code-a/9780136083238/chapter02.html

# citations

-  Kent Beck’s book Implementation Patterns.
-  Grady Booch, author of Object Oriented Analysis and Design with Applications
-  Michael Feathers, author of Working Effectively with Legacy Code
-  Ron Jeffries, author of Extreme Programming Installed and Extreme Programming Adventures in C#
-  

# chapter 1

- because code represents the details of the requirements
-  wading:  significantly impeded by bad code
-  Every addition or modification to the system requires that the tangles, twists, and knots be “understood” so that more tangles, twists, and knots can be added.
- Have you ever waded through a mess so grave that it took weeks to do what should have taken hours? Have you seen what should have been a one-line change, made instead in hundreds of different modules? These symptoms are all too common.
- Why does good code rot so quickly into bad code? 
- All developers with more than a few years experience know that previous messes slow them down. And yet all developers feel the pressure to make messes in order to meet deadlines.
- The bad news is that writing clean code is a lot like painting a picture. 
- A programmer without “code-sense” can look at a messy module and recognize the mess but will have no idea what to do about it.
-  A programmer with “code-sense” will look at a messy module and see options and variations

-  clean code 
   -  I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well.
      -  Apparently Bjarne thinks that clean code is pleasing to read. 
   -  Clean code is focused. Each function, each class, each module exposes a single-minded attitude that remains entirely undistracted, and unpolluted, by the surrounding details.
   -  Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer’s intent but rather is full of crisp abstractions and straightforward lines of control.
   -  Clean code can be read, and enhanced by a developer other than its original author. It has unit and acceptance tests. It has meaningful names. It provides one way rather than many ways for doing one thing. It has minimal dependencies, which are explicitly defined, and provides a clear and minimal API. Code should be literate since depending on the language, not all necessary information can be expressed clearly in code alone.
   -  I could list all of the qualities that I notice in clean code, but there is one overarching quality that leads to all of them. Clean code always looks like it was written by someone who cares. There is nothing obvious that you can do to make it better. All of those things were thought about by the code’s author, and if you try to imagine improvements, you’re led back to where you are, sitting in appreciation of the code someone left for you—code left by someone who cares deeply about the craft.
   -  Runs all the tests;
   -  Contains no duplication;
   -  Expresses all the design ideas that are in the system;
   -  Minimizes the number of entities such as classes, methods, functions, and the like.
   -  Reduced duplication, high expressiveness, and early building of simple abstractions. That’s what makes clean code for me.
   -  You know you are working on clean code when each routine you read turns out to be pretty much what you expected. You can call it beautiful code when the code also makes it look like the language was made for the problem.
   -  The Boy Scout Rule
      -   The code has to be kept clean over time. We’ve all seen code rot and degrade as time passes. So we must take an active role in preventing this degradation.
      -   

-  bad code 
   -   Bad code tempts the mess to grow! 
   -    Abbreviated error handling is just one way that programmers gloss over details. Memory leaks are another, race conditions still another. Inconsistent naming yet another. 
   -    Bad code tries to do too much, it has muddled intent and ambiguity of purpose.
   -    