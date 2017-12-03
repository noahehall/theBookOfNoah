# back ends
  - implementation of the html 5 drag and drop api
  - handles the DOM events
  - they abstract away the browser differences and process the native DOM events.
  - html5 backend . You can write a different implementation, based on touch events, mouse events, or something else entirely.
## html5 backend
  - https://react-dnd.github.io/react-dnd/docs-html5-backend.html

# items and types
  -  React DnD uses data, and not the views, as the source of truth.
  - when you drag something, we say that an item of a certain type is being dragged.
  -  item is a plain JavaScript object describing what's being dragged.
    -  Describing the dragged data as a plain object helps you keep the components decoupled and unaware of each other.
  - type is a string (or a symbol) uniquely identifying a whole class of items in your application.
    +  The types let you specify which drag sources and drop targets are compatible.
    + Types are useful because, as your app grows, you might want to make more things draggable, but you don't necessarily want all the existing drop targets to suddenly start reacting to the new items.

# monitors
 -  The monitors let you update the props of your components in response to the drag and drop state changes.
 -  Either a drag operation is in progress, or it isn't. Either there is a current type and a current item, or there isn't. This state lives in 'monitors'
 - For each component that needs to track the drag and drop state, you can define a collecting function that retrieves the relevant bits of it from the monitors.
  + React DnD then takes care of timely calling your collecting function and merging its return value into your components' props.

# connectors
  - The connectors let you assign one of the predefined roles (a drag source, a drag preview, or a drop target) to the DOM nodes in your render function.
  - informs the backend which DOM nodes to listen to

# Drag Sources and Drop Targets
## drag source
  - https://react-dnd.github.io/react-dnd/docs-drag-source.html
  + used to configure your components/some part of it to be draggable
  + Every drag source is registered for a certain type
  + has to implement a method producing an item from the component's props.
  + optionally specify a few other methods for handling the drag and drop events.
  + The drag source declaration also lets you specify the collecting function for the given component.
  - The DragSource higher-order component accepts three parameters:
    + type: the constant, e.g. CARD
    + spec: drag source specification: e.g. `return { cardId: props.id }` in the `beginDrag(props)` function
    + collect: the collecting function describe the props your draggable component requires:
      - `connect.dragSource(),`: the function you pull from props and return in the components render function
      - `monitor.isDragging()`: attribute you pull from props and use e.g. to specify css styles

## drop targets:
  - https://react-dnd.github.io/react-dnd/docs-drop-target.html
  + a single drop target may register for several item types at once
  + and instead of producing an item, it may handle its hover or drop.
  - the DropTarget HOC:
    + spec: `drop(props, monitor){ /* your code here */ }`
      - also use `monitor.getItem()` to retrieve the dragged item that the drag source returned from beginDrag
    + collect:
      `collect(connect, monitor){
        return {
            connectDropTarget: connect.dropTarget(),
            connectDragPreview.dragPreview(), // customize drag preview, e.g. img.onload = () => this.props.connectDragPreview(img)
            canDrop: monitor.canDrop(),
            isOver: monitor.isOver()
          };
      }`


# Higher-Order Components and ES7 decorators
  - A higher-order component is just a function that takes a React component class, and returns another React component class.
  - The wrapping component provided by the library renders your component in its render method and forwards the props to it, but also adds some useful behavior.
  - In React DnD, DragSource and DropTarget, as well as a few other top-level exported functions, are in fact higher-order components.

# adding drag and drop interaction

# DragDropContext
  - https://react-dnd.github.io/react-dnd/docs-drag-drop-context.html
  - informs reactdnd which backend you're using



# notes
// https://react-dnd.github.io/react-dnd/docs-overview.html
// Drag sources and drop targets only interact
// if they have the same string type.
