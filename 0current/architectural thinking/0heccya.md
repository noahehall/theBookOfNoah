## HECC-YA system modeling

- **H**ardware (cloud/metal)
- **E**nvironment (...)
- **C**omponent (application)
- **C**ommunication (messaging)
- **Y**ielding (provisioning)
- **A**rchitecture (...)

- I want to create (yield) a world (environment) for a set of living things (applications) to live holistically (hardware) and socially (communication)

- I personally think through the distinction of environment (infrastructure) and component (application) design/architecture patterns

  - environment: the context of an application or service
  - component: the application or service

- I also feel the extraction of the communication layer decision from the environment and component pattern selection is a useful 3rd dimension to think through separatly, however, not in isolation

  - this permits you to brainstorm the environment and component in a perfect world with the naive expectation that communication will occur at the speed of light

- hardware: the types of physical machines located in local/cloud/virutalization/hybrid context
- yeilding: provisioning any part of the model
- architecture: the set of all decisions that describes the physics of your product

- now who decides what constitutes the environment domain and what constitutes the component domain?
  - I would say the business & product context: the environment for a product like AWS is far different than the environment for a product like facebook
    - each provides a different product, each business has different requirements, and each should model the components it provides and requires in relation to that context
- TODO....

  - continue to think through this distinction
  - i've yet to see it put in terms this way

- tests are first class citizens
- from hardware to user: if it doesnt work locally, dont use it
