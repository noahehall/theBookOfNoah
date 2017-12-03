basics
  -perform tests that compare two different versions to determine which leads toa  better user experience and more conversions
  -optimizely snippet that loads on the page and changes the elements
  -collects data on visitors and conversions and runs them through stats engine and tells you which variations were winners or losers, compared to your baseline,

  types of tests
    AB testing
      https://www.optimizely.com/ab-testing/
    Bucket testing
      https://www.optimizely.com/optimization-glossary/bucket-testing/
    Split testing
      https://www.optimizely.com/split-testing/
    multivariate testing
      https://www.optimizely.com/resources/multivariate-testing/


  order of opertions
    1. snippet loads
    2. targeting conditions: must pass all 'for' this user to be included in experiment
      -url targeting
      -audiences
    3. traffic allocation: must pass all 'for' this user to be bucketed in variation and to get cookied
      -probability of inclusion in experiment
      -probability of seeing a variation
    4.included in experiment
    5.experiment javascript & css: is executed 'for' every variation of the experiment, includin ghte original
    6.variation code executes: runs safely as the DOM is loading
      -when you create a variation of your page in the topmizely editor, each action yo utake in the editor is encoded as a line of javascript
      -after youve begun your xperiment, this javascript is executed when your visitors load that page in order to display the variation


  cookies set by optimizely
    first party cookies: whose domain is set to your webiste
      -optimizelyEndUserId
        -What: Contains the end users unique identifier. It is a combination of a timestamp and random number. No information about you or your customer is stored in it.
        -Example: oeu1383080393924r0.5047421827912331
        Expiration: 10 years
      -optimizelyBuckets
        -What: Stores JSON of the experiments and variations that a user has been bucketed into. This ensures the user consistently sees the same variation, even over multiple sessions.
        -Example: {"138736319":"138725428","138750142":"138754098"}
        -Expiration: 10 years
        -In a multivariate test, the variations a visitor sees are concatenated with an underscore, like this: {"experimentID":"section1variationID_section2variationID_section3variationID"}
        -Example: {"138736319":"138725428_138825412_135555542","138750142":"138754098"}
      -optimizelySegments
        -What: Stores JSON of the users audience and dimension information (e.g., browser, campaign, mobile, source type, custom dimensions).
        -Example: {"139230617":"direct","139230618":"false","140036362":"gc","159151144":"none"}
        -Expiration: 10 years
      -optimizelyRedirect
        -What: In case of a redirect experiment, stores the variation-ID of the redirect experiment. Optimizely uses it to run any applicable integration code after the redirect is done. This helps us get around the problem of an experiment not being "active" on a redirect page. This is not to be confused with the optimizelyReferrer cookie that is responsible 'for' storing the users original referring URL.
        -Expiration: 5 seconds
      -optimizelyPendingLogEvents
        -What: Used as a cache of a users actions between tracking calls. When the tracking call is made the cookie will be wiped. This is to ensure that all events are tracked even if the user is committing actions in rapid succession.
        -Expiration: 15 seconds
    third party cookies:
      -set to .optimizely.com: track
    Editor cookies:
      -only set when using Optimizelys edtior, therfore an end user will never see these cookies
        -optimizelyReferrer
  glossary
    statistical significance






 code editor and variation code: https://help.optimizely.com/Build_Experiments/The_Code_Editor_and_Variation_Code#simple_tweaks
 how optimizely works: https://help.optimizely.com/Build_Experiments/How_Optimizely_Works%3A_Snippet_order_of_execution,_JavaScript_evaluation_timing,_and_cookies


dictinoary.com implementation
  dictinoary and thesaurus optimizely cookies are different, so users
  all subdomains share the same optimizely code
  see about setting up a third project for running tests on local and staging

  optimizelye vents are logged because daisy allows us to see the user flow through the application based on the BID id and the sitename

  A-A test: both the control and the variation are exactly the same
