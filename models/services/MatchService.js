"use strict";
var database_1 = require("../database");
var Match_1 = require("../entity/Match");
function findMatches() {
    return database_1.connection.then(function (connection) {
        connection.getRepository(Match_1.Match).find();
    });
}
exports.findMatches = findMatches;
function findMatchById(id) {
    return database_1.connection.then(function (connection) {
        connection.getRepository(Match_1.Match).findOneById(id);
    });
}
exports.findMatchById = findMatchById;
function saveMatch(match) {
    database_1.connection.then(function (connection) {
        connection.getRepository(Match_1.Match).persist(match);
    }).then(function (x) { return console.log("MatchService : match saved"); });
}
exports.saveMatch = saveMatch;
function deletMatch(match) {
    database_1.connection.then(function (connection) {
        connection.getRepository(Match_1.Match).remove(match);
    });
}
exports.deletMatch = deletMatch;
//# sourceMappingURL=MatchService.js.map