document.addEventListener('DOMContentLoaded', () => {
  // createStudent
  function createStudentObject() {
    const tempStudent = new app.classes.Student(5, 'Test');
    app.data.students.push(tempStudent);
  }

  function createStudentHtml() {
    const textElement = '<p>Student created!</p>';
    const button_1 = document.querySelector('#button_1');

    button_1.insertAdjacentHTML('afterend', textElement);
  }


  // createTeacher
  function createTeacherObject() {
    const tempTeacher = new app.classes.Teacher(5, 'Test');
    app.data.teachers.push(tempTeacher);
  }

  function createTeacherHtml() {
    const textElement = '<p>Teacher created!</p>';
    const button_2 = document.querySelector('#button_2');

    button_2.insertAdjacentHTML('afterend', textElement);
  }


  // Refresh data
  function refreshData() {
    const stringData = JSON.stringify(app.data, null, '<p></p>');
    const appDataBox = d.$('#app_data');
    const dataHtml = `
      <h4>App data:</h4>
      ${stringData}`;

    appDataBox.innerHTML = dataHtml;
  }


  // Bind teacher
  app.events.sub('createTeacher', createTeacherObject);
  app.events.sub('createTeacher', createTeacherHtml);
  app.events.sub('createTeacher', refreshData);

  // Bind student
  app.events.sub('createStudent', createStudentObject);
  app.events.sub('createStudent', createStudentHtml);
  app.events.sub('createStudent', refreshData);
});
