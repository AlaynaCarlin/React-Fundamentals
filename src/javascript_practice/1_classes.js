/* classes- A class component is a more featured way to define a React component. 
It also acts like a function that receives props, but that function also considers a 
private internal state as additional input that controls the returned JSX */

// ES6 JS Classes 
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1 
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2 
    status() {
        console.log(`current status: ${this.type}`);
    };
};

//Instance of the class/new object
let anonDude = new User('Anonymous dude');

// we can now use the new instance and the . operator to access the two methods
anonDude.greet();
anonDude.status();

// Another instance of the class
let anonLady = new User('Anonymous lady');
anonLady.greet();
anonLady.status();

// Another instance of the class 
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

let autumn = new User('Autumn');
autumn.greet();
autumn.status();

let ezra = new User('Ezra');
ezra.greet();
ezra.status();