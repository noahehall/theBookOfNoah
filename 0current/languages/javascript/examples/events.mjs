/*
```add events
  target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only
      - target = domnode|document|window
      - type = event
      - listener = js function|callback, gets passed the event object as its only argument
      - type: string; event type
      event types:
      - listener: an object that receives a notition that implements the event interface or is some other capable javascript function
      - options: object that specifies characteristis about the event listener containing properties capture, once, passive, and mozSystemGroup
```
*/
