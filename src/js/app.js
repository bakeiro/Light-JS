/**
 * Start up file, load dependencies, makes app variable global, set the 
 * publish and subscribe events and more
 */

// Engine
import { PubSub } from "./engine/PubSub.js";
import { Functions } from "./engine/Functions.js";

// Listener
import { } from "./src/listeners.js";

// Classes
import * as classes from './src/importClasses.js';

// App
let app = {};
app.classes = {};
app.data = {};

// Shortcut
window.d = window.document;
window.d.$ = window.document.querySelector;

// Data
let classes_names = Object.keys(classes);
classes_names.forEach((value) => {
    let temp_index = value.toLowerCase();
    temp_index += "s";
    app.data[temp_index] = [];
});

// Engine
app.events = new PubSub();
app.functions = Functions;

// Classes
app.classes = classes;

// PubSub events
app.events.sub("createTeacher", app.classes.Table.createTeacherJS);
app.events.sub("createTeacher", app.classes.Table.createTeacherHTML);
app.events.sub("createTeacher", app.classes.Table.refreshData);

app.events.sub("createStudent", app.classes.Table.createStudentJS);
app.events.sub("createStudent", app.classes.Table.createStudentHTML);
app.events.sub("createStudent", app.classes.Table.refreshData);

// Global scope
window.app = app;
