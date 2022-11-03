import { HasFormatter } from "../interfaces/HasFormatter.js";

/*CLASSES and modifiers*/
export class Invoice implements HasFormatter {
    //readonly - accesssible inside and outside but can't change it
    //readonly client: string;
    //private - not accessible outside of the class
    //private details: string;
    //public - the default behavior
    //public amount: number;

    // constructor(c: string, d:string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    //Shorthand of the up code
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}