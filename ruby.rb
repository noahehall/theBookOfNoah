#http://www.lynda.com/Ruby-tutorials/Strings/47905/57948-4.html
other
 | #my pipe key doesnt work, this is for quick copy/paste :(

jon
	$bundle
		runs the gem file that installs all of the reuiqred modules for the application



	snapshots
		re-snapshot from the webserver or worker
		staging web 3 = server for staging
		pr-web3 = server for production

			bundle exec rake deli:snapshots:update_all

			check if they are going
			inter

			to update snapshots on prod
				ssh into the pr-web server
[2/15/16, 2:56 PM] Jonathan Gillick (jon@magnifi.fm): type 'delicd'
[2/15/16, 2:56 PM] Jonathan Gillick (jon@magnifi.fm): to get into the current directory
[2/15/16, 2:56 PM] Jonathan Gillick (jon@magnifi.fm): then run
[2/15/16, 2:57 PM] Jonathan Gillick (jon@magnifi.fm): 'bundle exec rake deli:snapshots:update_all'
[2/15/16, 2:57 PM] Jonathan Gillick (jon@magnifi.fm): it will take a while to run
[2/15/16, 2:57 PM] Jonathan Gillick (jon@magnifi.fm): but you should be able to do it
[2/15/16, 2:57 PM] Jonathan Gillick (jon@magnifi.fm): you can monitor the jobs at internal.magnifi.fm:8282/overview

dope links
	http://rubykoans.com/windows #interative cli ruby tutorial

cmd
	ruby -v #check the version of ruby
	ruby -e 'some ruby command' #executes an arbitrary ruby command
	irb # open ruby interactive mode
		ctrl c # quit irb
	you can type in definitions, etc. and then call them
	>as long as you dont quit irb

background

	everything in ruby is an object, and can be treated as such
	save files with .rb to indicate they are a ruby file

ruby commands
	puts 'blah' #puts blah, and then a new line
	print 'blah' #prints blah, but with no new line after it
numbers

	num = 25
	#+ - * / ** %

math
	sum = 13+379
	product = 923*15
	powers = 2**2
	quotient = 13209/17
	modulo = 3%1

booleans

	thisbool = false
	thisbool = true && false #thisbool = false
	thisbool = true || false #thisbool = true
	thisbool = true != false #thisbool = true

nil
	nil = null

operators
	== != > < => <=
	this <=> that
		#returns 0 if this == that
		# 1 if this > that
		# -1 if this < that

strings

	#single line comment

=begin
		this is a
		multi line comment
		must be flush against the left
=end

	thisstring = 'blah'

	string interpolation requires double quotes

		"hey #{somevar}"
		"hey #{somevar.length}" #calls a function on the var

	builtin functions
		puts 'hello then automatically add a new line after it'
		print 'hello but do not add a new line after it'
		print user_input = gets.chomp.downcase!
			#asks user for input > uses downcase > saved it to user_input
			#the ! calls the function before returning it

		'random string'.length
		'rando string'.reverse
		'string'.upcase
		'string'.downcase
		'string'.gsub!(/s/, "d") #replaces all s with d
		'random string'.downcase.reverse.upcase #chaining
		'string'.split! #returns an array splitting on spaces
			'string'.split!('r') #splits on every r
integers
	basics
		Integers (Without decimals)
		Floating Point (with decimals)

		10/3 = 3
		10.0/3 = 3.333
		10/3.0 = 3.333
		#must use the decimal point!

	operators
		+ - / * **
		+= -= *= **=

	methods
		123.4.round #round
		1234.4.to_i #convert to integer (rounds down)
		1234.4.floor #always round down
		1234.4.ceil #always round up
		-1234.4.abs #return the absolute

symbols
	basics
		are immutable: cant be changed after created
		only one copy can exist at a time
		symbols as hash keys are faster than strings as hash keys

	blah = :randomsymbolname
		#creates a constant, there can be only 1

variables
	basics
		variables must start with a letter or _
		should be all lower case(no camel case)
	myvar = 'random string'
	mynum = 0
	scopes
		$somevar = global variable
		@@vsomevar = class variable
		@somevar = instance variables
		somevar = local variable
		Somevar = block variable

arrays
	my_array = []
	my_2d_array = [[1],[2]]

	my_array.first #returns first element
	my_array.unshift(1) #adds 1 to the front of the array
	my_array.shift #removes and returns the first element
	my_array[1] #same as above

	my_array.last #returns last element
	my__array.pop #removes and returns the last element
	my_array[-1] #same as above
	my_array << 1 #push 1 to the end of my_array
	my_array.push(1) #same as above

	my_array[0,1] #start at the index 0, and return 1 element
	my_array[2..-1] #returns the third element, and everything after it

	parallel
		first, last = ['assigntofirst','assigntolast', 'dontassign']
			#the item is assigned, not an array
			#first = 'assigntofirst' and NOT ['assigntofirst']

		first, *last = ['assigntofirst','assigntolast', 'dontassign']
			#notice the splat operator *
			#first = 'assigntofirst' and NOT ['assigntofirst']
			#last = ['assigntolast', 'dontassign'] #because of the splat operator

		first_name, last_name = ["Cher"]
			#first = 'Cher'
			#last = nil #theres nothing to assign so its null

		others
			first_name, last_name = [["Willie", "Rae"], "Johnson"]
		    assert_equal ["Willie", "Rae"], first_name
		    assert_equal 'Johnson', last_name
	    first_name, = ["John", "Smith"]
    		assert_equal "John" , first_name
  		first_name = "Roy"
    	last_name = "Rob"
		    first_name, last_name = last_name, first_name
			    assert_equal "Rob", first_name
			    assert_equal "Roy", last_name

	builtin functions
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

		#access multidimensional items
		s[0][1]

hashes
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
 		my_hash[:symbol] #how you access the symbol, will return 'blah'
 		#symbols are like constants
 		#there can be only one with the same name

 	builtin functions
	 	my_hash.each {|x,y| puts "#{x}: #{y}" }
	 		#x = key, y = value, x & y can be anything
 		hash.fetch(:one) #returns hash[:one]
 			#fetch v [] accessor, http://stackoverflow.com/questions/16569409/fetch-vs-when-working-with-hashes
	 	hash.keys.include?(:one) #true/false
	 	hash.values.include?("uno") #true/false
	 	hash.keys.class #returns array, the key is always an array
	 	hash.values.class #returns an array, the value is always an array

datatype conversion
	blah.to_s #convert blah to a string
	blah.to_f #to a float
	blah.to_i #to an integer
	blah.to_a #convert blah to an array
	blah.to_h #convert blah to a hash

datatype checking
	blah.is_a? class #returns true/false if blah == class
		Object, Array, Hash, Integer,
	blah.nil? #returns true if blah does not have a value
	blah.inspect
		#Returns a string containing a human-readable representation
		#of obj. By default, show the class name and the list of the
		#instance variables and their values

control statements
	#check if something is true
	if blah < 0
		puts 'true'
	elseif blah > 0
		puts 'true'
	else
		puts 'false'
	end

	#check if something is false
	checkforfalse = false
	unless checkforfalse
		puts 'it is false, so im printing this'
	else
		puts 'it is true, so im printing this'
	end

	print 'this' unless false #will print because you used unless

loops/iterators
	counter = 10
	while counter < 11
		puts counter
		counter += 1
	end

	for num in 1...10
		puts num #will not puts 10
	end

	for num in 1..10
		puts num #will puts 10
	end

	i = 5
	until i=6
		puts i += 1
	end

	i = 10
	loop do
		i -= 1
		puts i
	end

	loop do
		i -= 1
		next if i = 5 #immediately goes to the next iteration
		puts i
		break if i <= 0 #immediately exits the loop
	end

	loop { #alternative syntax without the do end
		puts i
		break if i = 5
	}

	(1..10).each { |i| puts i }


	20.times {
		puts 'do this 20 times'
	}

	array = [1,2,3,4,5]
	array.each {|x|
		x += 10
		puts "#{x}"
	}

blocks
	#lambdas, methods without names
	#created with {} or do end statements
	1.times {
		puts 'hello'
	}

	1.times do
		puts 'hello'
	end #same as the above

functions
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

error handling
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

builtin functions
	getting user input
		saveresponse = gets.chomp
		savedinteger = Integer(gets.chomp)

	sorting
		somearray.sort! #sort array by its valus
		somehash.sort_by!{|key, value|
			value
		} #sort the hash by its values

	copying things
		obj2 = obj1.clone
			#Produces a shallow copy of obj—the instance variables
			#of obj are copied, but not the objects they reference.
			#clone copies the frozen and tainted state of obj.

	asserts
		used to check values, e.g, returns error if the assert isnt true
			x = 2
			y = 3
			assert x != y
		assert truthy, 'message to return'
		assert_equal expectedvalue, actualvalue
			#expected and actual are variables that contain what your checking
		assert_match(/short string/, 'short string and longer')
			#returns true if param1 is in param2

	blah.object_id #returns the id of the object

cool code
	# method that capitalizes a word
	def capitalize(string)
	  puts "#{string[0].upcase}#{string[1..-1]}"
	end

	# block that capitalizes each string in the array
	["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"} # prints "Ryan", then "Jane"

	books = ['one book', 'second book', 'etc']
	# To sort our books in ascending order, in-place
	books.sort! { |firstBook, secondBook| firstBook <=> secondBook }
	# Sort your books in descending order, in-place below
	books.sort! {|firstbook, secondbook| -1 * (firstbook <=> secondbook)
