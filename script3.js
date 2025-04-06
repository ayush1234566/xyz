let data= "my data is secret";
class user {
    constructor(name,email) {
        this.name=name;
        this.email=email;
    }
    viewdata() {
        console.log("my data is very much private")
    }
}
class enginnear extends user {
    constructor(data) {
        super(data);
    }
    work() {

        console.log("his work is to solve the problem statement and how to come up with error");

    }
}
class admin extends user {
    constructor() {
        super(this.name);
        super(this.email);
    }
    editdata() {
        super.viewdata();
        console.log("i want to do some editing inside the data to make it more useful");
        
    }
}       
let student = new user("ayush","example@gmail.com");
let student1= new user("rohit","example2@gmail.com");
let myuser= new admin("sunil","example3@gnmail.com");
