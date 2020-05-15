import { Person } from "./Person.js";

class Student extends Person {
  constructor (age, name, classRoom) {
    super(age, name);
    this.classRoom = classRoom;
  }
}

export { Student };
