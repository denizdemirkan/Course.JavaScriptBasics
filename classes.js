class Customer{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let tempCustomer = new Customer('Deniz', 'Demirkan');

console.log(tempCustomer.firstName + " " + tempCustomer.lastName);