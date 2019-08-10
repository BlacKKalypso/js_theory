let user = {
  firstName: "Bob",
  lastName: "Smith",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName());

let first = "Hello";
let second = "World";
let third = "!";

let sayHello = () => {
  console.log("Hello world");
};

sayHello();
