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
var Prono_1 = require("./Prono");
var Player = (function () {
    function Player() {
        this.score = 0;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ unique: true }), 
        __metadata('design:type', Number)
    ], Player.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }), 
        __metadata('design:type', String)
    ], Player.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column(), 
        __metadata('design:type', String)
    ], Player.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }), 
        __metadata('design:type', Number)
    ], Player.prototype, "score", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Prono_1.Prono; }, function (prono) { return prono.player; }, { cascadeAll: true }), 
        __metadata('design:type', Array)
    ], Player.prototype, "pronos", void 0);
    Player = __decorate([
        typeorm_1.Table(), 
        __metadata('design:paramtypes', [])
    ], Player);
    return Player;
}());
exports.Player = Player;
/**
export function findAllPlayer():Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Player).find();
        })
}

export function findPlayerById(id:number):Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Player).findOneById(id)
        }
    )
}

export function savePlayer(player:Player){
    connection.then(
        connection => {
            connection.getRepository(Player).persist(player);
        })
}

export function deletePlayer(player:Player){
    connection.then(
        connection=>{
            connection.getRepository(Player).remove(player);
        }
    )
}**/ 
//# sourceMappingURL=Player.js.map