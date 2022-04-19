/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Airam Rafael Luque León
 * @since April 01 2021
 * @desc This program implements a basic example of the factory method pattern
 * in JavaScript.
 * @see {@link https://www.dofactory.com/javascript/design-patterns/factory-method}
 */

/**
 *
 * @returns An object that is an instance of the FullTime, PartTime, Temporary,
 * or Contractor class.
 */
const Factory = function() {
  this.createEmployee = function(type) {
    let employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }
    employee.type = type;
    employee.say = function() {
      console.log(this.type + ": rate " + this.hourly + "/hour");
    };
    return employee;
  };
};


const FullTime = () => {
  this.hourly = "$12";
};


const PartTime = () => {
  this.hourly = "$11";
};


const Temporary = () => {
  this.hourly = "$10";
};


const Contractor = () => {
  this.hourly = "$15";
};


function run() {
  const employees = [];
  const factory = new Factory();
  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));

  for (const employee of employees) {
    employee.say();
  }
}

run();
