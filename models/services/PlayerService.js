"use strict";
var database_1 = require("../database");
var Player_1 = require("../entity/Player");
function findAllPlayer() {
    return database_1.connection.then(function (connection) {
        connection.getRepository(Player_1.Player).find();
    });
}
exports.findAllPlayer = findAllPlayer;
function findPlayerById(id) {
    return database_1.connection.then(function (connection) {
        connection.getRepository(Player_1.Player).findOneById(id);
    });
}
exports.findPlayerById = findPlayerById;
function savePlayer(player) {
    database_1.connection.then(function (connection) {
        connection.getRepository(Player_1.Player).persist(player);
    });
}
exports.savePlayer = savePlayer;
function deletePlayer(player) {
    database_1.connection.then(function (connection) {
        connection.getRepository(Player_1.Player).remove(player);
    });
}
exports.deletePlayer = deletePlayer;
//# sourceMappingURL=PlayerService.js.map