notes
triggers v automation
Automations are similar to triggers because both define conditions and actions that modify ticket properties and optionally send email notifications to customers and the support staff. Where they differ is that automations execute when a time event occurs after a ticket property was set or updated, rather than immediately after a ticket is created or updated.
tuts
zendesk
https://support.zendesk.com/hc/en-us/articles/203921213
zendesk for sugarcrm
https://support.zendesk.com/hc/en-us/articles/203660146-Setting-up-and-using-Zendesk-for-SugarCRM
UI
Admin: the gear in the lower left
admin
account
sandbox: gear icon > sandbox
copies basic settings, templates, admins, etc
not copied: tickets, agents, triggers,  custom fields, help center are all set to default
Business hours: reflect service availability in views, triggers, automation, and reports. can be used in worfklows
gear icon > schedule
Holidays: exceptions to your regular business hours. can be used in workflows
gear icon > schedule
Adding an agent
Gear icon > people > add user
Create a group: groups agents together, used to route tickets to multiple agents at once
gear icon > people > groups
end-users
create an organization: collects end-users together
from a ticket > organization create
add tab > organization
gear icon > people > organization
if all users have the same email domain, you can add it to automatically group them
Customer lists: filter and organize end-users, used to identify user groups
customer lists (people icon) > customer lists > create a list
visibility: who can see the customer list
filters: anyone who meets the filter will be added to the customer list
User fields: capture extra information about users
gear icon > user fields >
Organization fields: fields that are attached to organizations
gear icon> organization fields >
tickets
Tags: add context and functionality to tickets, users, and organizations
separate each by a comma
gear icon > tickets > tag section
gear icon > tags
ticket fields: customized ticket fields to capture additional data
gear icon > ticket fields >
can use regular expressions
ticket forms: unique workflows for different situations
gear icon > ticket forms > add form
not available in PLUS
web widget
Web widget: end-users can discover support content and submit tickets
gear icon > widget >
copy code and place it in the help center
Designing web widget:
gear icon > widget >  appearance tab
is used for LIVE CHAT!
will attempt to deflect tickets by suggesting articles
if an article is not found, they can request live chat
if live chat is not available, they can submit a ticket
Feedback tab: end-users can discover support content and submit tickets
gear icon > feedback tab > preview and grab code >
deprecated and is now called WIDGET

help center
help center
customize design > edit theme
zopium chat
Zopim: provides live messaging between requesters and agents
gear icon > chat > explore zopim > install app
zopim icon>  to set it up (its on the left side bar
Zopim, add to help center
gear icon > chat > zopim chat in center > enable zopim chat > click update
Zopim widget, design
zopim icon > widget > getting started tab > embed the code anwhere
appearance tab > adjust the look and feel

agents
shared views: helps agents organize their tickets
gear icon > views > add view
shared macros: set ticket comments & content in one click
gear icon > macros > add macro
conditions: determines which tickets can be viewed/actions taken
if ticket state = X, zendesk do Y
views triggers & automation all function based on conditions
Trigger Cycle: ticket trigger > condition > ticket updated, cycle restarts
if a later trigger makes the ticket condition true for an earlier trigger, the earlier trigger will now fire
trigger: performs actions based on ticket conditions
gear icon >  trigger> add trigger
automation cycle: each automation cycle begins an hour after the previous one ends, and will process every ticket in your db
building an automation: performs actions in your account
gear icon > automations > add automation
voice
Voice Channel: live direct communication between agents & end users, create tickets, record conversations, etc.
admin icon > voice >
choose a phone number
Voice greetings: create and record greetings to match brand
gear icon > voice > greetings > add greeting
record message using phone, or upload an audio file
add phone greeting to a number
numbers > edit > choose the greeting from the list
facebook
Facebook channel: create tickets and respond to facebook posts and messages
gear icon > facebook > add facebook page
multiple pages can be added
choose to create tickets from
wall posts: ticket comments are public to the facebook thread
private messages: comments are returned the same way they came in
import recent activity: last week up to 250 posts
twitter
Twitter Channel: create tickets and respond to tweets and direct messages
@messages and private messages
replies can be sent through twitter or zendesk
gear icon > twitter > twitter accounts
can add multiple accounts
allow replies via this account?
if no, replies  are sent via email
if yes, replies are sent as twitter posts
capture public mentions as tickets?
comments will be tweeted back
capture incoming direct messages as tickets?
private messages are sent as messages
track favorites:
convert tweets marked as favorites to
Twitter searches: search for tweets and convert them into tickets
gear icon > twitter > manage searches > configure your first search

code
zopim live chat in embed, goes before the closing</head> tag
<!-- Start of deliradio Zendesk Widget script -->
<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//assets.zendesk.com/embeddable_framework/main.js","deliradio.zendesk.com");/*]]>*/</script>
<!-- End of deliradio Zendesk Widget script -->
