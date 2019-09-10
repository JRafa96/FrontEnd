export abstract class Animal {
    private _birth: Date;
    private _type: string;


    constructor(birth: Date, type: string) {
        this._birth = birth;
        this._type = type;
    }


    get type():string{
        return this._type;
    }

    set type(birth: string) {
    }

    get birth(): string {
        return this._birth.toDateString();
    }
    set birth(birth: string) {
    }

}