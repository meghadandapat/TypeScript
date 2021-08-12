//classes
//default behaviours of classes is public
//properties can be accessed and modified anywhere
//private properties can be accessed inside the class and outside the class using the methods of class
//readonly means can be accessed  but not modified 
export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
