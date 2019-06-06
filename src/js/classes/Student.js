import {Person} from "./Person.js.js";

class Student extends Person{
	constructor(age, name){
		this.age = age;
		this.name = name;
	}
}

export {Student};