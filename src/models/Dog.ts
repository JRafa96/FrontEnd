import { Animal } from "./Animal";
import { IPet } from "./IPet";

export class Dog extends Animal implements IPet{


    name: string;   
    
    greet(): string {
        let greet = 'Woof';
        return greet;
    }

    constructor(name:string,birth:Date,type:string){
        super(birth,type);
        this.name = name;
    }

}