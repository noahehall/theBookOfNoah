<?php
	
anchors {
	^ 	Start of string, or start of line in multi-line pattern
	\A	Start of string
	$	End of string, or end of line in multi-line pattern
	\Z	End of string
	\b	Word boundary
	\B	Not word boundary
	\<	Start of word
	\>	End of word
	\s  White space
	a?	Zero or one of a
	a*	Zero or more of a
	a*?	Zero or more, ungreedy
	a+	One or more of a
	a+?	One or more, ungreedy
	a{3}	Exactly 3 of a
	a{3,}	3 or more of a
	a{,6}	Up to 6 of a
	a{3,6}	3 to 6 of a
	a{3,6}?	3 to 6 of a, ungreedy
}

groups and ranges {
	all are inclusive
	.	Any character except new line (\n)
	(a|b)	a or b
	(...)	Group
	(?:...)	Passive (non-c­apt­uring) group
	[abc]	Range (a or b or c)
	[^abc]	Not (a or b or c)
	[a-q]	Lower case letter from a to q
	[A-Q]	Upper case letter from A to Q
	[0-7]	Digit from 0 to 7
	\x	Group/­sub­pattern number "­x"
}

quantifiers {
	Add a ? to a quantifier to make it ungreedy.

	* 0 or more
	{3}	Exactly 3
	+	1 or more
	{3,}	3 or more
	?	0 or 1
	{3,5}	3, 4 or 5
}

metacharacters{
	all of these require escaping

	. (any character)
	* (zero of more of the preceding)
	+ (one or more of the preceding)
	{} (minimum to maximum quantifier)
	? (ungreedy modifier)
	! (at start of string means "negative pattern")
	^ (start of string, or "negative" if at the start of a range)
	$ (end of string)
	[] (match any of contents)
	- (range if used between square brackets)
	() (group, backreferenced group)
	| (alternative, or)
	\ (the escape character itself)

}

escape sequences {
	"­Esc­api­ng" is a way of treating characters 
	>which have a special meaning in regular expres­sions 
	>literally, rather than as special charac­ters.
		you have to escape regex special chars to 'use' them in a pattern
		e.g. the dot = match any char, to 'use' in a regex
			\. #escape it first
	\Escape following character
	\Q	Begin literal sequence
	\E	End literal sequence


}

apache mod rewrite {
	great tut:  https://www.addedbytes.com/articles/for-beginners/url-rewriting-for-beginners/

	allows you to rewrite urls internally so that the url in the 
	>browsers url bar does not change

	uses an .htaccess file to redirect traffic

	syntax:
		RewriteRule regex withthis [flag1,flag2,etc]
			RewriteRule: #tells apache that htis line refers to a single RewriteRule
			regex: #the pattern to look for in the url
			withthis: replaces regex and inserts this into the url
			flags: tell apache how to apply the rule
				L # dont process anymore rules if this one is used
				C #(chained with next rule)
				CO=cookie # (set specified cookie)
				E=var:value # (set environment variable var to value)
				F #(forbidden - sends a 403 header to the user)
				G #(gone - no longer exists)
				H=handler #(set handler)
				N #(process more rules even if you find a match)
				NC #(case insensitive)
				NE #(do not escape special URL characters in output)
				NS #(ignore this rule if the request is a subrequest)
				P #(proxy - i.e., apache should grab the remote content specified in the substitution section and return it)
				PT #(pass through - 'use' when processing URLs with additional handlers, e.g., mod_alias)
				R #(temporary redirect to new URL)
					instead of rewriting the url internally, apache will send a message
					back to the browser (an http header) to tell it the document has
					moved temporarily to the URL given in the substitution section
					-either a relative/absolute URL can be given
				R=301 #(permanent redirect to new URL, and display new url in browser
				R=302 #temporary redirect to new url, but still show this url in browser
				QSA #(append query string from request to substituted URL)
				S=x #(skip next x rules)
				T=mime-type #(force specified mime type)
		RewriteCond
			can be precede 1/more rewrite rules
			apply certain rules to a subset of requests, e.g. a subdomain

			RewriteCond variable regex [flag1,flag2,etc] 
				variable: uses content of this variable to set the condition
					internal server variables
						%{DOCU­MEN­T_ROOT}
						%{SERV­ER_­ADMIN}
						%{SERV­ER_­NAME}
						%{SERV­ER_­ADDR}
						%{SERV­ER_­PORT}
						%{SERV­ER_­PRO­TOCOL}
						%{SERV­ER_­SOF­TWARE}
					http header variables
						%{HTTP­_US­ER_­AGENT}
						%{HTTP­_RE­FERER}
						%{HTTP­_CO­OKIE}
						%{HTTP­_FO­RWA­RDED}
						%{HTTP­_HOST}
						%{HTTP­_PR­OXY­_CO­NNE­CTION}
						%{HTTP­_AC­CEPT}
					http request variables
						%{REMO­TE_­ADDR}
						%{REMO­TE_­HOST}
						%{REMO­TE_­PORT}
						%{REMO­TE_­USER}
						%{REMO­TE_­IDENT}
						%{REQU­EST­_ME­THOD}
						%{SCRI­PT_­FIL­ENAME}
						%{PATH­_INFO}
						%{QUER­Y_S­TRING}
						%{AUTH­_TYPE}
					special variables
						%{API_­VER­SION}
						%{THE_­REQ­UEST}
						%{REQU­EST­_URI}
						%{REQU­EST­_FI­LENAME}
						%{IS_S­UBREQ}
						%{HTTPS}
					time variables
						%{TIME­_YEAR}
						%{TIME­_MON}
						%{TIME­_DAY}
						%{TIME­_HOUR}
						%{TIME­_MIN}
						%{TIME­_SEC}
						%{TIME­_WDAY}
						%{TIME}
				sometext: if the variable == sometext, then the condition is true
				flags

		Rewrite Directives
			Rewrit­eEngine
			RewriteMap
			Rewrit­eOp­tions
			Rewrit­eBase
			RewriteLog
			Rewrit­eCond
			Rewrit­eLo­gLevel
			Rewrit­eRule
			Rewrit­eLock

	rewrite examples:
		RewriteRule ^products/([A-Za-z0-9-]+)/?$ product_id=$1 [NC,L] 	
			finds urls that contain:
				starts with products/
				has a group of chars containing 1/more alpha numeric chars & hyphens
				ends in a /
			$1= variable that saves the match, and places it at the end of the url

	rewrite conditions examples
		#site moved permanently from domain.com to domain2.com
		Rewrit­eCond %{HTTP­_HOST} ^www.d­oma­in.com$ [NC]
		Rewrit­eRule ^(.*)$ http:/­/ww­w.d­oma­in2.com/$1 [R=301,L]
	
		#any url missing www.
		#this also stops infinite loops
		RewriteCond %{HTTP_HOST} ^addedbytes\.com [NC] 
		RewriteRule ^(.*)$ http://www.addedbytes.com/$1 [L,R=301]

}