/**
 * Bootstrap process, load the core dependencies, integrates them into the app variables, and makes the app
 * variables accesible from window scope
 */

// Light-JS Core
import AJAX from "./core/AJAX.js";
import Helper from "./core/Helper.js";
import Animations from "./core/Animations.js";
import DOM from "./core/DOM.js";
import Events from "./core/Events.js";
import Helper from "./core/Helper.js";
import Modules from "./core/Modules.js";

// App variable structure
const app = {};
app.core = {};
app.classes = {};
app.data = {};

// Shortcut
window.d = window.document;
window.d.$ = window.document.querySelector;

// Import core
app.core.ajax = AJAX;
app.core.helper = Helper;
app.core.animations = Animations;
app.core.DOM = DOM;
app.core.events = Events;
app.core.modules = Modules;

// Global scope
window.app = app;
