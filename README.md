# What?

 Personal structure to write apps in vanilla JS, the purpose of this is to offer an alternative for writing frameworkless JS apps.
 No library dependence.

### Compatibility

This project uses the ES6 classes, ES6 functions, ES6 Number... so, be aware this won't work in old browsers (but most of them!). More info about compatibility [here](https://caniuse.com/#search=es6)  

### App structure

This project defines an object "app" in the global scope, so it's accesible through all the scripts and functions.  
The app object defines some keys:

- `app.classes`: The available classes to initialize (ex: car, person, customer...), normally, these classes contain methods to modify the HTML.
- `app.config`: Object which stores important variables related to configuration, I use it to store domain, url, session, screen resolution or whatever variable I regard important.
- `app.data`: Stores all the objects instances to work with, example, an array of customers, products etc.
Normally these objects are represented in the HTML, and are instances from `app.classes`.  
- `app.events`: This class can trigger and subscribe events (an event is a group of functions executed in order, you define them in `src/engine/events`).
- `app.functions`: Offers some useful methods to use (examples: number_format, base64_encode ...) 


### Files structure

-  `index.html`: Is the entry point, you need to include the app.js, events.js and listener.js
-  `src/app.js`: Is where defines the app variable, import all the classes plus the event class (pubsub) file, defines the configuration variables and the general structure.

-  `src/engine/events.js`: Defines the events functions.
-  `src/engine/listener.js`: Defines which actions (click, mouseover...) triggers which events.
-  `src/engine/pubsub.js`: Class to define execute events (pubsub pattern).
-  `src/engine/functions.js`: Defines useful methods to use, available in app.functions.  

-  `src/classes/*`: Here defines the ES6 classes used in the app

### Events

This uses the pubsub pattern (publish subscribe pattern), this means, you can define one event, and you can bind it functions, to be executed concatenated, being the last function added, the last function being executed.

for creating and adding functions to one event:  

//sub() creates(if didn't exist before) and adds the functions passed in the second param  
app.events.sub("event_name", callback_0);  
app.events.sub("event_name", callback_1);  
app.events.sub("event_name", callback_2);  
app.events.sub("event_name", callback_3);  

so calling app.events.pub("event_name") will execute  

callback_0();  
callback_1();  
callback_2();  
callback_3();  


### Included functions

This includes some common functions out of the box, to it's easier to make a project, these functions are accesible under `app.functions`, examples are:

- base64_encode
- base64_decode
- parseUrlParams
- getDomain
- isNumeric
- number_format
- message
- fadeIn
- fadeOut
- hide
- show
- remove

much more...

### ESLint

This projects uses Eslint with the Airbnb guidelines