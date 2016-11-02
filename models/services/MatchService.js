"use strict";
var Match_1 = require("../entity/Match");
function findMatches(connection) {
    return connection.getRepository(Match_1.Match).find({
        alias: "match",
        leftJoinAndSelect: {
            "prono": "match.pronos",
        }
    });
}
exports.findMatches = findMatches;
function findMatchById(connection, id) {
    return connection.getRepository(Match_1.Match).findOneById(id, {
        alias: "match",
        innerJoinAndSelect: {
            "prono": "match.pronos",
        } });
}
exports.findMatchById = findMatchById;
function saveMatch(connection, match) {
    connection.getRepository(Match_1.Match).persist(match);
}
exports.saveMatch = saveMatch;
function deleteMatch(connection, match) {
    connection.getRepository(Match_1.Match).remove(match);
}
exports.deleteMatch = deleteMatch;
//# sourceMappingURL=MatchService.js.map