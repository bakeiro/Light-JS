# What?

 Personal structure to write JS apps without any frameworks/library, the purpose of this is to offer an alternative for writing JS apps without using any modern framework

### Compatibility

This project uses the ES6 classes and ES6 functions, so, be aware this won't work in old browsers.  
More info about compatibility [here](https://caniuse.com/#search=es6)  

### App structure
This project defines the variable "app" in the window scope (global), so it's accesible through all the scripts and functions.  
This is the app object structure

	app:
	- **classes:** The classes to initialize (ex: car, person, customer...)
	- **config:** (optional) Object which stores the 'configuration' variables, you can use this to store all the variables related to screen resolution, domain, session etc  
	- **data:** Stores all the variables to work with, example, all the customers from one Ajax request, or all the times the user clicked one button etc.  
	- **events:** This defines which event are available to trigger (an event is a group of functions executed in order)
	- **functions:** Defines the basic functions, and then, binds one number of functions to one event 
 
### Folder structure

 - **Index.html** is the entry point, here links to app.js, events.js and listener.js
 - **src/app.js** Is where defines the app data, configuration, classes and the general structure  

 - **src/engine/events.js** Is where defines all the functions and events names
 - **src/engine/listener.js** Where defines which actions executes which methods
 - **src/engine/pubsub.js** Is the publish/subscribe events engine  

 - **src/classes/\*** Here defines the ES6 classes used in the app

### Included functions

This includes some common functions out of the box, to it's easier to make a project