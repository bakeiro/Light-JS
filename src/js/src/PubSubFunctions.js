let pub_sub_events = {};
pub_sub_events.createTeacher = ['classes.Table.createTeacherJS', 'classes.Table.createTeacherHTML', 'classes.Table.refreshData'];
pub_sub_events.createStudent = ['classes.Table.createStudentJS', 'classes.Table.createStudentHTML', 'classes.Table.refreshData'];

export {pub_sub_events};