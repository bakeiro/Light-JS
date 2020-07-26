
// lazy load
app.core.modules.lazyImportModule("../classes/Person.js", "Person");
app.core.modules.lazyImportModule("../classes/Student.js", "Student");
app.core.modules.lazyImportModule("../classes/Table.js", "Table");
app.core.modules.lazyImportModule("../classes/Teacher.js", "Teacher");

// use pub/sub
app.core.events.sub("createTeacher", app.classes.Table.createTeacherJS);
app.core.events.sub("createTeacher", app.classes.Table.createTeacherHTML);
app.core.events.sub("createTeacher", app.classes.Table.refreshData);

app.core.events.sub("createStudent", app.classes.Table.createStudentJS);
app.core.events.sub("createStudent", app.classes.Table.createStudentHTML);
app.core.events.sub("createStudent", app.classes.Table.refreshData);

// events here
document.addEventListener("DOMContentLoaded", () => {
  // Add dynamic content
  const divRight = d.$("#left_2");
  const html = `
    <div class="square">
    <h4>Dynamic content</h4>
    <br>
    <button id="show_message">Message</button>
    </div>`;
  divRight.innerHTML += html;
});

// Click
document.addEventListener("click", (e) => {
  const elementId = e.srcElement.id;

  if (elementId === "button_1") {
    app.core.events.pub("createStudent");
  }

  if (elementId === "show_message") {
    app.core.helper.message("Hi! this is a message", 2000, "normal");
  }
});

// Mouseover
document.addEventListener("mouseover", (e) => {
  const elementId = e.srcElement.id;

  if (elementId === "button_2") {
    app.core.events.pub("createTeacher");
  }
});
