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
var Match = (function () {
    function Match() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(), 
        __metadata('design:type', Number)
    ], Match.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(), 
        __metadata('design:type', String)
    ], Match.prototype, "home", void 0);
    __decorate([
        typeorm_1.Column(), 
        __metadata('design:type', String)
    ], Match.prototype, "away", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }), 
        __metadata('design:type', String)
    ], Match.prototype, "winner", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Prono_1.Prono; }, function (prono) { return prono.match; }, { cascadeAll: true }), 
        __metadata('design:type', Array)
    ], Match.prototype, "pronos", void 0);
    __decorate([
        typeorm_1.Column(), 
        __metadata('design:type', Date)
    ], Match.prototype, "date", void 0);
    Match = __decorate([
        typeorm_1.Table(), 
        __metadata('design:paramtypes', [])
    ], Match);
    return Match;
}());
exports.Match = Match;
//# sourceMappingURL=Match.js.map