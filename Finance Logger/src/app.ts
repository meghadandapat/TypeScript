import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter';

/* let docOne: HasFormatter;
let docTwo: HasFormatter;
// these object must have the method format sice it is present in interface hasformatter
docOne = new Invoice('megha', 'web work', 250)
docTwo = new Payment('varada', 'web work', 344)
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo); */



// const form = document.querySelector('form')!
// ! is added at the end to give assurance that the value won'tbe null or else TS generates an error

//****TYPE-CASTING*****//
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice') {
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
})




