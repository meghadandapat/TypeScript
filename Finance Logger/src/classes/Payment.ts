import { HasFormatter } from '../interfaces/HasFormatter.js'

//classes
//implementing interfaces means the must must contain that struture of interface

export class Payment implements HasFormatter{


    constructor(

        readonly recipent: string,
        private details: string,
        public amount: number,
    ) {

    }

    format(){
        return `${this.recipent} is owed ${this.amount} for ${this.details}`
    }
}