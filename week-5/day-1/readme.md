# Introduction to ReactJS																									
##	Overview															
- React is an open source, JavaScript library for developing user interface (UI) in web application. React is developed and released by Facebook.

- It is component based framework, where we can create as well as reuse the components, to build our web application. 

-  React community compliments React library by providing large set of ready-made components to develop web application in a record time.

- The salient features of React library are as follows −
     - Solid base architecture
    - Extensible architecture
    - Component based library
    - JSX based design architecture
    - Declarative UI library

##	Environment Setup																
1. You need to have NodeJs installed and it should have later than Node Version 12 to use React CLI.

You can check your node version using 

`node --version` 
returns something like : `v14.2.0`

in your terminal or command prompt in Windows

If Not installed you can install it from [here](https://nodejs.org/en/download/)

2.  for smaller usages, such as basic validation ,model, dialogue it can be used via CDN only. But for more usage, You need to create multiple files and bundle them using bundlers such as webpack,parcel,rollup etc.

There are few toolchains for creating react apps:
1. `create-react-app` : Single page App 
2. `Next.js` : for server side rendering
3. `Gatsby.js` : static content 

. 

3. Now you can use `create-react-app` toolchain to create your app.
For latest version of React, You cannot install create-react-app globally. 

    - So for new App, You need to install it first 
        
        `npm install create-react-app`

    - then run

        `npx create-react-app your-app-name`

    - We are using npm package manager here for installing packages, you can also use Yarn. Naming convension for app is you need to keep the name all in lower case.

    - This will create app folder
        Folder structure will be like this :

        ```
            your app|
                    |- node_modules
                    |-  public | - index.html
                    |          |
                    |- src     | - app.js
                               | - app.css
                               | - index.js
                               |
                    |
                    | - package.json
                    | - package-lock.json
                    |
        ```





##	Components																		
It is building block of a react app.

A React component represents a small chunk of user interface in a webpage. The primary job of a React component is to render its user interface and update it whenever its internal state is changed.

React component provides below functionalities.

- Initial rendering of the user interface.
- Management and handling of events.
- Updating the user interface whenever the internal state is changed.

These functionalities uses 
    - properties : helps a component to recieve inputs
    - events: used to trigger dom events
    - state: stateful components helps update UI based on its state

React component can be 
-  Functional component
    - 
   ` function Hello() { `

   `return` `<div>Hello</div>` 

   ` }`
- Class based Component - ES6


        class ExpenseEntryItem extends React.Component {    

            render() { 

            return ( 
             <div>Hello</div> 
            ); 
         }
        }   

- class components support State management by themseleves, while functional components does not.
-  Class based components have complete lifecycle, while functional components does not, but still you can use hooks like React.  `useEffect()` for that purpose.

For Examples you can check [bootstrap Project](../../week-4/formstudio-bootstrap/)

## 	State	

State represents the dynamic property of a React component at a given instance.

Each Component has it's state and can be accessed via `this.state`.

Whenever the state changes, it re renders the component, by calling render function.


##	Props Overview	

Each React component can have attributes similar to that of HTML elements and all those properties can be accessed inside the component using props

for example 

`<component   name="Mello"/> `

running `console.log(this.props.name)` inside component definition will log the value name.

React properties supports attribute’s value of different types. They are as follows,

- String
- Number
- Datetime
- Array
- List
- Objects