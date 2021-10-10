customization: http://developer.sugarcrm.com/category/sugar-7/

    'key' => 'AKIAJO4MMSWO3RN5JGTA',
    'secret' => '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'

other random notes
	what is removed from html templates
		http://support.sugarcrm.com/02_Documentation/01_Sugar_Editions/01_Sugar_Ultimate/Sugar_Ultimate_7.6/Application_Guide/02_User_Interface/#TinyMCE
		no inline supported on: <div>, <img>, and <table>

	Trying to get property of non-object
	 	I think this happens when you are no longer validated




agenda:
	installation
	core

	sidecar
	api
	troubleshooting & tools

my questions
	recommended solutions for speeding up summation with details + matrix reports, and using charts with reports that contain 10k>
		says yes! and that sugar won't delete any records

installation
	requirements
		LAMP
			optional databases
				DB2 since sugar 7.2
				Oracle since 7.6 (new installs only)
				MS SQL since 7.6 (new installs only)
			PHP 5.3.25 -> 5.4.x
				BCMath
				php-xml(SAML)
				JSMin
				Php caching: choose one of the above
					APC (recommended, requires install on each server)
					memcache, only on 1 server
					redis, only on 1 server
			Elasticsearch (.90.10, 1.3.1): https://support.sugarcrm.com/04_Knowledge_Base/02Administration/100Install/Installing_and_Administering_Elasticsearch_for_Sugar_7/
				used to speed up full text searching
					stores index database data, so it doesn't have to be retrieved from the database
				open source search engine, JAVA, highly scalable
				recommended to be put on its own server
					can have a cluster of elasticsearch servers
				has no concept of user authentication, be sure no one knows how to access your elasticsearch or they will have access to your database

			apache
				allowoverride all (is an apache setting, find out where it is for your specific version of apache/linux)
				mod_rewrite: http://httpd.apache.org/docs/current/mod/mod_rewrite.html
					rewrite base/yoursugarcrmlocation (setting must match)
				mod_deflate: compress data before it is sent to to the client
					all of the above 3 should be enabled

			Linux
				redhat, centos, oracle
					the best ones, other ones may work
					centos is used in the ondemand environment


	installation steps:
		install the required linux, apache, php, and mysql
		drop the sugarcrm zipfile in your apache public root folder & unzip it
		go to your public apache root to go through the install (e.g. localhost/yoursugarfile)
		once the install is complete, you can return to localhost/yoursugarblah

	deployment strategies
		at least 3 servers
			elastic search
			web server
			database
	notes
		load balancers are good, research thems
			load balancers connect to multiple servers
			users connect to the load balancers, which sends them to the least stressed server

other good appsA
	postman (browser plugin) testing the v10 api

other good functions
	php
		http://php.net/manual/en/function.json-encode.php
		http://php.net/manual/en/function.json-decode.php
		http://php.net/manual/en/function.serialize.php
		http://php.net/manual/en/function.unserialize.php

background
	sugarcrm 7 is a heavy javascript application


Sidecar/MVC
	defines the views & components for sugar modules
	is the first component that needs to be downloaded when you access sugar
	is about 3.5 megs (mod deflate makes it only .5 megs)

	jQuery

	Underscore
	Backbone
		both used to define objects,
		backbone is the heart of sugar, provides the controller
			takes the user input, converts it into backend code, invokes the sugar api, waits for the api to respond, and presents it to the view/user/handlebars/nvd3

	Handlebars
		templating technology, used in the view
		renders HTML

	Bootstrap

	NVD3
		all charts are using NVD3

	sidecar metadata: always in php
		layout => name => your layoutname
			this is how you add a layout
		components => view => name
			this is how you add a view

	sidecar javascript controllers: always in javascript (*.js)
	sidecar views/templates: always talking about handlebars views (*.hbs)
		Best practice: Shared name across all files
			preview.hbs
			preview.js
			preview.php

	page analysis
		layout:
			specifies the structure of the page
			e.g. on the lead record view
				the record view is a layout
				the dashboard is a separate layout
			layouts are containers for page components (views)
				can contain nested layouts
				most pages include mulitple layouts
			You can create new layouts, or customize an existing one

			Locations
				global layout folder: sugar/clients/base/layouts/layoutname/
					layoutname.php (metadata)
					layoutname.js (controller)
					layoutname.hbs (handle bars view)


				module specific
					sugar/modules/modulename/client/clients/base/layouts

				common defaults:
					sugar/clients/base/layouts/record/ #this is the record view layout

		view:
			are embedded in layouts
			render HTML and widgets (fields)
			most pages include multiple views
			subpanels, dashlets, are all different views

			location: sugar/clients/base/views/viewname/
				viewname.php (metadata)
				viewname.js (controller)
				viewname.hbs (handlebars)

			Record view
				'create record' has a different view since its based on data that is not currently in the db
					global locations
						sugar/clients/base/views/create-actions/ (this is what you see when you are creating a record)
						sugar/base/views/record/ (this is what you see when you are viewing an existing record)
					module specific locations
						sugar/modules/modulename/clients/base/views/record/
							record.js (has access to everything in the .php file)
							record.php

							review the record view to see the available parameters
							there is no documentation

						modules/contacts/clients/base/layouts/subpanels/subpanels.php

				params:
					acl_action => 'name' #the current user must have the permission to invoke this action (e.g. on a button), this is in the .php files
						edit
						view
						create
			Metadata
				'related_fields' allows you to retrieve fields from the DB that will not be displayed, but will be used for other purposes
					check for example in sugar/modules/leads/clients/base/views/record.php file


				sugar/custom/modules/clients/contacts/base/layouts/subpanels/

		all custom code should go into a custo folder
sugar/clients/portal (Sugar portal)
sugar/clients/base/api (the api)
menus:
	module specific
	user menu
	quick menu
	sugar/modules/modulename/clients/base/menus/header

	routes: connect layouts to menu items
	layouts: connect menu items to layouts

sugar/clients/base/views/profileactions
	associates the menu with the user
		fields:
			fields go in views
			a field can be an actual db field, or an element (star button, follow, next button, etc)

			'type' the type of field, e.g. fieldset

			embedded in views
			define widgets
			handle formatting and unformatting
			view specific templates


		custom validation
			custom/modules/modulename/clients/base/views/
api
	magnifi.sugarondemand.com/rest/v10/help

filters
	sugar/modules/modulename/clients/base/filters/default/default.php

	create your own filter
		sugar

	create custom filters:
		http://developer.sugarcrm.com/2014/03/10/creating-custom-filters-in-sugarcrm-7/

Architecture
	Client Side MVC
		Implemented at Browser
		Model (Data)
		View (UI/UX)
		Controller (Binding)
			acts like a traffic cop, responding to user input, passes it to the backend through a series of restcalls, receives the data back, and sends it to the view, which makes the UI/UX, and then sends it back tot he suer


	Services Oriented Architecture (SOA)
		done mainly through the restful API
		everything happens via the API, anything you do in the interface


	JAVASCRIPT
		anything front end

	php
		database CRUD
		metadata
		BWC
		API (rest)

definitions
	metadata: information about data
		not stored in the database, but exist in php files



Framework
	SugarBean:
		classes that represent objects
		core of sugar

		database connection

		location: sugar/data/sugarbean.php
			the core class

			examine related records

			Logic Hooks
				before save, after save, etc. are events that you can interject php code
					before save: you dont have to explicitly save it in code, as its a before save and will save automatically

				support.sugarcrm > sugar developer > sugar developer 7.5 > search for logic hooks

				Module Hooks: Logic hooks that can be used to execute logic when working with modules

				Place custom logic hooks definition :custom/extension/modules/modulename/ext/logichooks/somehookname.ext.php
				Place custom logic hooks code : custom/modules/modulename/somefilename.php

					$hook_array['before_save'] = array();
					$hook['before_save'][] = array(#, 'Arbitrary Hook Name', 'location/of/custom/logic/hook.php')

					code
				$bean: represents the current record passed
					$bean->last_name

				$args


			Web Logic Hooks:
				restricted to after events
				only vailable in enterprise/ultimate
				Make a call to a restful endpoints
				web v standard
					provide an interface for making a rest call to a webservice where you can past sugar data too
					allows you to send data to an external web service api

					doesn't process a response

	Sugar Query:
		a class that allows you to query the database
		eleminates the need to write raw SQL queries
		Now you no longer need to know the db structure that sugar uses
		Uses the bean/SugarBean object

		Can only retrieve(i.e. read) data, cannot perform Deletes/updates/etc
		Typically used within php code, like a custom api/logic hook

		dev blog:
			http://developer.sugarcrm.com/2014/04/22/sugarcrm-cookbook-sugarquery-the-basics/

		example:
			clients/base/api/filterapi.php


		steps
			setup (see picture)
				include teh sugarquery.php
				instantiate a sugar query
				create an array of field syou want to retrieve
				spcify which object you want to retrieve data from
			do
				$query->select($fields);
				$query->from($someobject)
			you can still add raq sql
				$query->joinRaw(string_representing_raw_sql)
			other stuff
				$query->where()->equals('first_name','noah')
				$query->orderByRaw('first_name','ASC')
				$results = $query->execute();
					execute('')

			$bean->description = $query->compileSql();
				gives you the raw SQL produced by your sugar query
				this saves it into the bean's description field


		raw query
			$bean->db->query($query);
				$query is a raw sql query

	Extensible Security: all about record visibility
		6.7/higher
		provide a mechanism where you can create more complex visibility models and apply them to various sugar views
		allows you to add to the FROM/WHERE clause of a specific sugar query
			Thus, you can manipulate Object lists
				ListView
				Export
				Popups
		allows you to modify the visibility of records by

		Security Layers
			Who is the owner of the record based on the 'Assigned To' field
				This person always has access to the record

				Assigned to works on a record by record basis:
					an accoutn can be assigned to one user
					the account's contact assigned to a different user
					it is not inherited
			Teams:
				Any user that is a member of the team can see the record
				(doesn't mean you can do things with it)

			Roles: determines what actions you can perform on a record you can see

		Default:
			TeamSecurity Class:
			ACLVisibility Class:

			File locations
				sugar/data/visibilty
					teamsecurity.php
						the filename MUST match the class inside of the class when creating your own


		Custom:
			sugar/custom/data/visibility
				you can also view the compiled security via the combined vardefs.php that is created in cache/modules/
				search for 'visiblity'
					specify the name fo the class that you want to apply to this specific module

			functions
				public function addVisibilityFrom
				public function addVisibilityWhere


		Apply a custom security setting to a specific module
			add it to the module's vardefs.ext.php

			vardefs.ext.php


		Notes
			sugar SQL never returns data that you cannot see, based on the current user

		sugar/data/beanfactory.php
			use it to create new objects in the system programmatically
				e.g. to create a contact/account/etc
				can be done via sugarbean, but is recommended to do it through beanfactory
			use it to read objects in the system

	Objects (modules)
		classes that represent modules
		sugarcrm/modules/modulename/modulename.php


	vardefs.php
		notes
			can be used to change a input field to a dropdown, remove a button, etc.
			defines the structure of all fields, if you chagne the vardefs.php file, you change the type of data

			contains definitions that correspond to various objects/modules/database
			metadata that is used to help define the various modules in the system

			each module has a separate vardefs.php file
			each distinct vardefs.php file is later COMBINED into one global vardefs.php file
				data/cache/modules
			sugar combines the vardefs.php files and loads them into cache
				sugar/cache/modules/module/modulenamevardefs.php
			sugar/modules/modulename/vardefs.php
				find the name of the table in the db where the record lives
					$dictionary['tablename']
		documentation
			vardefs overview
				http://support.sugarcrm.com/02_Documentation/04_Sugar_Developer/Sugar_Developer_Guide_7.6/50_Extension_Framework/Vardefs/

			introduction to manifiest file
				http://support.sugarcrm.com/02_Documentation/04_Sugar_Developer/Sugar_Developer_Guide_6.7/02_Application_Framework/Module_Loader/02_Introduction_to_the_Manifest/
				to modify the vardefs in an ondemand instance, you need to upload a manifest file

		examples documentation
			an installable module that creates new fields:
				http://support.sugarcrm.com/02_Documentation/04_Sugar_Developer/Sugar_Developer_Guide_7.6/70_API/Application/Module_Loader/90_Package_Examples/Creating_an_Installable_Package_that_Creates_New_Fields/
			manually create new fields:
				http://support.sugarcrm.com/02_Documentation/04_Sugar_Developer/Sugar_Developer_Guide_7.6/30_Data_Framework/10_Vardefs/10_Examples/Manually_Creating_Custom_Fields/

		the 5 main record types
			sugar/include/sugarobjects/templates/templatetype/vardefs.php


		locations
			custom/extension/modules/modulename/ext/vardefs/vardefs.ext.php
				this is where you make customizations, e.g. turning a subject input field to a dropdown menu

			research:
				vardefs
					includes the $dictinoary array, which is crucial to modifying stuff

			extensions framework
				has examples on modifying the vardefs.php

		examples
			change a field type from 'input field' to 'dropdown field'
				review an existing field to get the definition, and change your field to look like it
				dropdown: type = enum, domain = options for dropdown

				vardefs extention
					custom/extensions/module/modulename/ext/vardefs/vardefs.ext.php
					the $dictionary holds an array that mirrors the array structure in cache/modules/modulename/vardefs.php #this is the combined vardefs for this specific module
						you can delete the entire contents of the cache folder, reload sugarcrm, adn it will rebuild the cache + javascript files

			change the query for a subpanels relationship
				create the relationship through studio or find an existing relationship
				customize relationship METADATA to point to a custom link file and class
					custom/Extension/modules/MODULENAME/Ext/Vardefs/RELATIONSHIPNAME.php
					add the following items to the end of the array and set the existing relatioship key to empty string
					// Blank out relationship
						'relationship' => '',
					// New fields
						'link_file' => "custom/modules/MODULENAME/YOURNEWLINKNAME.php",
						'link_class' => "YOURNEWLINKNAME",

				customize relationship title by creating a new file(must also edit vname in link above to match the LBL name in this file)
					custom/Extension/modules/MODULENAME/Ext/Language/en_us.YOUR_CUSTOM_NAME.php:
					add the following
					<?php
						$mod_strings['LBL_YOUR_CUSTOM_NAME_SUBPANEL_TITLE'] = 'Your Custom Name';
							#keep the LBL_____SUBPANEL_TITLE part and just change your custom name
							#e.g. LBL_PERFORMER_DATES_SUBPANEL_TITLE
					?>
				customize relationship title 2 (edit 'label' with the LBL name used in link above)
					custom/Extension/modules/MODULENAME/Ext/clients/base/layouts/subpanels/RELATIONSHIPNAME.php
				override relationship code by creating the file you specified as the 'link_file' attribute in step 1
				also make sure the class name matches the 'link_class' name
					custom/modules/MODULENAME/RELATIONSHIPNAME.php
					see performerDates.php in code examples/sugar/ dir

			performer dates: magni_dates 1
			venue dates: magni_dates 2

	customizations
		studio

		module builder

		sugarlogic
			conditional visibility of fields
			calculated values
			dependent dropdowns

		web logic hooks


		extensions

custom button
	go to the records viewdefs
		e.g. accounts > base > view > record = array()
		adjust the button metadata to include the button
		create a custombutton.js file
		extensfrom: "rowactionfield", (its an existing field type used for menu actions)
			clients > base> api > fields

create dashlet/dashboards
			custom > client > base > views > yourcustomdashlet
				.hbs, .js, .php


clarification on the answer…Dashlets can be made accessible to All users…a Dashboard cannot


views
	there is a:
		create view
		edit view
		list view
		record view

		custom > modules >


		dom events
			a good number of the definitions are also found in ./sidecar

logic hook example: http://support.sugarcrm.com/02_Documentation/04_Sugar_Developer/Sugar_Developer_Guide_7.5/60_Logic_Hooks/90_Examples/

styleguide: review it!


charts
content > charts

https://magnifi.sugarondemand.com/#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report


sugarchimp
SugarChimp
	scheduler: https://magnifi.sugarondemand.com/#bwc/index.php?action=DetailView&module=Schedulers&record=9cf94421-c2ef-6d4f-0af7-556e2e422111&
	can't hide the ghost modules
	health status: https://magnifi.sugarondemand.com/#SugarChimp/layout/health-status
		order of operations
			Pending to MailChimp
			Pending from MailChimp
			Pending Activities from MailChimp

		General Configuration
			set to debug and activity will appear in the sugarlog

		List Sync Status
			once synced, do not touch or it will get everything out of wack
			only modify if you want to remap fieolds between sugar & chimp

		field mapping: https://magnifi.sugarondemand.com/#SugarChimp/layout/field-mapping

		process for combing lists
			unsync list being removed from mailchimp in sugar
				target list > choose list > mailchimp list > set to null

			combine list in mailchimp

		target lists
			you can specify other sync details here

		activity type
			open/sends/clicks
		
