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

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

class BannedUser extends User {
    banned() {
        console.log(`You have been banned from this site, ${this.name}. You are mean. Take your negative energy somewhere else.`);
    };
};

// Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//instance of trial user 
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// instance of banned user
let bannedUser = new BannedUser('Wacky');
bannedUser.greet();
bannedUser.banned();
bannedUser.status();
