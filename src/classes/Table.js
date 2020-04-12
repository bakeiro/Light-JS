class Table {
  static createStudentJS() {
    const tempStudent = new app.classes.Student(14, "estudiante");
    app.data.students.push(tempStudent);
  }

  static createStudentHTML() {
    const textElement = "<p>Student created!</p>";
    const button_1 = document.querySelector("#button_1");
    button_1.insertAdjacentHTML("afterend", textElement);
  }

  static createTeacherJS() {
    const tempTeacher = new app.classes.Teacher(25, "profe");
    app.data.teachers.push(tempTeacher);
  }

  static createTeacherHTML() {
    const textElement = "<p>Teacher created!</p>";
    const button_2 = document.querySelector("#button_2");
    button_2.insertAdjacentHTML("afterend", textElement);
  }

  static refreshData() {
    const stringData = JSON.stringify(app.data, null, '<p></p>');
    const appDataBox = d.$('#app_data');
    const dataHtml = `
    <h4>App data:</h4>
    ${stringData}`;

    appDataBox.innerHTML = dataHtml;
  }
}

export { Table };
