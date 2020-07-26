
// lazy load
app.modules.lazyImport("/classes/Person.js");
app.modules.lazyImport("/classes/Student.js");
app.modules.lazyImport("/classes/Table.js");
app.modules.lazyImport("/classes/Teacher.js");

// use pub/sub
app.events.sub("createTeacher", app.classes.Table.createTeacherJS);
app.events.sub("createTeacher", app.classes.Table.createTeacherHTML);
app.events.sub("createTeacher", app.classes.Table.refreshData);

app.events.sub("createStudent", app.classes.Table.createStudentJS);
app.events.sub("createStudent", app.classes.Table.createStudentHTML);
app.events.sub("createStudent", app.classes.Table.refreshData);

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
    app.events.pub("createStudent");
  }

  if (elementId === "show_message") {
    app.functions.message("Hi! this is a message", 2000, "normal");
  }
});

// Mouseover
document.addEventListener("mouseover", (e) => {
  const elementId = e.srcElement.id;

  if (elementId === "button_2") {
    app.events.pub("createTeacher");
  }
});
