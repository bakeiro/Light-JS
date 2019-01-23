# What?

 Personal structure to write JS apps without any frameworks/library, the purpose of this is to offer an alternative for writing JS apps without using any modern framework

### Compatibility

This project uses the ES6 classes, ES6 functions, ES6 Number... so, be aware this won't work in old browsers.  
More info about compatibility [here](https://caniuse.com/#search=es6)  

### App structure
This project defines the variable "app" in the window scope (global), so it's accesible through all the scripts and functions.  

This is the app object structure:

- `app.classes:` The available classes to initialize (ex: car, person, customer...), normally, this classes can modify the HTML
- `app.config:` Object which stores the 'main' variables, I use this to store all the variables related to screen resolution, domain, session etc  
- `app.data:` Stores all the objects instances to work with, example, an array of customers, products etc.
Normally this objects are represented in the HTML somehow and are instances from `app.classes`.  
- `app.events:` This defines which event are available to trigger (an event is a group of functions executed in order, you need to define this in src/engine/events)
- `app.functions:` Offers some common useful methods to use (examples: number_format, base64_encode ...) 

 
### Folder structure

-  `Index.html` is the entry point, here links to app.js, events.js and listener.js
-  `src/app.js` Is where defines the app variable, import all the classes plus the pubsub file, defines the configuration variables and the general structure
-  `src/engine/events.js` Is where defines all the functions and events names
-  `src/engine/listener.js` Where defines which actions executes which methods
-  `src/engine/pubsub.js` Is the publish/subscribe events engine  
-  `src/engine/functions.js` Defines the useful functions to use under `app.functions`  
-  `src/classes/*` Here defines the ES6 classes used in the app

### Included functions

This includes some common functions out of the box, to it's easier to make a project