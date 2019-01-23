# What?

 Personal structure to write JS apps without any frameworks/library, the purpose of this is to offer an alternative for writing JS apps without using any modern framework

### Compatibility

This project uses the ES6 classes and ES6 functions, so, be aware this won't work in old browsers.  
More info about compatibility [here](https://caniuse.com/#search=es6)  

 
### Folder structure

 - **Index.html** is the entry point, here links to app.js, events.js and listener.js
 - **app.js** Is where defines the app data, configuration, classes and the general structure
 - **events.js** Is where defines all the functions and events names
 - **listener.js** Where defines which actions executes which methods
 - **pubsub.js** Is the publish/subscribe events engine
 - **classes folder** Here defines the ES6 classes used in the app

### Included functions

This includes some common functions out of the box, to it's easier to make a project