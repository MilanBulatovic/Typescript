import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();

    let doc: HasFormatter;

    //checks if selected field is equal to 'Invoice'
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
    
    
});


/*MODULES*/
//splitting code into smaller modular files

/*INTERFACES*/
//template/structure for classes
//instance when called must match structure of interface
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'Milan',
//     age: 37,
//     speak(text: string): void {
//         console.log(text); 
//     },
//     spend(amount: number): number {
//         console.log(`I spent ${amount}`);
//         return amount;
        
//     }
// }

// const greetPerson = (person: IsPerson) => {
//     console.log(`Hello ${person.name}`);   
// }

// greetPerson(me);

/*INTERFACES with CLASSES*/
