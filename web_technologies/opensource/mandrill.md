mandrill {
		Helpers
			inline: operate on paths
				{{helperName arg1 arg2 argX}}
				upper	uppercase the text provided
					{{upper "your text"}}
					results in: YOUR TEXT
				lower	lowercase the text provided
					{{lower "your text"}}
					results in: your text
				title	title-case the text provided
					{{title "your text is neat"}}
					results in: Your Text is Neat
				url	urlencode the text provided
					{{url "http://yourawesomeurl.com"}}
					results in: http%3A%2F%2Fyourawesomeurl.com
				date	print the current date with a given format, defaults to d/m/Y
					{{date "Y-m-d"}}
					results in: 2015-03-10
				striptags	strip any HTML tags from the given data
					{{striptags "<p>your text</p>"}}
					results in: your text
				unsub : automatic unsubscribe link
					<a href='{{unsub "http://redirecturl.com"}}'>Unsubscribe</a>
					<a href='{{unsub redirect_merge_var}}'>Unsubscribe</a>
					When using the {{unsub}} helper inside of an anchor tag, be sure to use single quotes around for the href='{{unsub }}'.
					"global_merge_vars": [
								{
										"name": "redirect_merge_var",
										"content": "http://yourdomain.com"
								}
						]
					Escapaing HTML content: use triple stash {{{merge_var}}}
						{{{html_tag_content}}}

						"global_merge_vars": [
						{
							"name": "html_tag_content",
							"content": "This example<br>is all about<br>the magical world of handlebars"
						}
					]


			block: have template data, nested paths, and else branches
				If: Any expression whose value is not false, undefined, null, "", 0, or [] will evaluate as true.
					{{#if user_name}}
							<p>Thanks for registering! Your username is {{user_name}}.</p>
						{{/if}}

					Unless: The content inside the block will be displayed when the expression is evaluated to false, or unless its true. Its equivalent to if not.
						{{#unless user_name}}
							<p>You havent chosen a username. Please enter a username to register.</p>
						{{/unless}}

				Automatic Each: Whenever an expression evaluates to an array, Handlebars will iterate over each item in the array automatically.
					<!-- BEGIN PRODUCT LOOP // -->
						 {{#each products}}
						 <tr class="item">
									<td valign="top" class="textContent">
											<img src="{{img}}" width="50" height="75" class="itemImage" />
											<h4 class="itemName">{{name}}</h4>
											<span class="contentSecondary">Qty: {{qty}} x ${{price}}/each</span><br />
											<span class="contentSecondary sku"><em>{{sku}}</em></span><br />
											<span class="contentSecondary itemDescription">{{description}}</span>
									</td>
									<td valign="top" class="textContent alignRight priceWidth">
											${{ordPrice}}
									</td>
							</tr>
							{{/each}}
					<!-- // END PRODUCT LOOP -->

				Explicit Each: iterates over each item in an array. The keyword this can be used to reference the current element being iterated.
					<div class="entry">
						<ul>
							<li style="list-style: none">{{#each browsers}}</li>
							<li>{{this}}</li>
							<li style="list-style: none">{{/each}}</li>
						</ul>
					</div>

					"global_merge_vars": [
						{
							"name": "browsers",
							"content": [
								"Chrome",
								"Firefox",
								"Explorer",
								"Safari",
								"Opera"
							]
						}
					]

					or like this
					{
							"name": "products",
							"content": [
									{
											"img": "http://kbcdn.mandrill.com/nesting-penguin.png",
											"qty": 2,
											"sku": "PENG001",
											"name": "Penguin",
											"description": "Solid wood, hand-painted penguin nesting doll with 5 different sizes included. Limited Edition.",
											"price": "12.99",
											"ordPrice": "25.98"
									},
									{
											"img": "http://kbcdn.mandrill.com/nesting-bear.png",
											"qty": 3,
											"sku": "BBEAR001",
											"name": "Brown bear",
											"description": "Solid wood, hand-painted brown bear nesting doll. Coordinates with our entire Bear collection. Includes 6 nested sizes.",
											"price": "12.99",
											"ordPrice": "38.97"
									}
							]
					}

					regarding nested {{#each }, all I had to do was reference the inner array with {{#each this.list-within-a-foo}} and it works great.


				Dot notation: a shorter way to do With (see below)
					<div class="entry">
						<h2>{{incident}}</h2>
						<p>Impact: {{impact}}</p>
						<p>Created At: {{created_at}}</p>
						<p>Updates: {{updates.body}}</p>
						<p>Updated At: {{updated_at}}</p>
					</div>

				With: shift the context for a section of a template which can be extremely helpful when accessing nested values. It is equivalent to using dot notation.

					<div class="entry">
						<h2>{{incident}}</h2>
						<p>Impact: {{impact}}</p>
						<p>Created At: {{created_at}}</p>
						<p>Updates: {{#with updates}} {{body}} {{/with}}</p>
						<p>Updated At: {{updated_at}}</p>
					</div>

					"global_merge_vars": [
							{
								"name": "incident",
								"content": "Error in connection"
							},
							{
								"name": "impact",
								"content": "none"
							},
							{
								"name": "updates",
								"content": {
									"id": "9e86a19c-9f9b-447d-b4a8-81f9e71efd85",
									"incident_id": "5a99c8c5-e63f-43f0-b375-df0152211bd8",
									"body": "Testing global variables",
									"status": "update",
									"created_at": "2015-02-27T16:01:55+0000",
									"updated_at": "2015-02-27T16:01:55+0000"
								}
							},
							{
								"name": "created_at",
								"content": "2015-02-27T15:27:23+0000"
							},
							{
								"name": "updated_at",
								"content": "2015-02-27T16:02:18+0000"
							}
						]

				Comparison (numbers) + If:  its possible to compare values using back ticks to surround the comparisons. These can be very helpful when using the if block helper.
					<div>
							{{#if `purchases > 3`}}
								<ul>
										{{#items}}
										<li>{{this}}</li>
										{{/items}}
								</ul>
							{{/if}}
					</div>

					"global_merge_vars": [
							{
								"name": "items",
								 "content": [
									 "Computer",
									 "Monitor",
									 "Keyboard",
									 "1-Year Insurance",
									 "Mouse Pad",
									 "Mouse"
								 ]
							},
							{
								"total_purchases": 6
							}
						]


				Comparison (strings) + if: make sure to enclose the string in double quotes as single quotes wont work:

					{{#if `operating_system == "OS X"`}}
							<p>Click here for instructions to install on a Mac</p>
					{{elseif `operating_system == "Windows"`}}
							<p>Click here for instructions to install on a PC</p>
					{{/if}}

					"global_merge_vars": [
						{
							"name": "operating_system",
							"content": "Windows"
						}
					]
	}

	templates
			{{> templateName}}

			<template name="templateName">
					your html here
			</template>
					//this will replace {{}} wit your template
