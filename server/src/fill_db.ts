import { Match } from "./entities/Match";
import { Player } from "./entities/Player";
import { MatchDAO } from "./dao/MatchDAO";
import { PlayerDAO } from "./dao/PlayerDAO";
import { TeamDAO } from "./dao/TeamDAO";
import { connection } from "./dao/database";
import { Team } from "./entities/Team";

const teams: Team[] = require('./data/teams.json')
const teamDAO: TeamDAO = new TeamDAO(connection);
let i = 0
const p = Promise.all(teams.map(team => { return teamDAO.saveTeam(team) }))



const nba_matchs: any[] = require("./data/game_nba.json")

let matchDAO = new MatchDAO(connection);
p.then(() => nba_matchs.forEach(m => {
    let match = new Match();
    let away: Team;
    teamDAO.findTeamById(m.away)
        .then(team => {
            away = team;
            teamDAO.findTeamById(m.home)
                .then(team => {
                    const home: Team = team;
                    match.away = away;
                    match.home = home;
                    match.date = Date.parse(m.Date);
                    matchDAO.saveMatch(match);
                })
        })
}))

let playerDAO = new PlayerDAO(connection)
let player: Player = new Player();
player.password = "test";
player.username = "Arthur";
playerDAO.savePlayer(player);
