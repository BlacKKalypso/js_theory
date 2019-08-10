const user = {
  fisrtName: "John",
  lastName: "Doe",
  age: 29
};
user.country = "United States";

// method can also be added
user.ageRange = function() {
  return `${this.age - 5}-${this.age + 5}`;
};
//console.log(user);
for (const key in user) {
  console.log(user[key]);
}

function Animal(name, icon) {
  this.name = name;
  this.icon = icon;
  //this.color = color;
}

const rabbit = new Animal("Rabbit", "🐰");
const cat = new Animal("Cat", "🐱");

//add property
Animal.prototype.color = "White";

//add method
Animal.prototype.meow = function() {
  if (this.name === "Cat") {
    return `${this.name} can meow`;
  } else {
    return `${this.name} cannot moew!`;
  }
};

console.log(cat.color);
console.log(rabbit.meow());
console.log(cat.meow());

cat.__proto__.color = "Black";
cat.__proto__.eatMeat = true;

console.log(rabbit.color);
console.log(rabbit.eatMeat);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `👋 ${this.name}!`;
  }
}

const bill = new Person("Bill", 25);
console.log(bill.sayHi());
