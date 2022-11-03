/*CLASSES and modifiers*/
export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
