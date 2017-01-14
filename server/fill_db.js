"use strict";
var Match_1 = require("./entities/Match");
var Player_1 = require("./entities/Player");
var MatchDAO_1 = require("./dao/MatchDAO");
var PlayerDAO_1 = require("./dao/PlayerDAO");
var database_1 = require("./dao/database");
var nba_matchs = require("./entities/data/game_nba.json");
var matchDAO = new MatchDAO_1.MatchDAO(database_1.connection);
nba_matchs.forEach(function (m) {
    var match = new Match_1.Match();
    match.awayKey = m.away;
    match.homeKey = m.home;
    match.date = Date.parse(m.Date);
    if (m.awayScore && m.homeScore) {
        match.winnerKey = m.homeScore > m.awayScore ? m.home : m.away;
        console.log(match);
    }
    console.log(match);
    matchDAO.saveMatch(match);
});
var playerDAO = new PlayerDAO_1.PlayerDAO(database_1.connection);
var player = new Player_1.Player();
player.password = "test";
player.username = "Arthur";
playerDAO.savePlayer(player);
//# sourceMappingURL=fill_db.js.map