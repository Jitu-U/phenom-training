## Working with Scopes and Events																								
### Types of Scopes in detail

Scopes defined as , Accesibility of variables, objects and functions.
Two types of scopes:
1. Local Scope
    It means that something is accesible in limited scope.
    e.g. When you declare a variable inside a function, value of that variable is only accesible inside that function

    Example in Scopes.js file

2. Global Scope
    Global scope is it can be accessed anywhere inside your javascript code. the variable func or object is declared anywhere inside the javascript code.

    Example in Scopes.js file


    When you assign a value to a variable that is not declared, it automatically becomes global in scope. The following example clarifies the concept. 




    
### Different types of events with real time examples

Every element on a web page has certain events that can trigger the invocation of event handlers. 

The "event handler" is a command that is used to specify actions in response to an event. Attributes are inserted into HTML tags to define events and event handlers.

The following are some of the most common events:
- onLoad – It occurs when a page loads in a browser. Mostly used to do initial API calls in Web applocation. to load data from the server
- onUnload – It occurs just before the user exits a page. Used to sync data with Server usually
- onMouseOver – It occurs when you point to an object. used to make the hover effects and add pop up info for elements
- onMouseOut – It occurs when you point away from an object. mouse over and mouse out can be used combinationally, as Chnaging states of an HTML DOM element on both events
- onSubmit – It occurs when you submit a form. used to perfform form data send to backend validation and other related tasks.
-  onClick – It occurs when an object is clicked. on click on any objects, go to different page or run the attached function. Or submit a form using this.
- onAbort – An image failed to load. You can either display another component in place of image.
- onBeforeUnload – The user is navigating away from a page. You can perform save session function to make page consistent.
- onBlur – A form field lost the focus (User moved to another field), Input validation can be executed with this event. Like When we entered a username and moved to password field, App can check for authenticity of username or availability.
- onChange –The contents of a field has changed. Can be used ro automatically update a variable value when you do input, So It can be sent to backend easily on click. or can be further processed.
- onDblClick –User double-clicked on this item. Double click functions, Like opening another link or chnaging state of element.
- onError –An error occurred while loading an image.Some basic error handling on UI side
- onFocus –User just moved into this form element. It can be used to change style of input element.
- onKeyDown –A key was pressed. You need to select a key for that, Can be used to create shortcut. Like on Key Down, You want to hold some elements on web UI, which further can be dropped using keyUp feature.
- onKeyPress –A key was pressed OR released. usually used on login pages.
on pressing enter automatically logs us in.
- onKeyUp –A key was released. Used with KeyDown and it is used in modern web apps.
- onMouseDown –A mouse button was pressed. Used in modern web apps, to drag and drop elements. this is used to hold elements.
- onMouseMove –The mouse moved. this followed by onMOusedown to move elements.
- onMouseUp –The mouse button was released. this is followed by onMouseMove, to drop the on hold elems.
- onReset –A form reset button was pressed. to clear the form
- onResize –The window or frame was resized. to adjust the responsiveness of UI.
- onSelect –Text has been selected. e.g. *medium.com* uses this feature. when you select text in articles, it shows options of highlights, comments and other.
 

