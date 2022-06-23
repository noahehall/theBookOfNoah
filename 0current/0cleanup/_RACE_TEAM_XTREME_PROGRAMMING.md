# RACEXP

- this was found in a nirv.ai repo
- figure out where this should go
  - im sure theres a public brief somewhere in this repo

# blah

uses the `race [car|team] metaphor` as the ontology of rapid prototyping/product development

- ontology

  - a set of concepts and categories in a subject area or domain that shows their properties and the relations between them.
  - the philosophical study of being in general, or of what applies neutrally to everything that is real. It was called “first philosophy” by Aristotle in Book IV of his Metaphysics.

- ~one day I'll publish this~
- for now: the below should suffice

[THE FIELD](https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms)

- The competing cars in an event.
  - `the pits` + `the grid`

[THE PITS](https://en.wikipedia.org/wiki/Pit_stop)

- In motorsports, a pit stop is a pause for refueling, new tires, repairs, mechanical adjustments, a driver change, as a penalty, or any combination of the above. These stops occur in an area called the pits, most commonly accessed via a pit lane which runs parallel to the start/finish straightaway of the track
  - tickets not ready for the race

[THE GRID](https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms)

- The starting formation of a race, generally in rows of two for cars and three or four for bikes. The Indianapolis 500 traditionally has a unique grid of three cars per row.
  - tickets in the race
  - I like to use 4 in progress tracks (see `THE GROOVE` below)

[THE GROOVE](https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms)

- The optimal path around the track for the lowest lap time. In drag racing it is about the center portion of the lane, where the cars can gain traction quicker.
  - `SLOW lane` too many of these and your drivers wont be happy, forecasts wont be accurate, and the _fast_ lane will be over utilized to compensate for poor finishes
  - `THE GROOVE` the optimal ticket: your team is successful, drivers are winners, races are predictable
  - `FAST lane` too many of these means all your trophies are gold plated, but hey - you can fill your team with cheap engineers and junior devs
  - `THE LAST LAP` if our users arent using it then its not providing utility, and usually not useful to consider the ticket done, so use the the last lap for this usecase
    - there are a lot of stats and insights to glean from plotting tickets on these 4 dimensions over time...

[RACING FLAGS](https://en.wikipedia.org/wiki/Racing_flags)

- the dimensions on which a ticket is evaluated to ascertain quality:
  - basically anything you want, but all should be:
    - technical principals/best practices, e.g. DRY, SOLID, KISS, efficiency, effectiveness, etc.
    - not solvable by automation: keep your engineers biases to a minimum and the team focused on finishing the race successfully, not perfectly
- [MEATBALL](https://en.wikipedia.org/wiki/Racing_flags#Black_flag)
  - A mechanical black flag is a black flag with an orange disc in its center which indicates that a vehicle is being summoned to the pits due to serious mechanical problems or loose bodywork that presents a risk to other competitors. At some road racing events, it is used to summon the vehicle to the pits to inform the driver of violation "maximum sound levels.” Also known as the 'Meatball' flag.
  - only `meatballs` are rejected/reworked, everything else is pushed through (fk your opinions: the team has a race to win; if its not a _meatball_, it must be **steak**)
- [YELLOW FLAG](https://en.wikipedia.org/wiki/Racing_flags#Yellow_flag)
  - The solid yellow flag, or caution flag, universally requires drivers to slow down due to a hazard on the track, typically an accident, a stopped car, debris or light rain. However, the **procedures for displaying the yellow flag vary for different racing styles and sanctioning bodies**.
  - _too many_ yellow flags and a ticket could be labeled a meatball
  - _too few_ yellow flags is indicative of over optimizing (dont over optimize, be overly optimistic)
- [CHEQUERED FLAG](https://en.wikipedia.org/wiki/Racing_flags#The_chequered_flag)
  - The chequered flag (or checkered flag) is displayed at the start/finish line to indicate that the race is officially finished. At some circuits, the first flag point will display a repeat chequered flag (usually on the opposite side of the circuit). The flag is commonly associated with the winner of a race, as they are the first driver to "take" (in other words, drive past) the chequered flag.
  - Upon seeing the chequered flag and crossing the finish line, drivers are required to slow to a safe speed, and return to their garage, parc fermé, or paddock, depending on the applicable regulations of the series.
- [ADR-TYPE](https://adr.github.io/)
  - for tracking architectural decision records of a particular type
    - types could be testing, ci, cd, recommended jamaican rums, etc
    - anything with an ADR tag should also have a `good first issue` as github automation surfaces `good first issue` to newcomers
