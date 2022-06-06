# Redux

## What is Redux.

Redux is a predictable state container for JavaScript apps. It is an open-source JavaScript library for managing and centralizing application state.
## Redux Architecture



- STORE: A Store is a place where the entire state of your application lists. It manages the status of the application and has a dispatch(action) function. It is like a brain responsible for all moving parts in Redux.

- ACTION: Action is sent or dispatched from the view which are payloads that can be read by Reducers. It is a pure object created to store the information of the user's event. It includes information such as type of action, time of occurrence, location of occurrence, its coordinates, and which state it aims to change.

## Reducers

 Reducer read the payloads from the actions and then updates the store via the state accordingly. It is a pure function to return a new state from the initial state.

## Putting Redux to Practice 
example in youtube project

## Containers - Connecting Redux to React
## Implementation of a Container Class

## Containers and Reducers Review
Container is an informal term for a React component that is connect-ed to a redux store. Containers receive Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.

You can use multiple containers and for different users
Reducers also be seperated for all containers.


## Actions and Action Creators

all changes to the application state happen via an "action".

example of Action creator :

`store.dispatch({ type: 'ITEM_ADDED_TO_CART', payload: 47 })`

Here we are dispatching store with action type "ITEMA_ADDED_TO_CART" with payload.

here reducer now knows that action is adding item to cart. and payload contains the data that is being used in the action.



## Binding Action Creators

`bindActionCreators(actionCreators, dispatch)`

Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.

in react redux you could just dispatch the action creator directly using store.dispactch

## Creating an Action

- Consuming Actions in Reducers
- Consuming Actions in Reducers Continued
- Conditional Rendering
- Reducers and Actions Review