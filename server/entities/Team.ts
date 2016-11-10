


export const teams:ITeam[] = require("./data/teams.json");





export interface ITeam {
    name :string;
    city: string;
    logo : string;
    key : string;
}



export let teamMap : {[key:string]:ITeam;} = {};

for( let team of teams){
    teamMap[team.key] = team;
}





