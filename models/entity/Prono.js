"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var typeorm_1 = require("typeorm");
var Match_1 = require("./Match");
var Prono = (function () {
    function Prono() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(), 
        __metadata('design:type', Number)
    ], Prono.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Match_1.Match; }, function (match) { return match.pronos; }), 
        __metadata('design:type', Match_1.Match)
    ], Prono.prototype, "match", void 0);
    __decorate([
        typeorm_1.Column(), 
        __metadata('design:type', String)
    ], Prono.prototype, "choice", void 0);
    __decorate([
        typeorm_1.Column(), 
        __metadata('design:type', Boolean)
    ], Prono.prototype, "valid", void 0);
    Prono = __decorate([
        typeorm_1.Table(), 
        __metadata('design:paramtypes', [])
    ], Prono);
    return Prono;
}());
exports.Prono = Prono;
/*
export function findAllProno():Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Prono).find();
        })
}

export function findPronoById(id:number):Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Prono).findOneById(id)
        }
    )
}

export function saveProno(prono:Prono){
    connection.then(
        connection => {
            connection.getRepository(Prono).persist(prono);
        })
}

export function deleteProno(prono:Prono){
    connection.then(
        connection=>{
            connection.getRepository(Prono).remove(prono);
        }
    )
}*/ 
//# sourceMappingURL=Prono.js.map