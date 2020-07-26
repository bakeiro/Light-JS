/**
 * Start up file, load dependencies, makes app variable global, set the
 * publish and subscribe events and more
 */

import { PubSub } from "./engine/PubSub.js"; // Engine
import Functions from "./engine/Functions.js"; // Engine
import Animations from "./engine/Animations.js"; // Engine
import { } from "./code/Events.js"; // Listener
import * as classes from "./code/Classes.js"; // Classes
import pub_sub_events from "./code/PubSubFunctions.js"; // PubSub events

// App
const app = {};
app.classes = {};
app.data = {};

// Shortcut
window.d = window.document;
window.d.$ = window.document.querySelector;

// Data
const classes_names = Object.keys(classes);
classes_names.forEach((value) => {
  let temp_index = value.toLowerCase();
  temp_index += "s";
  app.data[temp_index] = [];
});

// Engine
app.events = new PubSub();
app.functions = Functions;
app.animations = new Animations();

// Classes
app.classes = classes;

// Global scope
window.app = app;
