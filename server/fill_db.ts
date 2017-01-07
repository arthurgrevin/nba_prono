import { Match } from "./entities/Match";
import {Player} from "./entities/Player";
import { MatchDAO } from "./dao/MatchDAO";
import {PlayerDAO} from "./dao/PlayerDAO";
import { connection } from "./dao/database";


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


