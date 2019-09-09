import { Client } from "./Client";

export class isAdmin extends Client{
    private idAdmin: number;

    constructor(idAdmin: number,idUser: number, name: string, surname: string, date: Date) {
        super(idUser,name,surname,date)
        this.idAdmin = idAdmin
        this.isAdmin = true;
    }

    
    public getData():string{
        return `${super.getData()} tengo el idAdmin: ${this.idAdmin}`;
    }

}