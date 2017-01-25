import { Connection } from "typeorm";
import { connection } from "./database";
import { Team } from "../entities/Team";

export class TeamDAO {


    constructor(private connection: Promise<Connection>) {

    }

    saveTeam(team: Team): Promise<any> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Team).persist(team)
            })
    }

    findAllTeams(): Promise<Team[]> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Team).find()
            })
    }

    findTeamById(key: string): Promise<Team> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Team).findOneById(key);
            })
    }
}