# Building blocks of ReactJS

## Component API															
React component is top level API, Which makes the code reusable 

It can 
- create element 
- transform element
- fragments 

For functional Components there are methods used which can be used to do different functions.

e.g `useState()`

You can use useState() function to create state and update for functional components.

First import  `import { useState } from 'react'`

then inside your component you can create state variable 

`const [state,  setState] = useState({})`

You will pass the initial state of the component inside the function useState.

setState() function here is method which will update the value of state.

## 	Component Life Cycle																
There is component lifecycle events, that you can override to run code at perticular times in process.

1. Mounting 

- These Methods gets called on this stage 

    - constructor() : constructor of class
    - static getDerivedStateFromProps() : calls just before render, It returns the dervied state object , returns null if there is no other state.
    - render() : this one renders the Component 
    - compountDidMount() : this one is called just after component is mounted , You can do the API calls which gets data from other end points.

2. Updating 

- The following methods for updating 

    - getDerivedStateFromProps()
    - shouldComponentMount()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidMount()
3. Unmounting

- componentWillUnmount()

4. Error Handling

- static getDerivedStateFromError()
-   componentDidCatch()


## 	Forms		

 In React forms the form data handling is done by Javascript.

 Usually `<input> <textarea> <select>` properties are stored in their own state. But in React, They're stored in state property of component and can only be changed by setState();


## 	Events	

events are similar to those of HTML events, 
just the syntax difference, 

We use camelCase syntax in React 

e.g. onClick, onChange, onSubmit

##	Refs			

Refs provide a way to access DOM nodes or React elements created in the render method.

usually child component and parent component intercation happens with props,for making some changes, It re renderes the component with new peops.  But in some cases we need direct connection.

## 	Keys																				
Keys are identifiers, You should always add keys when adding elements in array or list. with similar props
- Keys must be unique

## 	Router		

`create-react-app` creates single page base apps, It does not have page wise routing solution.

For routing you need to use other packages, most used solution is 

`react-router-dom`

You can install it from package manager :run

`npm install react-router-dom`

or 

`yarn add react-router-dom`

You need to wrap your whole app with it's pages into Browser router and define routes. inside it with components. in your app.js or index.js file.