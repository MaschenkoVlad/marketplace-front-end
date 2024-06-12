const name_a = "James";

const person = { first: name_a };

console.log(person);

const sayHelloLinting = (fName: string) => {
  console.log(`Hello linting ${fName}`);
};

sayHelloLinting("James");
