//classes
//implementing interfaces means the must must contain that struture of interface
export class Payment {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} is owed Rs ${this.amount} for ${this.details}`;
    }
}
