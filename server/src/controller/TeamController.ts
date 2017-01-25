import { Team } from "../entities/Team";
import { TeamDAO } from "../dao/TeamDAO";
import { connection } from "../dao/database";


export class TeamController {

    private teamDAO: TeamDAO;
    constructor() {
        this.teamDAO = new TeamDAO(connection);
    }

    public getTeams() {
        return this.teamDAO.findAllTeams();
    }
}