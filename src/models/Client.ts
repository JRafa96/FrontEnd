import { IClient } from "./IClient";

export class Client implements IClient {

    public idUser: number;
    public name: string;
    public surname: string;
    public date: Date;
    public isAdmin: boolean;

    constructor(idUser: number, name: string, surname: string, date: Date) {
        this.idUser = idUser;
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.isAdmin = false;
    }

    public getData(): string {
        return `Hola, soy ${this.name} ${this.surname} (ID: ${this.idUser})}`
    }

    public printData(): void {
        console.log(this.getData())
    }

    
    
    public getIdUser() : number {
        return this.idUser;
    }
    public setIdUser(idUser : number) {
        this.idUser = idUser;
    }

    public getIsAdmin() : boolean {
        return this.isAdmin;
    }
    public setIsAdmin(isAdmin : boolean) {
        this.isAdmin = isAdmin;
    }
    

}