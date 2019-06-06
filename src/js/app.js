/* global window */

// Startup
let app = {};
app.classes = {};
app.config = {};
app.data = {};

window.d = window.document;
window.d.$ = window.document.querySelector;

// Config
app.config.screen_type = 'PC';
app.config.email_account = 'email@email.com';

// Engine
import {pubsub} from './engine/pubsub.js';
app.events = new pubsub();

import {Functions} from './engine/Functions.js';
app.functions = Functions;

// Classes
import {Person} from './classes/Person.js';
import {Student} from './classes/Student.js';
import {Teacher} from './classes/Teacher.js';

app.classes.Person = Person;
app.classes.Student = Student;
app.classes.Teacher = Teacher;

app.data.students = [];
app.data.teachers = [];

window.app = app;
