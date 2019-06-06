import {Person} from "./Person.js.js";

class Teacher extends Person{
	constructor(age, name){
		this.age = age;
		this.name = name;
	}	
}

export {Teacher};