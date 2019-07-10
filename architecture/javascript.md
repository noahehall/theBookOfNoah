# links
  - [frontend architecture by micagodbolt](https://github.com/micahgodbolt/front-end-architecture)
  - [FEA expections by wolfgang gehner](https://medium.com/statuscode/what-i-expect-from-a-front-end-architecture-31b9be4498af)
  - [what is FEA by elyse](http://www.elyseholladay.com/posts/2014/10/16/front-end-architect/)


# TOOLS
  - [frontend checklist](https://frontendchecklist.io/)
  - [style guides](http://styleguides.io/tools)


# basics
  - my own spin on designing, developing, and deploying a javascript based application, many things stolen and remixed from the internet
  - A Front-end developer's audience is the website user, a Front-end Architect's audience is the developer themselves. [micahgodbolt]

## paradigms and principles
  - maintanability
  - readability
  - 12 factor
  - staying up to date: conferences / blogs
  - refactoring, organizing, structuring, build and repeat

## considerations
  - git
  - build system
  - editors
  - web frameworks
  - libraries
  - css
    - Methodologies
      - [BEM](http://getbem.com/introduction/)
      - [OOCSS](http://oocss.org/)
      - [SUITCSS](http://suitcss.github.io/)
      - [JSS](http://cssinjs.org/?v=v9.8.7)
  - build tools
  - SSR
  - animation
  - forms
  - backend/service integration
  - state management
  - Accessibility (WAI-ARIA)
  - logging / error reporting
  - analytics
  - JS compilers
  - browsers
  - mobile
  - SEO
  - Accelerated Mobile Pages (AMP)
  - caches

## BLUEPRINT
### PLANNING
  0. what are our objectives
  1. what is our domain
  2. methodologies
    1. 12 factor ?
    2. agile ?
  3. who are our users
    1. this sublist goes on forever
    2. devices
    3. locations
    4. profiles
    5. status quo
  4. functional requirements
  5. existing code you can leverage
  6. style guides
  7. authentication
  8. data requirements
    1. providers
    2. consumers
    3. throughput
    4. ETL
  9. Security
  10. legal issues
  11. caching strategy
  12. PWA strategy
    1. code splitting
    2. isomorphism
  13. AMP strategy
  14. SEO strategy
  15. analytics
    1. user
    2. app
      1. performance
  16. pipeline
    1. private repo
    2. CI strategy
    3. CD strategy
  17. competitor applications
  18. Planned Obsolescence
    1. app life expectancy before next refactor ?
      1. should we wrap everything/major/specific third party libraries for future insulation

### DEVELOPMENT
  1. directory Structure
  2. documentation
    1. JSDOC
  3. routing
    2. React Router
  4. testing
    1. unit
    1. integration
  5. state management