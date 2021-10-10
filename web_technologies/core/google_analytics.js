<?php
notes:
	google analytics:
	cookie
		ga: lasts for 6 months
		sdk: last for 30 days by default

	attribution
		ga: if i click today, and convert tomorrow, the attribution is the last touch, i.e. the last click
		aw: if i click today, and convert tomorrow, the attribution is the first touch i.e. the first click

	conversion count
		ga: if i purchase 5 things in one session, it counts as 1 conversion
		aw: if i purchase 5 things in one session, it counts as 5 conversions

	regular tracking code v sdk
		sdk: track installs/downloads, engagement (data about events), in app events(are actual events), facilitates attribution to ads,
		regular: unable to track installs/downloads,

	delay in reporting to
		ga: 24-48 hours for full reporting
		sdk: 24-48 hours for full reporting

		dispatching: to maintain battery life on mobile, batch processes are used to send data to analytics
			android: every 30 minutes
			ios: every 2 minutes
				both are customizable

			unique identifier for sdk is the same across app upgrades
				however if someone uninstalls, the identifier is removed
				if they reinstall, they get a new identifier

	Goals: custom events, any custom event has to be defined via a goal
		create an account
			category = signup
			action = regular expression =  success$
			use the event value as the goal value for the conversion = yes

	ga id
		UA-accountID-viewID

	signup event
		first an account must be saved
		then send the custom event to ga

continue:
	http://www.lynda.com/Google-Tag-Manager-tutorials/Implementing-GTM-variables/168238/373606-4.html
		google tag manager, about 6 minutes in
	http://www.lynda.com/Google-Analytics-tutorials/What-Acquisition-reports/197523/415201-4.html
	https://analyticsacademy.withgoogle.com/course05
		unit 3
todo:
	setup account for drupal
		news.magnifi.fm
	setup google tag manager
	clean up google analytics
		remove un needed accounts, properties, and views
	create some custom reports via the customization tab
	add lowercase filter to request URI

goals
	understanding the customer journey as they use your product
	understanding who they are and what their needs are

	e.g.
		routes people take to your site
		content they use
		sales
		goals conversion
		learn what pages are working for you, and against you

types of online objectives
	content publishing
		encourage repeat visits & engagements
		what keeps people clicking and interacting with the site

	online information
		help users find what their looking for when they need it
		what content are they finding / not finding

	branding
		awareness & loyalty
		shares, linked to?, and engaged with your site

	ecommerce
		sell products / services
		find ways to increase sales & track performance over time

	lead generation
		collect user info
		test test

site actions
	click
	buy
	exit
	new user
	repeat visitor

google analytics framework

	data collection:
		uses a small snippet of code embedded on every page
		is collected from:
			browser data
			URL
			content (viewed, how long it was viewed, referring source)


	configuration
		what to include / exclude

	data processing
		takes 4 - 24 hours
		organizes the information

	reporting
		through the google analytics interface
		or through API

attribution
	assigning credit for sales conversions

attribution model
	set of rules that define how to assign credit for sales and conversions
	at each point of a users journy

	last click attribution: 100% credit to the final touch point before a user purchases

	first click attribution: 100% credit to the first touch point of the user journey

google definitions
	dimension: describes characteristics of a piece of data
		e.g. browser, landing page, campaign, browser, exit page, screen, session
		geographic locations has dimensions, e.g. city / state

	Event: an action that is tracked when a user interacts with content
		e.g. playing a video/downloading a pdf

	goal: used to track discrete actions and their value; is a series of actions that must happen before a conversion is registered
		how well are you fulfilling your objectives?
		e.g. purchases worth more than $5


	conversions:
		a completed activity that you deem important to yoru business goals:
		everytime a user completes a goal, a conversion is logged
		goal conversion: e.g. signing up for a newsletter
		ecommerce conversion: buying a product

	Hit: an interaction that sends data to google analytics,
		e.g. viewing a page, page tracking, paid tracking, event tracking

	Metrics: a quantitative measurement of your data; an indiviudal element of a dimension that can be measured as a sum or ratio
		e.g. the metric of the city dimension is how many residents it has

	Pageviews: an instance of a page being loaded/reloaded
		one user can contribute multiple page views

	Segments: a subset of sessions or users that share common attributes
		allow you to analyze groups of sessions/uesrs
		e.e.g marketing channels, geographic region

	session: a period of time a user is active on your site
		30/minutes or more counts as one session, anything more is counted as a repeat visitor

		users that leave but return in less than 30 minutes still counts as the same session

	source/medium: a dimension that combines source & medium
		source: origin of your traffic, e.g. search engine / domain name
		medium: the general category of the source
			organic search (google)
			social (facebook)
			CPC (cost per click) search
			Referral from another website

Google analytics account
	google analytycs acocunt: contains accounts, configuration, properties, and views

	account: setup users & configuration settings to group of properties

	properties: a website / mobile application that gets a unique tracking key to group data together

	views: how you access reports for specific properties
		one for ad words traffic for domain a
		one for mobile for domain a
		etc.

		unfiltered data view: the master view
		test view: to test things out, before you roll those changes in your master view
			you only have data from the date you create a view

google analytics: creating accounts

	separate setup for website v mobile app

	website tracking method:
		universal analytics (UTM)

google analytics tracking ID
	copy and paste in before the closing head tag of your site
	account > admin > pick an account > pick a property
		below the property select tracking info
		select tracking code

	you can put it in a php page and include it on every page you want it on

	or you can use google tag manager
		you can add more tags on the same snippet
		tag manager > add new tag > choose product > choose tag type > fill out all the options > click publish > it automatically becomes enabled on your site

google analytics UI
	start at the top of page
		home
			list of all accounts and properties

		admin: manage google analytics
			acocunt properties & views: pick from left to right
			accounts: settings, user management, filters,
			properties: settings, link ad words, remarketing
				definitely review settings
				setup user access for this specific property
			views: goals, filters, ecommerce settings, segmentation

			filters: applied before they are presented in reports
				must be done BEFORE you launch
				are applied in the order they appear
					so if you include US then include canada
						only US will show, because canada was already excluded
						thus, choose custom filter with OR
							United States|Canada

				predefined filter: exclude / include only
				good filters:
					-ip filter: exclude you & employees from your data based on IP
					google what is my ip, need to check a few comps
					-lower case filter: so Ab aB are recorded as the same page
						lower case > request URI
		Reporting: grouped by theme, reports and dashboards
			left hand side: click report theme to see the specific reports
				intelligence events
				real-time
				audience: insight into who they are, devices, interests, location, demographics, level of engagement, browsers & networks, mobile devices,

					Overview: 10000foot look

					Cohort Analysis: group of users who share a common characteristic, defined by the cohort type

					Demographics reports: age, gender


					interests reports:
						affinity category: context for expanding your content in related markets that all of your users have this in common

						In-market segments: users that have demonstrated a likelhood to purchase your products / consume your content

					Geo:
						language:
						locations:
							becareful with this, because high density populations will always be more than low-density populations, so your super hot california, is just like everyone elses super hot california

					Behavior reports: measures how new users & repeat users utilize your site
						new v returning
						loyalty: how many times users are coming back, based on sessions
						engagement:
							average session duration
							page depth: how deep people are going in the site before abandoning


					technology
						browser & os
						Network


					Mobile reports:
						devices, screen size

					Benchmarking: compare your metrics to others
						channels, location, devices

					Userflow: all of the paths users have taken to your site until they exit (the red line)
				acquisition: where your users are coming from, behavior, conversion patterns (site navigation)
					overview
					all traffic
					ad words
					seach engine optimization: (web queries that link to your site)
					social
				behavior: how users interact with your site, content, flow between pages
					behavior flow
					site content
					site speed
					site search
				conversions: how all your channels work together to drive goals & sales
					goals
					ecommerce
					multi channel funnels
					attribution

				annotations: allow you to add notes to reports
					click down arrow below center of graph
					click create new annotation
					save
					a speech buble is now shown on the graph by the date text

				chart types: top right of the current chart
					graph
					motion chart: the 3 bubbles in the top right
						click the play icon to see how it moves
						or just drag the scrub bar

						you can change the type of motion chart by clicking the icons above it
				tables:
					choose a primary dimension and the table  changes
					you can click the checkbox to the left of rows to plot them on the chart above the table

					click column header to sort

					choose # of data points to show at the bottom of the table

					use the icons in the top right corner to change how the data in the table is displayed
						table: the default view
						percentage: pie chart + table
						performance view: horizontal bar chart + table
							shows relative performance of the selection dimension + metric
						comparison view: how the selected metric performs to the site average, the middle line is the avergage
							numbers to the right = better than average
							numbers to the left = worse than average
						pivot table: pivots the selected metric on a certain dimension

					use the search bar above the table to filter
		customization
			where you create custom reports & can use to review all of your dimensions and metrics

			metric groups: are your primary dimensions

Filters
	sort/slice the data
	in a report > click advanced next to the search bar above the graph
		is restricted to the dimension(s) currently shown on the report

good filters
	from a specific source|medium, e.g. yahoo|facebook (you have to use the pipe)

segmentation
	isolate & analyze subsets of analytics data
	a series of individual filters

	creating:
		go to a report > above the graph > click add segment
		or: admin > account > property > view > segments >

	good segments
		by geo region: country > Region (state) > City
		by operating system

dimensions & metrics combinations
	sessions + users: shows total sessions + new users v repeat users for each session

	country + operating system + sessions, acquisition, behavior
		will show you which countries, and operating systems are popular with your site so you can customize your site accordingly

dimensions definition:
	describe qualitative characteristics of users and sessitions
	dimensions are key value pairs (the source is google)
	dimensions can be grouped: e.g. city:dallas and browser:chrome to filter metrics

metrics definition:
	describe quantitative (sums, avgs, ratios) aspects of a users behavior
	metrics are numbers that describe dimensions (google new users are 56%)

	bounce rate: % of people who leave immediately after the first page (without more than 1 interaction)

	visitors: # of users coming to your site
		new visitors
		returning visitors
	visits: i.e. sessions, period of consecutive time a user is staying on the site

google analytics best practice:
	always think of the source/context/origin of a user
		each source will be a different type of user

troubleshooting
	is my tag working?
		go to where you get your tracking code, does it say 'installed' ?
		open a new tab and go to your site
			open another tab and
				go to reporting > go to real time > go to overview
				does it say at least 1 user?
		if both of the two is true, then its working

Basic setup
	1. filter out your IP from all reporting views
	2. setup user permissions
	3. ensure you know your interface

google analytics
	goals:
		attract traffic
			paid ads (adwords)
			organic searches
			email marketing
			offline marketing
		intermediatary goals
			micro goals, primary goals
				main goal: click a shopping link
				secondary goal: view the shopping page
		segments
			by browser, screen resolution, etc
		trends & contexts
			analyze your analytics in context of external factors
				how was the whether outside?
				was their a war going on?
				was their a holiday?
				was there a big fighting event?
				how are you doing compared to your competitors?
			accidentical competition
				your competitors offline often have little to do with your competitors online
			what day of the week did your campaign run on?
	how google analytics works
google analytics structure
	google.com/analytics : login page
		after logging in, youre presented with a list of accounts to which you have access to
		folder structure
			parent: the account
				child: web properties
					child: views/profiles that belong to each web property
						has the globe icon
						click the view to go to the reporting for that view

		view: a lense into the database that can be configured completely different from each other
			gets data from the web property it is associated with
			create new view
				admin > view drop down > create new view

		web property: a site you want to track
			admin > web property dropdown

reporting tab
	all of the built in reports for the particular view
	left side
		dashboards
		shortcuts
		intelligence events
		real-time: what shappening right now
		audience: reports for demographics, etc.
		acquisition reports: channels, all traffic, adwords, keywords, etc.
		behavior: performance of content, engagement, site search reports, etc.
		conversion: goals youve setup, ecommerce, multichannel funnel reports,

definitions:
	sessions: site visits
tools
	wasp: see what is firing (e.g. tags) on a site

tag manager {
	background:
		controls which tags fire, where, and under what circumstances
		central management of tags
		place the container tag once, and manage tag deployment via UI
		you can enable display advertising on your site via double click

		tags: collects information about user activity or page usage
			analytics tags, adwords tags, marketing automation tags, video tracking tags


		container snippet: contains the tag manager code,
			automatically inject scripts into your page without modifying the code

			holds 3 entities
				tags: code snippets that collect and manipulate data
					is like a google analytics view
				trigger: rules & conditions that specify tag manager when to fire each tag
					is like a google analytics filter
				variables: information that can be stored & accessed by your tags & triggers

		account:
			should be for 1 company

		tags:
			a javscript codeblock that tracks specific actions

		triggers: fires tags in response to events (actions taken by the user),
			variables: placeholders for values
				user defined: custom vars
				built in: e.g. page path, click id
			operators: defined relationship between variables and the values that must be true
				{{url}} = blah.com

			can setup multiple triggers that all must be true for a tag to fire


		strategy
			decide which tags to manage in tag manager
			decide what static & dynamic values(i.e. events/user actions) you want to pass from website into tag manager
			which tags (analytics, adword, etc) capture the events you need?

		variables
			each tag needs to know where to send the data it collects
			you can 'use' variables for this
			GA Account ID = UA-blahblha (this is a constant)
			URL = blah.com/blah (constant)
			Transaction total = {insert total here} (supplied by code)
			user timezone = {insert browser timezoe here} (supplied by code)


		docs:
			https://support.google.com/tagmanager/answer/6106009?hl=en

	errors
		test everything!
			wasp > tags > google-analytics.com > collect
		404 from GTM tag
			has the container been published?


	Steps

		setting up google tag manager
			1. create an account and container
				account = your company
				container = 1 for each website/app
				add tags to your container
					tags > new tag > google analytics >
					universal analytics >
					add tracking id of specific property from google anlaytics
					select the track type
					select trigger type

			2. deploy the container
				select container
				select preview to verify tags are firing
				click publish now
				place the container snippet immediately after the body tag on every page of your website


			3. test it
				look in wasp
				look in dev tools > network > filter for gtm

			notes about drupal
				you may have to load GTM after drupal loads to get the
				page counts correctly

		setup google analytics tag that fires on all pages
			new tag > google analytics >
			get tracking ID
				google analytics > admin > property
				>tracking code > get the UA number
			enable display advertising?
				demographic reports, remarketing with adwords, etc.
			keep track type on pageviw
			publish the changes

		creating a google analytics property variable

			steps
				variables > new
				give variable a name
				choose type
					constant: reference the same value from multiple tags
						value: google analytics property id
						you can now 'use' this variable anywhere you would
						normally place your google analytics property id
							e.g, when configuring a tag
		enabling variables
			open container > click variables > enable!
			go to your tag > configure > more settings > custom dimensions
			>pick an arbitrary index > click dimension value lego brick
			>pick the a variable to associate with the index
			publish it

		capture a page variable and send it to google analytics
			get the javascript variable from one of the devs
			create javascript variable in GTM
			insert the exact variable name as the variable name
			create a new tag
			go to google adwords and get conversion id and conversion label
			insert your variable as the conversion value in the tag


		create cross domain variable
			get data from multiple websites into one google analytics report
			requires 2 constant variables
				({{gaDomain}} write cookies tot he highest level domain to
					ensure you dont 'use' any data across sub-domains
				{{gaCrossDomains}} variabel that lists domains to be used in
					cross-domain tracking

			variables > new
			give variable a name: gaDomain
			choose type > constant
				value: auto
					cookies to this variable will automatically
					get writtent to the highest level domain
				click create
			variables > new
			give variable a name: gaCrossDomains
			choose type > constant
				value: domain1,domain2,domain3,etc
				click create

			add both variables to a tag
			tags > click tag you want to add the variables too
			click pencil to the far right
			click more settings
			click fields to set
			click add field > add your gaDomain variable
				fieldName: cookieDomain
				value: gaDomain (var you added earlier)
			click cross domain tracking
				auto link domains: gaCrossDomains (var you added earlier)
				'use' hash as delimiter: false
				decorate forms: false
			click continue > save tag
			click publish & preview


		google tag manager data layer
			javascript object that holds data
				vars passed from your website
				custom event information
				etc.

			structured in key value pairs
				blahKey:blahValue
			how to populate the data layer, 2 ways
				1.
					prepouplate values in the data layer
					setup trigger that checks for specific values
					if trigger condition is met, fire a tag to users who meet the condition

				2.
					push values from webpage into data layer via javascript
					dataLayer.push({
						'key':'value'
					})

		collect static values to create custom dimensions in ga
			click variable	> new
			give name : tripCategory
			choose type
				data layer variable: get values from website
				name: tripCategory
				data leyer version: 'use' the latest
				click 'set default value' to true
					in case the script breaks and doesnt pick up the values
					as expected, set a default value


			add the data layer to tag as last child of head tag on pages
				<script>dataLayer = []; </script>
			add push events to buttons/forms/etc or whatever needs to trigger
			in order for data to be passed to the data layer
				<a class="blah-button" href="#switzerland"
					onclick="dataLayer.push({
						'tripCategory':'skiiing',
						'tripLocation':'Switzerland'
					});">Details Button</a>

			create custom dimension in google analytics
				admin > select the property > select custom definitions
				select custom dimensions > click new
				add dimension name
				leave scope set to 'Hit'
				set 'active' to true

				copy custom dimension index into google tag manager,
					e.g.
						ga('set','dimension1', dimensionValue)
							dimension1 needs to map to the custom variable
							in google tag manager


			map your google anayltics customs dimension to
			your google tag manager custom variable
				create a new tag by cloning an existing one
					tags > clone an existing tag >
					click configure tag > change track type to event
					name  = pick a name
					label = sepick a label
					click custom dimensions > add
						index = enter the number of your dimensions index
							e.g. dimension1 = 1
						dimension value = select your variable
					click continue
				setup your trigger to only fire when someone clicks
					fire on > click > new
					event > click
					targets > just links > continue
					enable when >
						page URL [contains] somepage.html
					fire on >
						click classes [contains] [class of your button]

Ad words {
	remarketing: show ads to your past site visitors and customize those ads based on the section of your site people visited
		shared library on left hand navigation pannel
		go to audiences
		create a new remarketing list / pick an existing one

	remarketing tag
		collects the data from your website/app
		shared library > audience > click remarketing tag details > setup

	remarketing list
		filters the data collected by the remarketing tag
		the list must have at least 100 users

	remarketing campaign
		any campaign that uses one of your marketing lists to display ads

	dynamic remarketing: show your site visitors an ad with the specific product they viewed on your site

	progress
		created list of all visitors for 540 days

		remarketing tag

	remarketing:



		broad steps:
			place adwords remarketing tag on every page of your sitepass dynamic values to the remarketing tag on key steps of your site (e.g.
					the product ID of an item
					the origin and destination of a flight they searched for
					the deal id of an offer a user had browsed
					i.e. based on a variable you set in their browser, you can show a specific ad in response
				)
		two pathways for remarketing:
			1. create one instance of the remarketing tag for each step of the funnel and 'use' separate variables for each type of dynamic data you will need to pass to the tag via code on your page

					this requires placing specific code on each page of your site, in addition to the google tag manager code

					basically repeat the steps in pathway 2 below but for each specific step in the funnel

				1.configure variables for each piece of data you want to pass to the remarketing tag

				2.populate the variables dynamically either by pushing to the data layer, or pulling info from the page via custom javascript variables and/or custom html tags

				3. configure triggers
					choose event > choose filter > configure trigger


			2. create a single instance of the remarketing tag for your entire site and pass all the dynamic data needed at once in a single variable at each step of the funnel
					this requires creating one instance of the remarketing tag for each step in the funnel


				1. execute on every page a custom js tag that will check which type of page is being viewed, and based on this, execute some additional code to extract all the required dynamic paramter values at once and assemble them in a single object whose context si exactly the content that google_tag_params should have

						create custom html tag in GTM that contains a trigger to fire on all pages,

						the html tag should contain custom javascript code that:

							uses an a try catch statement, with a child if statement to check for the current page, and if true, extracts data from the DOM, and then pushes the the fireRemarketingTag event and the google_tag_params containing the page data into the data layer via dataLayer.push({})


				2. create a macro for google_tag_params
					the single macro will extract google_tag_params variable from the data layer


				3. create a trigger to fire the remarketing tag
					after the macro extracts the google_tag_params, you need a trigger to fire the remarketing tag

				4. configure adwords remarketing tag in GTM

		two pathways to retrieve data from site
			1. insert js code on the page that pushes data into the data layer

			2. create custom javascript variables that is fired by googel tag manager to retrieve data from the page via DOM and pass it into googel tag manager (this is done via the tag manager UI)

				When using a custom JavaScript variable, existing JavaScript variables from the website source code must be referenced as window['nameOfVariable']

					you will need to create a variable for each page that you are extracting data from, as each pages source code will be different, and you need to access the DOM differently

		triggers
			built by specifying a type of event, and one or more filters to specify when a tag should fire

				you need to choose DOM Ready in the third step when setting up your pageview trigger.

			events:
				pageview
				history change
				click
				form
				custom event
				javascript error
				timer

				Page View:
					Fires the tag on one of the three default events – gtm.js (Page View), gtm.dom (DOM Ready), gtm.load (Window Loaded).

					Click:
					Fires the tag when a click event is registered. You can specify whether to listen for any click or specifically a link click.

					Form:
					Fires the tag when a form submit event is registered.

					History Change:
					Fires the tag when a change in the browser history state is registered.

					Custom Event:
					Fires the tag when an event whose value you specify is pushed into dataLayer.

					JavaScript Error:
					Fires the tag when an uncaught JavaScript error is thrown by some script on the site.

					Timer:
					Let’s you set up a timer which fires the tag after a given interval (can be set to fire multiple times).

requirements {
	adwords need at least 100 users to even show data
	interests and remarketing
	clicked + targeting
}

definitions {
	channels
		Organic Search—Visitors who come to your website after searching Google.com and other search engines

		Paid Search—Visitors who come to your website from an AdWords or other paid search ad

		Direct—Visitors who come to your website without a traceable referral source, such as typing your URL into their address bar or using a bookmark on their browser

		Referral—Visitors who come to your website from another website by clicking on a link

		Social—Visitors who come to your website from a social network

		Other—If you use UTM parameters for custom campaign tracking, the traffic linked to those campaigns is listed here

}


Google analytics

Google Tag manager
	-Each element you want to capture has to be a different tag

	track button click
		1. create new Tag
		2. type = event
		3. enter details
		4. fire on = click
	Fire on elements based on class/id
		-to trigger based on element with multiple classes, set each class as a different firing rule

Adwords
	Link adwords to GA account
		1. in adwords, click tools
		2. click conversions
		3. click analytics

	link  view to Adwords
		1. in adwords, click the gear icon
		2. click linked accounts
