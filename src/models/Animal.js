"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(birth, type) {
        this._birth = birth;
        this._type = type;
    }
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (birth) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "birth", {
        get: function () {
            return this._birth.toDateString();
        },
        set: function (birth) {
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
