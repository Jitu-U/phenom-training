# Bootstrap - 2


## Dropdowns																

For dropdowns you need to specifically link `Bootstrap.js`

they're interactive using js.

`.dropdown` wrapped with `dropdown-menu` `.dropdown-items` elements.

 For accesibility, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .`dropdown-item` elements using the cursor keys and close the menu with the ESC key.

 for design ,
You can also use dark mode `.dropdown-menu-dark`


### Directions

1. `dropdown-center` : centers it with btn width
2. `dropup`: opens menu above the btn
3. `dropup-center` : opens menu up and in center
4. `dropend`: opens menu in right
5. `dropstart`: opens menu in left


For Menu Items: you can use `button` or `a` anchor elements .

- `dropdown-header` : adds header to dropdown menu
- `.dropdown-divider` : add hr elemeny with this class to make a divider
-  You can also add forms to dropdown  [example](../day-3/bootstrap.html)


## Navs,Navbar	
 `.nav` is usde to create the navbar container 

`.nav-item` to create nav menu item

You can use mutiple style options. including dropdowns in nav menu


`.navbar` is outer container for `.nav` to make a complete navbar for a web page which contains nav links as well as serch bar or other elements.

It can include: 
- `navbar-brand `for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.
- Flex and spacing utilities for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.
- Add an optional `.navbar-scroll` to set a `max-height` and scroll expanded navbar content.


##	Forms, Input	

Forms have preset classes for easy access. 

Making dynamic forms or responsive forms using css and Js.



##	Carousel	

A slideshow component for cycling through elements—images or slides of text—like a carousel.

for slides `.active` class needs to be added to slides, Which works for which element is active on screen.

Example in [here](../day-3/bootstrap.html),

You can also add carousel using js like this :

`const carousel = new bootstrap.Carousel('#myCarousel')`


## Modal	

JavaScript modal plugin adds dialogs to your site for lightboxes, user notifications, or completely custom content.

example in bootstrap.html


## Tooltip

They rely on popper library.

You can customise a tooltip. Based on directions css variables.


## Popover		

They're like tooltips, But gets activated when clicked