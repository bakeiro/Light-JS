//Startup
let app = {};
app.classes = {};
app.config = {};
app.data = {};

window.d = document;
window.d.$ = window.document.querySelector;

//Config
app.config.screen_type = "PC";
app.config.email_account = "davixt3";

//Engine
import {pubsub} from "./engine/pubsub.js";
app.events = new pubsub();

import {functions} from "./engine/functions.js";
app.functions = new functions();

//Classes
import {person} from "./classes/person.js";
import {student} from "./classes/student.js";
import {teacher} from "./classes/teacher.js";

app.classes.person = person;
app.classes.student = student;
app.classes.teacher = teacher;

app.data.students = [];
app.data.teachers = [];

window.app = app;