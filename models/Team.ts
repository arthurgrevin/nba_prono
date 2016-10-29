


export const teams = require("./data/teams.json");





export interface ITeam {
    name :string;
    city: string;
}



export let teamMap : {[key:string]:ITeam;} = {};

for( let team of teams.teams){
    teamMap[team.name] = <ITeam>team;
}





