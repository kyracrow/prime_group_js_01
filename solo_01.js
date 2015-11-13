var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];



//Create an Employee constructor that is capable of holding each employee's data.
var Employee = function(name, number, salary, rating){
	this.name = name;
	this.number = number;
	this.salary = parseInt(salary);
	this.reviewRating = rating;

this.calculateStiPercentage = function () {

var bonus = 0

	if (this.reviewRating <= 2) {
		bonus = 0;
	} else if (this.reviewRating === 3) {
		bonus = 4;
	} else if (this.reviewRating === 4) {
		bonus = 6;
	} else if (this.reviewRating === 5) {
		bonus = 10;
	}
	if (number.length === 4) {
		bonus +=5;
	}
	if (this.salary > 65000) {
		bonus -= 1;
	}
	if (bonus > 13) {
		bonus = 13;
	}
return bonus;
};

this.calculateComp = function(salary, bonus) {
	var dec = bonus / 100;
	return salary *= (1+dec);
	}

this.totalBonus = function (salary, bonus) {
	var total = salary * (bonus / 100);

return Math.round(total);
};
};

function employeeData(employee){

var data = {};
data.name = employee.name;
data.stiPercentage = employee.calculateStiPercentage();
data.compensation = employee.calculateComp(employee.salary, employee.calculateStiPercentage());
data.bonus = employee.totalBonus(employee.salary, employee.calculateStiPercentage());

return data;
}



//Converted each employee into an instance of employee object
var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);



//store each instance in an array called employees
var employees = [atticus, jem, boo, scout];

for (var i =0; i < employees.length; i++) {
	console.log(employeeData(employees[i]));
};

