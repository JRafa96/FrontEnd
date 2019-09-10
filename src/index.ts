

import { Person } from './models/person';
import { Client } from './models/Client';
import { isAdmin } from './models/isAdmin';
import { Cat } from './models/Cat';
import { Dog } from './models/Dog';


/*
function sayHello(): void {
    console.log('Hello');
}


var person1 = new Person('Jane', 'Doe');
var greet: string = person1.greet();

var idUser: number = 1;
var name: string = 'Joao';
var surname: string = 'Rafael';
var date: Date = new Date(2019, 9, 9);
var isAdmin: boolean = false;


const client: any = {
    idUser: idUser,
    name: name,
    surname: surname,
    date: date,
    isAdmin: isAdmin
};


Object.freeze(client);
console.dir(client);

console.log(client.date.toDateString());

date.setFullYear(1996, 4, 21);

console.log('var ', date.toDateString());
console.log('obj ', client.date.toDateString());
// console.dir(client);

function optionalParams(param1?: any, param2?: any): string {
    if (param1 == undefined && param2 == undefined) {
        var greet = 'hola';
        console.log(greet);
    } else if (param2 == undefined) {
        var greet = 'hola ' + param1;
        console.log(greet);
    } else {
        var greet = 'hola ' + param1 + ', ' + param2;
        console.log(greet);
    }

    return greet;

}

optionalParams();
optionalParams('John');
optionalParams('John', 'Jane');



function createClient(idUser: number, name: string, surname: string, date: Date): any {
    
    let newClient =  new Client(idUser,name,surname,date);
    
    return newClient;
    
}

var client1 = new Client(2,'Johny','Bigodes',new Date(1996,4,21));



var admin1 = new isAdmin(1,3, 'Sofia', 'Bigodaça', new Date(1970,2,23));

client1.printData();
admin1.printData();
*/

var cat = new Cat('Speedy',new Date(2005,5,21),'sonic');
var dog = new Dog('Pantufas',new Date(209,3,14),'chinela');

console.log(cat.name + ' ' + cat.birth);
console.log(cat.greet())

console.log(dog.name + ' ' + dog.birth);
console.log(dog.greet());