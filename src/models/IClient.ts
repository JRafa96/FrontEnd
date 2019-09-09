export interface IClient {

    idUser: number;
    name: string;
    surname: string;
    date: Date;
    isAdmin: boolean;

    printData():void;
}