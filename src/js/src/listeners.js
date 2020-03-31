
// DocumentReady
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
