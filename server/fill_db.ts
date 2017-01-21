import { Match } from "./src/entities/Match";
import {Player} from "./src/entities/Player";
import { MatchDAO } from "./src/dao/MatchDAO";
import {PlayerDAO} from "./src/dao/PlayerDAO";
import { connection } from "./src/dao/database";


const nba_matchs: any[] = require("./entities/data/game_nba.json")
let matchDAO = new MatchDAO(connection);
nba_matchs.forEach(m => {
    let match = new Match();
    match.awayKey = m.away;
    match.homeKey = m.home;
    match.date = Date.parse(m.Date);
    
    if (m.awayScore && m.homeScore) {
        match.winnerKey = m.homeScore > m.awayScore ? m.home : m.away;
        console.log(match)
    }
    console.log(match)
    matchDAO.saveMatch(match)
})

let playerDAO = new PlayerDAO(connection)
let player:Player = new Player();
player.password = "test";
player.username = "Arthur";

playerDAO.savePlayer(player)


