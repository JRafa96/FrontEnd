"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client(idUser, name, surname, date) {
        this.idUser = idUser;
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.isAdmin = false;
    }
    Client.prototype.getData = function () {
        return "Hola, soy " + this.name + " " + this.surname + " (ID: " + this.idUser + ")";
    };
    Client.prototype.printData = function () {
        console.log(this.getData());
    };
    Client.prototype.getIdUser = function () {
        return this.idUser;
    };
    Client.prototype.setIdUser = function (idUser) {
    };
    Client.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    Client.prototype.setIsAdmin = function (isAdmin) {
    };
    return Client;
}());
exports.Client = Client;
