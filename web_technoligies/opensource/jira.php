really goode notes
	the project summary page is where you can configure the project
		gear icon (top right) > projects >click project

	When you release a version from a kanban board, only the issues in the
	DONE columnn will be part of the release
	all other issues will still reamain on the board

scrum v kanban
	both subsets of agile

	-scrum
		all about target deadlines & releases
		all about planning
		all about backlogs, iceboxes, current, etc. type of board

	-kanban
		all about continuous release
		all about prioritizing

	slide 1
		http://www.slideshare.net/dimka5/introducing-agile-scrum-xp-and-kanban

JIRA
	notes
		The best way to modify the project is via the project admin page!!!!
			https://magnifi.atlassian.net/secure/project/ViewProjects.jspa
			click the project name

	epic: a theme for a collection of work
		similar to a tag
		dev plans to build this out to provide more functionality than tags
		allows you to quickly see which issues are part of which epic
			with tags you have to create a filter

	workflow
		totally customizable
		determines the swimlanes

	burn down chart
		blue line is what you should be doing
		red line is the actual
			-when you add issues to the current sprint,it increases the scope, and makes a jump UP in the red-line on the graph
			-when you see a sharp drop, that means multiple issues were closed at the same time
		-you want to see a smooth slope down
			-you want the red line to be below the blue line (ahead of schedule), or as close to the blue as possible
		-starts with total points, and moves down

	kanban
		just a work and report mode
		no plan mode

	scrum
		plan mode
		work mode
		report mode

	Other
		Tickets are raised inside projects - by those with the create issue permission and associated with speicfic issue tpes
		-once created, tickets can be worked on by users with permissions and reassigned, resolved and closed/reopened
		-search engine very powerful
		-search results can be saved as filters, adn you can put the filter results on dashboards

	UI
		gear >system >edit settings
			-applicatin title: title of the jira app
			-mode: public any user can sign up
			-private: only admins can create new users
			-max authentication attempts: how many login attempts are allowed before capta is shown
			-voting: on/off
			-watching: on/off
			-allow unassigned values: on/off (on will allow issues to go to 'unnassigned user', off forces unassigned values to go to the project lead)
			-accept remote api calls: on/off

			Navigator columns
				are the columns returned when you query the DB
			look and feel
				favicon
				system banner (message showed across the entire system)
			application navigator
				when you click the top left 3 bar menu, which options are available to choose from
			import & export
				backup manager
				external system import
				JIRA import
			Mail
			advanced
				re-indexing
					like sugarcrm quick & repair
					plugin has been updated, errors on dashboard, searching is slow
					updates the db
				events
					whenever something happens, you can trigger stuff
				webhooks
		MODIFICATIONS
			remove fields from a screen

		system > issues
			issues
				issue types: e.g. task, feature, etc.
				issue type schemes: associate issue types to projects,
					there can be different rules for different projects
				sub-tasks: child tickets
			screens
				screens: what fields belong on which screens
					-A screen is an arrangement of fields that are displayed when the issue is:
						created
						edited
						transitioned through workflow.
				screen schemes: customize what screens are shown based on operation, e.g. view issue / edit issue
					-what screens are shown for each issue operation
				issue type screen schemes: what screen to show for what issue type
			fields
				custom fields: create new fields
				field configurations: are fields on screens, hidden, or mandatory?
				field configuration schemes: associate a field  configuration to a project
		PLAN mode: the backlog
		WORK mode: active sprints
		REPORT mode: reporting

	ISSUES
		project:
		issue type:
		Summary: this is what users can search for
		description: not searchable
		priority:
		attachments: 10mb limit
		Epic/Theme: for filtering, research this
		Epic Link: actually links the issue to the epic
		Story Points: actual complexity to complete in story points
		Estimate: estimated complexity to complete in story points
		Due Date:
		Sprint:
		Reporter:
		Assignee: e.g. PM owner
		Labels: search tools, e.g. tags/keywords
		Linked Issues:
			blocks
			is blocked by
			clones
			is cloned by
			contains
			is contained by
			duplicates
			is duplicated by
			relates to

JIRA Steps
	Setting your home page: your profile > jira my home > pick an option

	create boards: https://confluence.atlassian.com/display/AGILE/Creating+a+Board
		click jIRA agile menu >> manage boards || getting started (to choose scrum/kanban)
		create board >> scrumm || kanban
			 New project and a new board || Board from an existing project || Board from an existing Saved Filter

	Viewing Boards
		Agile Nav Bar > select board

	Board Filters: 
		known as 'quick filters' and are available on the board's main page

	End a sprint
		Finish active sprint:
			board > sprint icon > click 'complete' in top right

	delete a sprint
		contact atlassian support with sprint id

	Release sprint as version:
		finish a sprint > go to sprint report > click 'view in issue navigator' link > bulk edit > field edit > affects version / fix version
	
	Release a version
		Kanban: board > on the far right click 'release' > all issues in the finished column will be added to the release

	Create Epic
		scrum board > backlog > tools > show epics panel > create epic > drag and drop issues into epic

	Adding Issues into epics
		C:\Users\Noah Hall\Desktop\2015-07-31 14_02_19-Browse Projects - JIRA.png


	issue estimation & tracking
		go to a board > down arrow > configure > Estimate in left column
	
	Estimation: ONLY For SCRUM
		backlog > click issue > add # in estimate field
		predicts how long issues in the backlog will take to be delivered

		Once a sprint is active, there is a 'remaining field' for each issue

	create issue
		Nav bar > create issue button 

	Ranking Issues
		SCRUM: Backlog > drag and drop to new order
		KANBAN: drag & drop to new order for each column

	Viewing issues:
		Issues Nav Bar > Reported by Me || My Open Issues
		Project > Board > Issue search icon in left > down arrow in middle column
		Issues Nav Bar > Search for Issues > left column
			
	Transitioning Issues
		On a board: drag and drop
		Issue detail page:
			click one of the buttons
			click the Workflow down arrow > click one of the statusese

	share an issue
		issue detail > share button in top right > enter username/email & note

	Watching Issues
	
	finding issues
		basic search
			quick search in the top right corner of the page
			the default search when you go to the issue page

		advanced search
			go to issues and click 'advanced'
				order by field ASC, field2 DESC, etc.
				field = "text" orderby field ASC
				field = "text" and field2 = "text" or field3 = "text"

				filter codes
				 = equals
				 != doesn't equal
				 ~ contains
				 ~= doesn't contains
				 EMPTY means null
				 NULL means empty
				 <
				 >
				 <=
				 >=
				 now()
				 IN	(text,text,text)

	Issue attachments
		as a file
			issue > more > attach file
		or as screenshot
			issue > more > attach screenshot

	Creating filters
			use the basic/advanced search > click save
	
	create sprint: 
		select a scrum board > click backlog > click create sprint at top of backlog
			if you cant enable sprint
				enable ranking & check your user permissions
					https://confluence.atlassian.com/display/AGILE/Enabling+Ranking

			you can create multiple sprints, but only one can be enabled by default
				to enable multiple sprints, use Parallel Sprints in Labs
	
	email to case
		setup one email per project
			system > mail > incoming mail
			new pop / imap mail server
			name: arbitrary value
			description: arbitrary value
			service provider: e.g. google apps
			protocol: regular / secure
			pop /imap port: leave blank for default
				pop 110
				secure pop: 995
				imap: 143
				secure imap 993
			timeout: if blank, it defualts to 10000 milliseconds
				no timeout: enter 0 / a negative number
			username: your your email username
			pw: your email password

	view team workflow
			project page > backlog > click down arrow next to sprint name >click the three dots next to the list of avatar

	view project information
		projects > click one > click the rocket ship
				change from activity stream || statistics

	set estimation statistic for a specific board
		board > configure >

	shortcuts
		https://confluence.atlassian.com/display/AGILE/Using+Keyboard+Shortcuts
		'l' to label an issue.
		'm' is comment on an issue.
		'z' to display your board in 'Projector' mode (i.e. full-screen).
		'.' for the JIRA Operations dialog.
		'j' to go to the next issue (down) in a column on a board.
		'k' to go to the previous issue (up) in a column on a board.
		'n' to go to the next (right) column on a board.
		'p' to go to the previous (left) column on a board.
		't' to toggle between hiding or showing the detail view of the currently selected issue on a board.
		'o' to open the issue which is currently showing in the detail view on a board.
		'Enter' to submit the content of a field being edited in the detail view on a board.
		'Shift' + 'Enter' to add a new line to a field being edited in the detail view on a board.
		's' + 't' to move an issue to the top of the current column on a board. (Only applicable if Ranking has been enabled.)
		's' + 'b' to move an issue to the bottom of the current column on a board. (Only applicable if Ranking has been enabled.)

	activating workflow scheme
		https://confluence.atlassian.com/display/JIRA/Activating+workflow

		workflows need to be actived to use them in JIRA
			1. map workflow to a workflow scheme
				workflow scheme: defines mapping between a workflow and an issue type
			2. associate workflow scheme wiht a project
				makes it possible to use a different workflow for every combination of project & issue type
			Active workflows: workflows that are currently being used
				Inactive: are not currently in use
			Active workflow schemes: those that are associated with projects

		steps:
			1.create a workflow scheme
			2. configure workflow scheme to use your workflow
			3. associate your workflow scheme with a project
				click gear icon (topright)> projects
				click project name to go to project summary
				click workflows
				click switch scheme
				select the scheme & click associate

	Reporting
		Tracking Progress: SCRUM
			Burndown Chart: A Burndown Chart shows the actual and estimated amount of work to be done in a sprint , and helps you to project the likelihood of achieving the sprint goal.
				Board > Reports icon > Burndown Chart from drop down
				https://confluence.atlassian.com/display/AGILE/Viewing+the+Burndown+Chart 
			Sprint Report: shows the list of issues in each sprint. It is useful for your Sprint Retrospective meeting, and also for mid-sprint progress checks.
				 Board > Reports Icon > Sprint Report
				 https://confluence.atlassian.com/display/AGILE/Viewing+the+Sprint+Report
			Velocity Chart: shows the amount of value delivered in each sprint, enabling you to predict the amount of work the team can commit to in future sprints. 
				Board > Reports > Velocity Chart
				https://confluence.atlassian.com/display/AGILE/Viewing+the+Velocity+Chart

		Tracking Progress: KanBan
			Cumulative Flow Diagram: shows your work-in-progress and helps you to identify bottlenecks in your processes.
				Board > Reports > Cumulative
				https://confluence.atlassian.com/display/AGILE/Viewing+the+Cumulative+Flow+Diagram
			Control Chart: shows you the cycle time (or lead time) for your product, version or sprint.
				Board > Reports > Control Chart
		Dashboard Gadgets
			https://confluence.atlassian.com/display/JIRA/Customizing+the+Dashboard#CustomizingtheDashboard-AvailableGadgets
		
		Wallboard: displays vital data about project progress to anyone walking by.
			setup: dashboards > manage > create new (never copy existing when creating a wallboard) > add gadget > jira agile wallboard
			Viewing: wallboard dasbhoard > tools dropdown > view as wallboard	
			https://confluence.atlassian.com/display/AGILE/Viewing+the+Cumulative+Flow+Diagram
	
	Hide Project from Users
		https://confluence.atlassian.com/display/JIRACLOUD/Managing+Project+Permissions

estimation & tracking
	estimation: used for measuring the size of a backlog and calculating velocity

	tracking: the burndown of hours used during the sprint to be sure we're not way off the pace necessary to complete the stories in the sprint timebox

	estimate field: its units are determined by the current boards 'Estimation Statistic', either points/time
			is editable and appears in 'backlogs'

	remaining field: its units are determined by the current boards 'Tracking Statistic', points/time
			is editable and appears in 'active sprints'

	Velocity: based on the 'Estimation Statistic', 
			for each sprint, the sum of the estimation statistic for completed stories

	Burndown Chart: based on the 'Tracking Statistic'

REPORTS
	Burndown Chart: how are issues progressive over time in a particular sprint

	Sprint Report: understanding work completed and excessive scope

	control chart: determining future performance

	velocity chart: tracks work completed compared to committed

	Version Report
		shows the team's progress towards completion of a version
			Predicted Release Data (shows you the predicted completion timeframes for a version, based on your team's current daily velocity)
			Estimate amount of work repaiming

	Gadgets for dashboards:
		whenever you open up JIRA you are taken to your dashboard

		agile sprint health: current status of sprint
		agile sprint burndown: the velocity of the sprint
		agile days remaining in sprint: how many days left in sprint

JIRA DEFs
	board: view and work issues in JIRA Agile. displays issues from one/more projects: a collection of issues
		unlimited # of boards can be created

		scrumboards: for teams that plan their owrk in sprints

		kanban boards: teams that focus on managing and constraining their work-in-progress
			do not have a backlog screen

	sprint: an iteration, a short period in which the dev team implements and delivers a discrete product increment, e.g. a working milestone version

	task: overall objective
	sub-task: breaking down the task
	linked task: a related objective
		blocks?
		blocked by?

	versions, releases, sprints
		version
			 A version is a set of features and fixes released together as a single update to your product.
			 In JIRA Agile, a version represents the JIRA fixVersion field, which is searchable via JQL

	Releases > versions > sprints
		Release 1
			version 1.1
				sprint 1
				sprint 2
				sprint 3
			version 1.2
				sprint 4
				sprint 5
				sprint 6
		Release 2

Agile
	an approach for managing a project's competing priorities of time, costs, and scopes

	User story
		a way of looking at what the task is
			as an X I want Y so that Z
		Points: the compexity of completing an issue, or effort required to complet the task
			each dev says they have X points of effort to devote to the sprint
			each task is assigned a number of points
			task are assigned to devs while not exceeding the devs total points for the sprint

	Sprint: the timeframe to complete the prioritized backlog, 

	Kanban: a visual list of things that need to be done, does not use a timeframe like sprints

	Board: a visual for the team, to see what is being done or planned to be completed

	backlog: the task list including stories, bugs, subtasks which are yet to be allocated for completion

	burndown: the point value remaining in a sprint, points are subtracked from total when work is completed

notes
	PostMark is a legacy app that was used in the system to send emails. At some point in the past (about an yr ago), we started using Mandril but didnt migrate the old templates to Mandril. We have an infrastructure project to migrate but never gets prioritized because of limited resources.

		Its deep inside the code. If u have bandwidth, consolidating the tools would help,

noah
		UI
			3 sections
				left: organize panel
					-filter for what you see in the workspace
					-defines structure for entire app
					-breakdown projects into components/subprojects, and are organized using a tree-like structure
						-iOS > UI, Backend, Artists, Record label >> each broken down into further components
						-Items in each project are planend with releases according to when you want to get them done
							-Releases are also broken down
								-Releases > Versions > Sprints
					-sprints
						-in the releases subpanel, click add
							Project > Release > Sprints

				middle: workspace
					-manage items you're team is working on
					-divided into tabs at the top, e.g. bugs, dashboard, etc.
					-what you select in the organize panel determines what you see in the workspace panel
					-click the down arrow next to the list & kanban view
						-allows you to move items into ranked & unranked lists
					-click the down arrow to the right of the down arrow to show items by their rank
						-this is useful for team members to see which items should be worked on next

				right: detail view
					-record view of the selected item
		Shortcuts
			-W: update worklog
				-worklog is how you update the burnchart, for each item finished you have to update the worklog

system locations
	projects page (with delete + edit): 
		https://magnifi.atlassian.net/secure/project/ViewProjects.jspa

web locations	
	import data from pivotaltracker
		https://confluence.atlassian.com/display/JIRA/Importing+Data+from+Pivotal+Tracker

			1. you can import a random project to get the 'PT workflow & PT Subtask Workflow'
				this will allow you to import a PT project into an existing JIRA project

	Setup custom events:
		https://confluence.atlassian.com/display/JIRA/Adding+a+custom+event

	Setup Project Roles
		https://confluence.atlassian.com/display/JIRA/Managing+Project+Roles

	Managing Project Role Permissions:
		https://confluence.atlassian.com/display/JIRA/Managing+Project+Role+Membership


removed users
	confirm with prem do we need one for each user
	or a catchall
	or a way to route tickets into jira 

MIGRATION
	One approach is:
		1. Mail tomm morning to the company that we would be switching to Jira from Monday morning. 
			Ask them to stop using PT after 4 pm tomm.
				DONE!
		2. Mail them their logins by tomm EOD.
		3. Start porting at 4pm tomm.
		4. Mail the company once the porting is done.
		5. Schedule a training for 11am on Monday.

	1. mail
		Hello Everyone!
		We will be transitioning from Pivotal Tracker to JIRA Agile this weekend.

		JIRA Agile is a robust system for planning, tracking, releasing and reporting for project 
		management and software development.

		What this means for you:
		1. At 4:00pm Pivotal Tracker will no longer be accessible.
		2. On August 3rd, we will have a group training session at 11am.
		3. For the next few weeks, any issues or inconveniences experienced with onboarding
		will be priority #1 for additional training, 1 on 1 sessions, and modifications

		What will happen to our data?
		All of our data: stories, comments, attachments, etc., will be accessible in JIRA Agile

		How will I find my stories?
		We will distribute logins to everyone by end of day, and our group training on monday will
		go over common JIRA tasks and workflows.

		When can I start using JIRA?
		We are distributing logins this afternoon, but recommend not to start inserting new tickets until 
		after the training session on August 3rd, 11am.

JIRA TRAINING
	JIRA University:
		https://university.atlassian.com/2.0/
		self-paced training for JIRA, JIRA Agile, and Confluence
	JIRA Documentation
		https://confluence.atlassian.com/display/JIRA/JIRA+Documentation
		documentation for all things JIRA
	JIRA User's Guide
		https://confluence.atlassian.com/display/JIRA/JIRA+User%27s+Guide
	JIRA 101
		https://confluence.atlassian.com/display/JIRA/JIRA+101
	JIRA Administrator's Guide
		https://confluence.atlassian.com/display/JIRA/JIRA+Administrator%27s+Guide
	JIRA Advanced Searching doc
		https://confluence.atlassian.com/display/JIRA043/Advanced+Searching
	VIDEOs
		https://vimeo.com/63370107
		2 hour long video about JIRA

	PPTs

		http://www.slideshare.net/nishanthnow/introduucing-jira-agile
		intro to jira

		http://www.powershow.com/search/presentations/drupal
		SUPER DOPE! search for power points

JIRA TRAINING
	What is JIRA Agile?
		Project/issue/task tracker
		Scrum and/or Kanban agile project/requirements management 
		Help-desk / Support / Customer Service
		Workflow / Process Management

	How does JIRA help teams?
		-Issue type specific workflows (Field Report, QA reported bug, Development Epic/Story or Task, etc.) to define scope
		-Auto assignment based on issue type to expedite closure
		-Individual project team custom workflows to reinforce policies 
		-Custom fields (~200) and custom screens that require the entry of detailed information to facilitate development efforts
		-Agile development enforced by Jira Agile plugin to clearly establish formal lightweight process
		-Action authorization for issues managed by custom permission schemes per project (role based for transition between workflow steps)
		-Custom email notification schemes per project manages to whom email is sent and for which event type (issue created, issue closed, etc.) to eliminate noise
		-Early detection of bugs/issues prior to field deployment by employing interactive development and test using Jira
		Better estimating of resource time, cost and scope by using the Jira Agile plugin to manage competing project priorities
		-Better estimating of resource time, cost and scope by using the Jira Agile plugin to manage competing project priorities

	What are the benefits of switching to JIRA?
		Flesh out new features before development starts, saving resource time by using the collaborative design and requirements gathering in Confluence.

	What is the JIRA Framework?
		Level 1
			Project Categories (iOS, Production)

		Level 2
			Projects
				Components (project sections: Dates, Users, RSVPs, Email, Livechat)
				Versions (project milestones, v1, v1.1, v2.54.3)

		Level 3
			Issues
				Issue Types

		Level 4
			Sub Tasks

		What are projects?
			A collection of issues
			every issue belongs to a project

		What are components?
			Sub-sections of a project, which are used to group issues within a project into smaller parts

		What are versions?
			Points-in-time for a project, which help to schedule and organize releases/sprints
				e.g., numbers of application builds, number of sprints, or any other 'points-in-time'
			version statuses:
				Released: a bundled package
				Unreleased: an open package
				Archived: a semi-transparent package
				Overdue: the release date is highlighted

		What are issues?
			A software bug, a project task, a helpdesk ticket, a product improvement, etc.

	MUST DO!
		screenshot UI with bubble notes and arrows

	WALK THROUGHS
		JIRA Navigation
			Where do the top links take you?

		Projects
			How to browse a project
				issues by component/version/priority/assignee
		
			What is a Project Board?
				A saved search result presented as an Agile Board
				Plan Mode Actions: only on scrum boards
					Prioritize backlog
					estimate stories
					create sprints
					create subtasks
				Work Mode Actions: scrum/kanban
					configure columns (add/delete/rename/reorder)
					configure workflow status
					add column constraints 

				Report mode actions:

			Versions
				creating
				reordering: 
					system > project > click project >versions
						you can drag & drop to reschedule (reorder) the versions
						click the 3 dots and select:
							Release: for every issue in the verion, the fixVersion will now have the name of the Version
							Build and Release
							Archive: hide an old version from teh Road Map and Change Log reports and User INterface
							Delete
						Merge (button)
				viewing
				Statuses
					Released: a bundled package
					unreleased: an open package
					archived: semi-transparent
					overdue: the release date is highlighted

			Project UI
		Issues
			Issue UI
			Issue Types
			Issue Workflow
				The movement/transition of an issue through various statuses during its life cycle
			How to find issues
				create/save filters, search
			How to create an issue
				select project > select issue type > add details
			How to view/edit an issue
				Issue Layout, Status, record/list view, comments
			Typical actions on issues
				create
				edit
				assign
				comment
				attach files
				move
				link
				clone
				convert
			What is an epic?
				a large user story that can be broken down into a number of smaller stories. It may take several sprints to complete an epic. 
				An epic can span more than one project, if multiple projects are included in the board to which the epic belongs.
					an epic is just a story!

				project > board > epics tab
					you can drag and drop to reorder
					click epic down arrow> create issue in epic
					click epic name > view epic screen, you can delete here

		Filters/Search
			Simple Search
				Simple queries, components/version, issue attributes, dates/times, custom fields
				Search > Search for issues > opens the issue navigator
			
			Advanced Search
				Allows you to use structured queries
					JQL: JIRA Query Language
						Project = "TEST"
						Status = open and priority = high and assignee = noah
						Project in (iOS, CONF) and fixVersion = "4.20"
						remainingEstimate > 4h order by priority
				Issue Navigator > Advanced link > opens advanced search query area
			Quick Search
				search box in top right
					start typing and click an issue

			Filters
				A saved search is called a filter
					Display the search results:
						in issue navigator
						in report format
						in a dashboard gadget
						Share with other teammates
						add another user's shared filter as a favorite
				recommended filters
					Issue type per developer
					Issue type per status & priority

		Dashboards

JIRA ADMIN TRAINING
	Workflow Design
		visualize the transitions
		Identify the ones to keep
		Plan implementation

		Steps:
			Study the workflow in place, how can it be improved?
			Design a workflow by diagramming the proposed changes

	Users
		Groups
			Global Permissions
		Roles
			Project Permissions
			Issue Permissions
			Custom Field Permissions

	Fields
		Standard fields show a preview as they are created

	Searching
		You cannot compare the values of two different fields
		Nested Queries: you can reference the results of saved queriies(filters) within other JQL queries
		if you want to search a string, use the text operator rather than naming multiple search fields

SCRUM TRAINING
	How does a SCRUM workflow look?
		Product backlog > Sprint Backlog > Scrum Meetings (24 hours, 2/4 weeks) > Potentially shippable product increment
		-Scrum projects make progress in a series of “sprints”
		-Analogous to Extreme Programming iterations
		-Typical duration is 2–4 weeks or a calendar month at most
		-A constant duration leads to a better rhythm
		-Product is designed, coded, and tested during the sprint

	What are the benefits of SCRUM?
		-Scrum is an agile process that allows us to focus on delivering the highest business value in the shortest time. 
		-It allows us to rapidly and repeatedly inspect actual working software (every two weeks to one month).
		-The business sets the priorities. Teams self-organize to determine the best way to deliver the highest priority features. 
		-Every two weeks to a month anyone can see real working software and decide to release it as is or continue to enhance it for another sprint.

	What are the characteristics of SCRUM?
		-Self-organizing teams
		-Product progresses in a series of month-long “sprints”
		-Requirements are captured as items in a list of “product backlog”
		-No specific engineering practices prescribed
		-Uses generative rules to create an agile environment for delivering projects
		-One of the “agile processes”

	What are the SCRUM roles?
		Produt Owner
			-Define the features of the product
			-Decide on release date and content
			-Be responsible for the profitability of the product (ROI)
			-Prioritize features according to market value 
			-Adjust features and priority every iteration, as needed  
			-Accept or reject work results

		ScrumMaster
			-Represents management to the project
			-Responsible for enacting Scrum values and practices
			-Removes impediments 
			-Ensure that the team is fully functional and productive
			-Enable close cooperation across all roles and functions
			-Shield the team from external interferences
		The SCRUM Team
			-Cross Functional
			-Teams are self-organizing
			Ideally, no titles but rarely a possibility
			-Membership should change only between sprints

	What are SCRUM Ceremonies?
		Sprint Planning
			-Team selects items from the product backlog they can commit to completing
			-Sprint backlog is created
			-Tasks are identified and each is estimated (1-16 hours)
			-Collaboratively, not done alone by the ScrumMaster
			-High-level design is considered

		The Daily SCRUM
			-Parameters
				Daily
				15-minutes
				Stand-up
			-Not for problem solving
			-Whole world is invited
			-Only team members, ScrumMaster, product owner, can talk
			-Helps avoid other unnecessary meetings
			Everyone answers 3 questions:
				What did you do yesterday?
				What will you do today?
				Is anything in your way?
					These are not status for the ScrumMaster
					They are commitments in front of peers

		The Sprint Review
			-Team presents what it accomplished during the sprint
			-Typically takes the form of a demo of new features or underlying architecture
			-Informal
				2-hour prep time rule
				No slides
			-Whole team participates
			-Invite the world

		The Sprint Retrospective
			-Periodically take a look at what is and is not working
			-Typically 15–30 minutes
			-Done after every sprint
			-Whole team participates
			-ScrumMaster
			-Product owner
			-Team
			-Possibly customers and others
			The whole team discusses what they want to:
				Start Doing
				Stop Doing
				Continue Doing

	What are some SCRUM artifacts?
		Product Backlog (for us this is the icebox)
			The requirements
			A list of all desired work on the project
			Ideally expressed such that each item has value to the users or customers of the product 
			Prioritized by the product owner
			Reprioritized at the start of each sprint

		Sprint Goal
			A short statement of what the work will be focused on during the sprint

		Sprint Backlog
			Individuals sign up for work of their own choosing
				Work is never assigned
			Estimated work remaining is updated daily

CONFLUENCE TRAINING
	What is Confluence?
		IT helpdesk information
	Development requirements definition
	Development design/specification collaboration
	Beta tracking
	Deployment tracking
	Operations maintenance/logging
	Blogging
	Reporting 



new notes
	JIRA
	grooming backlog
		70% of manager is in backlog
		relies heavily on filtering
			quickfilters are most powerful
			instant filter: using issue type, issue key, or summary
			epics & version panels are another type of filter

		assign issues to epics via click n drag
		triage issues with labels, their super simple
			assign issues to teams via labels!

	prioritizing backlog
		ranking issues, click n drag
			ranking is global, across ALL of jira
				e.g dashboard, confluence
				add "ORDER BY RANK" to any JQL search
		assigning issues to versions is another form of ranking
			1.0 comes before (Ranked higher) than 1.1

	sprint planning
		Keep the sprint FIXED! no new issues
		keep high priority issues in the next sprint

		sprint planning sessions, retrospectives, and demos
		>important syncronization process

		don't estimate in sprint planning, use a separate meeting

		define sprint goal
		shared understanding of team members
		make sure there is 100% buy in

		check historical velocity, to help
		set the commitment (total points in sprint) for the next upcoming sprint


	tracking sprint progress
		Team velocity!
			completed work over time
			
			Burn Down chart: all changes to the sprint scope

			Sprint Report: copmleted V not completed

			dashboards
				burndown gadtet
				sprint health gadget
				atlasboard.bitbucket.org
					dope! custom boards

		Use flags!
			right click issue > add flag
			signal that something is wrong with this issue

	tracking release progress
		what is your release cadence?
		every two weeks?

		charts
			release burndown
				sprint by sprint breakdown of a release
				team velocity
				how its changed
				and changes to the releases scope

				how many days you have left until you will release
					

general best practices

	use the freaking shortcuts!