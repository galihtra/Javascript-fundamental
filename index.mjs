import { coffeeStock, isCoffeeMachineReady } from './state.js';
 
const makeCoffe = (type,miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!...")
    } else {
        console.log("Biji kopi habis!...")
    }
}


makeCoffe("arabica",40);
makeCoffe("China",40);
console.log(coffeeStock);
console.log(isCoffeeMachineReady);