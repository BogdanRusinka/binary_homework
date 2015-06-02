//1 - прототипное наследование через функции-конструкторы
function Man(name,age){
	this.name = name;
	this.age = age;
	this.live = function(){
		alert("live");
    };
}

function Student(name, age){
	this.base = Man;
	this.base(name, age);
	this.study = function(){
		alert("Student study");
	};
}
Student.prototype = new Man;

//2 - наследование через конструкцию Object.create()

function Man(name,age){
	this.name = name;
	this.age = age;
	this.live = function(){
		alert("live");
    };
}

function Student(name, age){
	Man.apply(this, arguments);
	this.study = function(){
		alert("Student study");
	};
}

Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;


/* function duckType(obj){
	if (obj.study){
		alert("type Student");
	} else{
		alert("type Man")
	};
}
 */
function duckType(){
	if (this.study){
		alert("type Student");
	} else{
		alert("type Man")
	};
}
 
var man2 = new Man("Sam",36);
var stud2 = new Student("Jo", 26);

duckType.call(man2);
duckType.call(stud2);
