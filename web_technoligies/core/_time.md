# links 
    - [iso 8602 time intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals)
    - [moment range](https://github.com/rotaready/moment-range#examples)

#  blah 
    -

# ISO 8601 
	- 	the World Wide Web Consortium (W3C) uses ISO 8601 in defining a profile of the standard that restricts the supported date and time formats to reduce the chance of error and the complexity of software
	- 	various electronic program guide standards for TV, digital radio, etc. use several forms to describe points in time and durations
	- 	

## time intervals
    -  There are four ways to express a time interval:
        - separetd by a solidus (a forward slash)
            -   Start and end 
	            -   "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z"
            -   Start and duration, 
	            -   "2007-03-01T13:00:00Z/P1Y2M10DT2H30M"
            -   Duration and end
	            -   "P1Y2M10DT2H30M/2008-05-11T15:30:00Z"
        -   Duration only,
	        -   "P1Y2M10DT2H30M", with additional context information
        -   <Start>/<end> expressions 
	        -   elements missing form the env value are assuemd to be the same as the start value + time zone 
    -   repeating intervals 
	    -   formed by adding `R[n]` to the beginning of an interval expression
		    -	R - the letter itself 
		    -	n - number of repititions, or infinite
	    -	if start time is specified 
		    -	then this is the start of the repeating interval 
	    -	if the end (but not the start) time is specified 
		    -	then this is the end of the rpeaqting interval 

# examples 
```js 
	// where"/15:30" implies "/2007-12-14T15:30"
	// i.e. same date as the start
	const 2hrMeeting = "2007-12-14T13:30/15:30";


	// repeat an interval five tiem starting at some time 
	const repeat5Times =  'R5/2008-03-01T13:00:00Z/P1Y2M10DT2H30M'

```
