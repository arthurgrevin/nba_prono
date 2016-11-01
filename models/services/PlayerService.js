"use strict";
var Player_1 = require("../entity/Player");
function findAllPlayer(connection) {
    return connection.getRepository(Player_1.Player).find({
        alias: "player",
        innerJoinAndSelect: {
            "prono": "player.pronos",
        }
    });
}
exports.findAllPlayer = findAllPlayer;
function findPlayerById(connection, id) {
    return connection.getRepository(Player_1.Player).findOneById(id);
}
exports.findPlayerById = findPlayerById;
function savePlayer(connection, player) {
    connection.getRepository(Player_1.Player).persist(player);
}
exports.savePlayer = savePlayer;
function deletePlayer(connection, player) {
    connection.getRepository(Player_1.Player).remove(player);
}
exports.deletePlayer = deletePlayer;
//# sourceMappingURL=PlayerService.js.map