# Bootstrap

Bootstrap is open source web Frontend Framework to create modern responsive websites.


You can link it to your website using cdn and use their inbuilt components and functions to create responsive sites easily.

CDN links

As reference, here are our primary CDN links.
Description 	URL

CSS 	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css


JS 	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js

## Important Global environment setup

### 1. Use html5 doctype 

`<!doctype html>`
### 2. Responsive meta tag

`<meta name="viewport" content="width=device-width, initial-scale=1">`

### 3. Box-sizing in css

For more straightforward sizing in CSS, we switch the global box-sizing value from content-box to border-box. 

It causes some issues with some external apps like google maps etc.



## Images

images has special classes which are used in many cases.

For responsive images : `img-fluid` is used. which makes `max-width:100%` and `height: auto`

image thumbnails with rounded Border: `img-thumbnail`

aligning images at center: `mx-auto` margin is used.

You need to specify `img-...` class in img element itself when using picture tag for multiple sources.


## Jumbotron												
Lightweight, flexible component for showcasing hero unit style content.

example in [bootstrap.html](./bootstrap.html)

##	Alerts

You can use `alert` 


	Buttons																								
	Button Groups																								
	Badges, ProgressBars																								
	Pagination																								
	Dropdowns																								
	Navs,Navbar																								
	Forms, Input																								
	Carousel																								
	Modal																								
	Tooltip																								
	Popover																								
	An application using Bootstrap 4																								
	"Create a page using below mockup
https://phenompeople.invisionapp.com/console/share/EFYDR7AW9JU/625975301"