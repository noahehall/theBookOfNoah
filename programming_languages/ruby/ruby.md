
# dope links
	http://rubykoans.com/windows #interative cli ruby tutorial

# background
  - everything in ruby is an object, and can be treated as such
  - save files with .rb to indicate they are a ruby file

# syntax
## cli
  ```ruby
	ruby -v #check the version of ruby
	ruby -e 'some ruby command' #executes an arbitrary ruby command
	irb # open ruby interactive mode
		ctrl c # quit irb
  ```

# variables
  - variables must start with a letter or _
	- should be all lower case(no camel case)
  ```ruby
    myvar = 'random string'
    mynum = 0
    # scopes
      $somevar = global variable
      @@vsomevar = class variable
      @somevar = instance variables
      somevar = local variable
      Somevar = block variable

    #datatype conversion
    	blah.to_s #convert blah to a string
    	blah.to_f #to a float
    	blah.to_i #to an integer
    	blah.to_a #convert blah to an array
    	blah.to_h #convert blah to a hash


    # datatype checking
      #returns true/false if blah == class
      #Object, Array, Hash, Integer,
    	 blah.is_a? class
    	blah.nil? #returns true if blah does not have a value
      #Returns a string containing a human-readable representation
      #of obj. By default, show the class name and the list of the
      #instance variables and their values
    	 blah.inspect
  ```

# booleans
  ```ruby
  	thisbool = false
  	thisbool = true && false #thisbool = false
  	thisbool = true || false #thisbool = true
  	thisbool = true != false #thisbool = true
  ```

# operators
  ```ruby
    + - / * **
  	+= -= *= **=
  	== != > < => <=
  	this <=> that
  		#returns 0 if this == that
  		# 1 if this > that
  		# -1 if this < that
  ```

# error handling
  ```ruby
    begin
      raise ArgumentError, "I'm a description"
    rescue Exception => ex
      puts "An error of type #{ex.class} happened, message is #{ex.message}"
    end
    #Unknown:10 An error of type ArgumentError happened
    #message is I'm a description

    assert_raise(KeyError) do
      hash.fetch(:doesnt_exist)
    end
    #KeyError is raised whenever you access a var that doesn't exist
  ```

# strings
  ```ruby
	  #single line comment
    # =begin
    #    this is a
    #    multi line comment
    #    must be flush against the left
    # =end
    thisstring = 'blah'
    # string interpolation requires double quotes
      "hey #{somevar}"
      "hey #{somevar.length}" #calls a function on the var

    ## methods
      'random string'.length
      'rando string'.reverse
      'string'.upcase
      'string'.downcase
      'string'.gsub!(/s/, "d") #replaces all s with d
      'random string'.downcase.reverse.upcase #chaining
      'string'.split! #returns an array splitting on spaces
      'string'.split!('r') #splits on every r
	```

# numbers
  - Integers (Without decimals)
  - Floating Point (with decimals)
  ```ruby
    # methods
      123.4.round #round
      1234.4.to_i #convert to integer (rounds down)
      1234.4.floor #always round down
      1234.4.ceil #always round up
      -1234.4.abs #return the absolute

  ```

# math
  ```ruby
  	sum = 13+379
  	product = 923*15
  	powers = 2**2
  	quotient = 13209/17
  	modulo = 3%1
    #must use the decimal point!
      10/3 = 3
    	10.0/3 = 3.333
    	10/3.0 = 3.333
  ```

# symbols
	- are immutable: cant be changed after created
	- only one copy can exist at a time
	- symbols as hash keys are faster than strings as hash keys

  ```ruby
    blah = :randomsymbolname #creates a constant, there can be only 1

  ```

# arrays
  ```ruby
    my_array = []
    my_2d_array = [[1],[2]]
    first, last = ['assigntofirst','assigntolast', 'dontassign']
    #notice the splat operator *
    #first = 'assigntofirst' and NOT ['assigntofirst']
    #last = ['assigntolast', 'dontassign'] #because of the splat operator
      first, *last = ['assigntofirst','assigntolast', 'dontassign']
    my_array[1]
    my_array[-1]
    my_array[0,1] #start at the index 0, and return 1 element
    my_array[2..-1] #returns the third element, and everything after it

    # methods
      my_array.first #returns first element
      my_array.unshift(1) #adds 1 to the front of the array
      my_array.shift #removes and returns the first element

      my_array.last #returns last element
      my__array.pop #removes and returns the last element
      my_array << 1 #push 1 to the end of my_array
      my_array.push(1) #same as above

      my_array.each {|x|
        #x = a placeholder for each value in my_array
      }

      #multi dimensional accessor loop
      s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]
      s.each{|this|
        this.each {|that|
          puts that
        }
      }
  ```

# hashes
  ```ruby
    my_hash = {"name" => "value"} #literal notiation
    puts my_hash['name']
    my_hash = Hash.new #constructor notation
    m_hash = {} #same as above
    my_hash['key'] = 'value' #add/edit a hash property

    my_hash = Hash.new("Trady Blix")
    #set default value
    #if you try to access a non existant key
    #trady blix will be returned

    my_hash = {:symbol => 'blah'}
    #how you access the symbol, will return 'blah'
    #symbols are like constants
    #there can be only one with the same name
      my_hash[:symbol]

    # methods
      my_hash.each {|x,y| puts "#{x}: #{y}" }
      hash.fetch(:one) #returns hash[:one]
      hash.keys.include?(:one) #true/false
      hash.values.include?("uno") #true/false
      hash.keys.class #returns array, the key is always an array
      hash.values.class #returns an array, the value is always an array

  ```

# control statements
  ```ruby
    # if
      if blah < 0
        puts 'true'
        elseif blah > 0
        puts 'true'
      else
        puts 'false'
      end

    # unless
      unless false
        puts 'it is false, so im printing this'
      else
        puts 'it is true, so im printing this'
      end

    # while
      counter = 10
    	while counter < 11
    		puts counter
    		counter += 1
    	end

    # for
      for num in 1...10
    		puts num #will not puts 10
    	end
      for num in 1..10
    		puts num #will puts 10
    	end

    # until
      i = 5
    	until i==6
    		puts i += 1
    	end

    # loop do
      i = 10
    	loop do
    		i -= 1
    		puts i
    	end

    # loop do + break + next
      loop do
    		i -= 1
    		next if i = 5 #immediately goes to the next iteration
    		puts i
    		break if i <= 0 #immediately exits the loop
    	end

    # loop: alternative syntax without the do end
    loop {
  		puts i
  		break if i = 5
  	}

    # literal
    (1..10).each { |i| puts i }
    20.times {
  		puts 'do this 20 times'
  	}
  ```

# classes
  - class variables
    - local: defined inside a method,not available outside the method
    - instance: available across class instances, can be different for each instance
    - class: belong to the class, and is the same for all instances
    - global: available to all classes
  ```ruby
    class blah
      @instance_var = 'only for this instance'
      @@class_var = 'available to all instances'
      $global_var = 'available to all classes'
    end
  ```
# functions
  ```ruby
    def functionname(arg1, arg2)
      #do some stuff
    end

    #the * = splat operator, allow you to accept an arbitry amount of parameters
    def functionanem(arg1, *args)
      args.each {|arg| puts "one #{arg} at a time"}
      return arg1
    end

    def blah(default = false)
      #set a default value
    end

  ```
## global functions
  ```ruby
		puts 'hello then automatically add a new line after it'
		print 'hello but do not add a new line after it'

  ```

# io
  ```ruby
  	puts 'blah' #puts blah, and then a new line
  	print 'blah' #prints blah, but with no new line after it
    #asks user for input > uses downcase > saved it to user_input
    #the ! calls the function before returning it
      print user_input = gets.chomp.downcase!

    # getting user input
  		saveresponse = gets.chomp
  		savedinteger = Integer(gets.chomp)
  ```
