import { Person } from './Person.js';

class Teacher extends Person {
  constructor(age, name, classRoom) {
    super(age, name);
    this.classRoom = classRoom;
  }
}

export { Teacher };
