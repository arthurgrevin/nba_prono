
import { Table, Column, PrimaryColumn, OneToMany } from "typeorm";

@Table()
export class Team {

    @PrimaryColumn("string")
    key: string;

    @Column("string")
    city: string;
    @Column("string")
    name: string;
    @Column("string")
    logo: string;

}

/*
export const teams: Team[] = require("../data/teams.json");






export let teamMap: { [key: string]: Team; } = {};

for (let team of teams) {
    teamMap[team.key] = team;
}

*/



