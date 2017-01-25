import { connection } from "../dao/database";
import { MatchDAO } from "../dao/matchDAO";
import { Match } from "../entities/Match";
import { Prono } from "../entities/Prono";

export class MatchController {

    private matchDAO: MatchDAO;
    constructor() {
        this.matchDAO = new MatchDAO(connection);
    }

    public getMatchesByDayAndPlayer(date, playerId): Promise<Match[]> {
        return this.matchDAO.findMatchesByDateAndPlayer(date, playerId);
    }

    public getMatches(): Promise<Match[]> {
        return this.matchDAO.findMatches();
    }

    public getMatchById(matchId): Promise<Match> {
        return this.matchDAO.findMatchesById(matchId);
    }


}