

export const teams:Team[] = require("../data/teams.json");





export  interface Team {
    name :string;
    city: string;
    logo : string;
    key : string;
}



export let teamMap : {[key:string]:Team;} = {};

for( let team of teams){
    teamMap[team.key] = team;
}





