"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("./Client");
var isAdmin = /** @class */ (function (_super) {
    __extends(isAdmin, _super);
    function isAdmin(idAdmin, idUser, name, surname, date) {
        var _this = _super.call(this, idUser, name, surname, date) || this;
        _this.idAdmin = idAdmin;
        _this.isAdmin = true;
        return _this;
    }
    isAdmin.prototype.getData = function () {
        return _super.prototype.getData.call(this) + " + Tenho o idAdmin: " + this.idAdmin;
    };
    return isAdmin;
}(Client_1.Client));
exports.isAdmin = isAdmin;
