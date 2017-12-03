quick notes
		display campaigns do not use keywords for search targeting, but match websites whose descriptions match keywords
		dont use keywords for remarketing campaigns
docs
	ad types https://support.google.com/adwords/answer/1722124?hl=en&ref_topic=3121941
	https://support.google.com/adwords/answer/2375416?hl=en
	https://support.google.com/adwords/answer/3124536?hl=en
	https://support.google.com/adwords/answer/3265299?hl=en&ref_topic=3121943
	https://support.google.com/adwords/answer/3210317
	https://support.google.com/adwords/answer/2701222

facebook
	https://www.facebook.com/ads/manage/powereditor

analytics
	push data into adwords
	push goals into adwords

tune doc
	http://help.tune.com/marketing-console/google-adwords-integration/display-network-mobile-app-install-ads-android-ios/
	http://help.tune.com/marketing-console/measuring-mobile-app-installs-from-non-trackable-google-inventory/

dynamic
	headline & url+
	 are modfiia le

adword varibles syntax
	"" = phrase matching
	{} = exact matching
	{Keyword}
	{var:default value}
	{KeyWord:Listen. Go. Live.}
		Keyword ads
			the user searches a term
			parts of the search term are matched against our keywords list
			the matches are placed in the headline of our ad and shown to the user

	click the keyword tab to see a list of keywords people are using to search your site
		if you dont see the keywords column ont he report, click modify columns and add the keyword column
		from this page you can also add related keywords as well as add negative keywords so that you dont bid on these


	keyword ads
		duplicate existing adds and be sure to set them as duplicates

	Dynamic Keyword Insertion Ads
		if a user's search contains words that matches your list of predefined key words
		you can take the matches and insert them into your ad headline or description

		Goal
			we are targeting a list of cities
			when a user search for those list of cities, and also currently resides

	dynamic ads
		must setup brand new ads 

issues
	some ads are not in the proper format


DDM (google)
	floodlight
		link double click to google tag manager


	google analytics and DCM can be integrated
		requires GA premium


in market audience
	users who interested in and researching buying a service or product
	they are in the market to make purchases

affinity audience
	users who are interested in the market
	they are the know it alls

definitions
	campaign: set location & budget
		A set of ad groups (ads, keywords, and bids) that share a budget, location targeting, and other settings. Campaigns are often used to organize categories of products or services that you offer.

		ad group: set of keywords, ads, or bids that are based on categories of the website
			contains one or more ads which target a shared set of keywords. 
			You set a bid, or price, to be used when an ad group's keywords trigger an ad to appear. This is called a cost-per-click (CPC) bid. 
			You can also set prices for individual keywords within the ad group. Use ad groups to organize your ads by a common theme, such as the types of products or services you want to advertise.

		keywords: Words or phrases describing your product or service that you choose to help determine when and where your ad can appear.
			Use keyword matching options to help control which search terms will trigger your ad to appear. 
			When you enter keywords, we'll make them broad match by default. This means your ad is eligible to appear when someone searches for any variation of those keywords. 
			To use the other keyword matching options, you'll need to add special punctuation to your keywords.
				with the exact match option, you can make your ad eligible to show only when someone searches for your exact keyword and nothing else. 
					You just need to add brackets, like [tennis shoes], to your keyword.

			Keyword-level bids override your ad group's default bid

			keyword insertion:
				https://support.google.com/adwords/answer/2454041?ctx=tltp&authuser=0

					et's say you're advertising a chocolate shop. You could use a keyword insertion code in your ad headline: 

					Headline: Buy {KeyWord:Chocolate}

					AdWords will try to replace this code with one of your keywords in your ad group ("dark chocolate," "sugar free chocolate," "gourmet chocolate truffles"), but when it can't, it'll use the word "Chocolate." 

		Budget: An amount that you set for each ad campaign to specify how much, on average, you'd like to spend each day.

	campaign settings
		types: search & display, search only, display only, shopping

	campaign types
		Remarketing allows you to show ads to people who have previously visited your website or used your mobile app. 

			steps for display network: https://support.google.com/adwords/answer/3210317

			steps for search network: https://support.google.com/adwords/answer/2701222


		Dynamic remarketing takes this a step further, letting you show previous visitors ads that contain products and services they viewed on your site
			With messages tailored to your audience, dynamic remarketing helps you build leads and sales by bringing previous visitors back to your site to complete what they started.


			steps
				Create a feed that includes all of your products or services, along with details about each item (unique ID, price, image, and more). These details are then pulled from your feed into your dynamic ads. You’ll upload your feed to the Business data section of your Shared library, unless you’re a retailer. If you’re a retailer, you’ll upload your product feed to the Google Merchant Center.

				Add the dynamic remarketing tag with custom parameters to all pages of your website. The tag adds your website visitors to remarketing lists and associates them with the unique IDs of the feed items they viewed. You’ll find your tag in the Audiences section of your Shared library.

				setup the dynamic ads: Dynamic ads use layouts in numerous sizes and formats for modern platforms, including HTML5 for mobile devices. You’ll create dynamic ads in the Ad gallery.

		dynamic search ads
			https://support.google.com/adwords/answer/2471185?hl=en&ref_topic=3119126
				Unlike most text ads, which are targeted to queries directly by keywords, Dynamic Search Ads show based on the content of your website. This means you don't have to maintain lists of keywords or landing pages. Here are a few reasons Dynamic Search Ads can be useful for your campaigns:

				Instead of keywords, we use content from your website domain to target your ads to searches. To do so, we use Google's organic search index of your website to determine which searches might be relevant to the products and services offered on your website. Here's how it works:



	display network: text, image, video, rich media
		collection of websites that show adswords ads
		mobile sites, apps, millions of sites
		based on topics, keywords, interests, etc.

	search network: 
		ads appear in the search network; ads appear when a user searches for terms related to your keywords
		websites include google search and non google search sites


	sitelink extension:
		when you search on google.com
		you'll get the main ad
		and underneath, you'll get links to specific pages
			each page is a sitelink extension

	shopping: 
setup rules on search campaigns
	where its targeting top performing keywords
	individuals who have visited the site but have not converted


	Remarketing allows you to show ads to people who have previously visited your website or used your mobile app. 


TUNE
	downstream events require a new sdk to be installed in the app

	measurement url
		created per channel (e.g. search v display)
		put it in adwords as the tracking template
		adwords will still send users directly to the click url, but also fire off the tracking template
			metadata
				device type/model
				ip
				search / display network
				placement name
				creative name
				keyword

		for display
			same steps as above
			but you also need to go to tools > new conversions > app

			click server to server feed
				copy the conversion id and label and go back into tune
				create a new postback url and include your conversion id and label

			go back to adwords and include the postback url from tune into adwords


	sdk fires to tune
	adwords fires to tune
	tune matches sdk users to adwords users
	via postback urls, tune will send conversion data to adwords


	tune tiering
		counts unique app opens towards our cost
			not necessarily total clicks

Meeting Logs
	3/13
		fluctuation in number of clicks can be attributed to?
			nature of clicks
			daily budgets can fluctuate, i.e if you're click through is high, adwords could spend 20% more budget
			enhanced cpc bid strategy, if you convert bidder on certain days, it will bid more on those days moving forward


target and bid
	only bid on people if they match this targeting method

bid
	will bid on users who match the audience


	remarketing and bidding higher on a remarketing list
		we selected a campaign
		we selected an ad gorup within that campaign
		we added new remarketing list to the ad group
		we also add an exclusion remarketing list to the ad group
		we then adjusted the bid adjustments for that ad group to at least 40% starting off, then we will adjust based on performance

	targeting locations
		click campaign
		click locations
		add a new location
		go to all settings
		click advanced
		edit 'target'
		choose second otion 'people in my target location'

	campaign audience exclusions
		on cmapaign page ont he bottom

	context filters (where to never show on pages)
		to the right of campaign audience exclusions

	placements
		shows you where your ads have been run on
		you can even bid higher on certain websites

	bid adjustments
		bid higher on a specific ad group configuration (e.g. bid higher on a remarketing list)
		click the bid adj column




log
	11/24
		awareness mobile
		sf area display only
			remove all converters list from targeting
			add all users list to target
			exclude converters from campaigns
			enable custom bidding on high performacing topics, 
			enable custom bidding on high performing devices
			add ad schedules to target periods of the day that draw the highest clicks/converters based on google analytics data
			be conssitent in all campaigns

nation wide mobile
sf area display only
concerts in city

mobile targeting
	android
		OS	Remove
		Version 5.0 and above	 
		Android	Remove
		Version 5.0 and above
	ios