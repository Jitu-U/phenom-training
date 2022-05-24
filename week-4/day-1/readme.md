#	Working with DOM																								
##	Intro to DOM
Document Object Model or DOM : It is programming interface for web document.

A web page is a document that can be either displayed in the browser window or as the HTML source. 

Object Oriented representation of Web Page : DOM

can be manipulated using JS


For Example,

`let containers = document.querySelector(".container")`
returns the list of all divs with class container


`alert(containers[0].nodeName)`

DOM isn't written for JS , DOM API is created tobe able to used by set of languages. JS is one can access DOM.




##	Methods,Documents, Elements											
### Methods

HTML DOM methods are actions you can perform (on HTML Elements).

in JS 
You can select HTML Elements by following Methods 

- `document.getElementByID()` : to select using ID attribute of elements
- `document.getElementByTagName()` : to select using tag name such as select all div using passing `div` or passing `h1` or `p` etc.
- `Nodes` : each element on page is known as nodes following are the node methods 
    - `node.childNodes` : selects collection of child nodes
    - `node.firstChild` : selects the first element of child collection
    - `node.lastChild` : selects the last child node
    - `node.parentNode` : selects the parent node
    - `node.nextSibling` : selects the next sibling in the array
    - `node.previousSibling` : selects the previous sibling in linear array

- `document.createElement()` : creates the new element and inserts in the dom.
- `element.appendChild` : adds child to the node as in node childs as we were selecting.
- `element.removeChild()`:  removes the child by reference
This is one example of creating a reference and removing it.
```
 var myLinkList = document.getElementById(“list”)
 var myRemovedLink = myLinkList.lastChild;
 myLinkList.removeChild(myRemoveLink);
        
 ```

- `Element.getAttribute()` get's the attribute value of element.
- `elememt.setAttribute(attributeName,attributeValue)`: set attribute or add attribute
- `document.forms` to select forms you can chain the methods e.g. `document.forms["myForm"].["email"].value;`
- `element.innerHTML()` :  change the inner HTML of element you can pass it as a string



### Documents

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content.

Document is root object we can say, It has all the child elements. which can be used by the above functions.


### Elements
 It is object representing elements like p,div,img,table etc.
 They're child of document object.

 there are many methods and properties including methods mentioned above. and They're used to manipulate the web page and make it dynamic.

## 	Events	

Events are the actions or changes happens in web page, For example, Mouse click, mouse over, on page load is event.

these events are accessed via Javascript using event Handlers.
You can checkout events by going to [W3Schools HTML EVentHandlers]('https://www.w3schools.com/jsref/dom_obj_event.asp').

## 	Event Listener			
`document.addEventListener(event,eventHandler)`

this adds an event listener to DOM elements. It can have an event handler which gets called when the event happens.

e.g. 

```
document.getElementById("myBtn").addEventListener("click", displayDate);
```

This event handler selects btn and calls display date function when user clicks the button.

## 	Navigation		

You can navigate the node tree using node relationships.

You can use the following node properties to navigate between nodes with JavaScript:

- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling


As mentioned in [methods](#methods)

##	Nodes																

Nodes are all the elements in the document.
there are node Methods mentioned in  [methods](#methods). Everything in Document is acessed as nodes and childs.

##	Collections															
When you use `document.getElementByTagName("div")` , It returns the HTMLCOllection Object. It is similar to array like list of DOM elements.

## 	Node Lists	

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName()

All browsers return a NodeList object for the property childNodes. 





## Difference Betweeen NodeList and Collections
An HTMLCollection is a collection of document elements.
A NodeList is a collection of document nodes

HTMLCollection items can be accessed by their name, id, or index number.
NodeList items can only be accessed by their index number.

HTMLCollection is live element while NodeList is often static. HTML collection updates the elements as soon as it's added to dom by any other javascript functions.

