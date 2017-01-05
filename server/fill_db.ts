import { Match } from "./entities/Match";
import { MatchDAO } from "./dao/MatchDAO";
import { connection } from "./dao/database";


const nba_matchs: any[] = require("./entities/data/game_nba.json")
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
    let matchDAO = new MatchDAO(connection);
    matchDAO.saveMatch(match)
})