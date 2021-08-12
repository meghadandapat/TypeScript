import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
