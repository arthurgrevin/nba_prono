process.env.NODE_ENV = 'test';
import 'reflect-metadata';

import { MatchDAO } from "../dao/MatchDAO";
import { TeamDAO } from "../dao/TeamDAO";
import { PronoDAO } from "../dao/PronoDAO";
import { Match } from "../entities/Match";
import { Prono } from "../entities/Prono";
import { Team } from "../entities/Team";
import { Player } from "../entities/Player";
import { connection } from "../dao/database";
import * as chai from 'chai'
describe('MatchDAO', () => {
    const matchDAO: MatchDAO = new MatchDAO(connection);
    const teamDAO: TeamDAO = new TeamDAO(connection);
    const pronoDAO: PronoDAO = new PronoDAO(connection);
    beforeEach(() => {
    });

    before("#findMatchesByDateAndPlayer", (done) => {
        const player: Player = new Player();
        player.username = "Arthur";
        player.password = "test";
        const team1: Team = {
            key: "GS",
            city: "Golden State",
            name: "warriors",
            logo: "/"
        }
        const team2: Team = {
            key: "HOU",
            city: "Houston",
            name: "rockets",
            logo: "/"
        }
        const promises = Promise.all([teamDAO.saveTeam(team1), teamDAO.saveTeam(team2)]);

        const date: number = Date.parse("2005-07-08T06:00:00+0200");
        let matchTest: Match = new Match();
        matchTest.date = date;
        matchTest.home = team1;
        matchTest.away = team2;

        let prono: Prono = new Prono();
        prono.choice = 'GS';
        prono.player = player;

        matchTest.pronos = [prono];

        console.log(matchTest)
        promises.then(() => matchDAO.saveMatch(matchTest)
            .then(response => {
                done()
            })
            .catch(err => console.log(err)))
    })

    describe('#findMatchesByDateAndPlayer away', () => {
        it('home team should be same as saved', (done) => {
            let date: number = Date.parse("2005-07-08T06:00:00+0200")
            matchDAO.findMatchesByDateAndPlayer(date, 1)
                .then(response => {
                    console.log(response);
                    chai.assert(response[0].home.key == 'GS');
                    chai.assert(response[0].home.city == 'Golden State');
                    chai.assert(response[0].home.name == 'warriors');
                    chai.assert(response[0].home.logo == '/');
                    chai.assert.deepEqual(response[0].date, date, date.toString())
                    done()
                })
                .catch(err => console.log(err))
        })
    });

    describe('#findMatchesByDateAndPlayer date', () => {
        it('away team should be same as saved', (done) => {
            let date: number = Date.parse("2005-07-08T06:00:00+0200")
            matchDAO.findMatchesByDateAndPlayer(date, 1)
                .then(response => {
                    chai.assert(response[0].away.key == 'HOU');
                    chai.assert(response[0].away.city == 'Houston');
                    chai.assert(response[0].away.name == 'rockets');
                    chai.assert(response[0].away.logo == '/');
                    done()
                })
                .catch(err => console.log(err))
        })
    });

    describe('#findMatches date', () => {
        it('date should be same as saved', (done) => {

            let date: number = Date.parse("2005-07-08T06:00:00+0200")
            matchDAO.findMatchesByDateAndPlayer(date, 1)
                .then(response => {
                    chai.assert.deepEqual(response[0].date, date, date.toString());
                    done();
                })
                .catch(err => console.log(err))
        })
    });

    describe('#findmatchesByDate prono', () => {
        it('prono should be same as saved', (done) => {
            let date: number = Date.parse("2005-07-08T06:00:00+0200")
            matchDAO.findMatchesByDateAndPlayer(date, 1)
                .then(response => {
                    chai.assert(response[0].pronos.length > 0);
                    chai.assert(response[0].pronos[0].choice == 'GS');
                    done();
                })
                .catch(err => console.log(err));
        })
    })

    describe('#findmatchesByDate prono with different playerId', () => {
        it('prono should be empty if player is different', (done) => {
            let date: number = Date.parse("2005-07-08T06:00:00+0200")
            matchDAO.findMatchesByDateAndPlayer(date, 2)
                .then(response => {
                    chai.assert(response[0].pronos.length == 0);
                    done();
                })
                .catch(err => console.log(err));
        })
    });

    describe('#findmatchesByDate date different , different day', () => {
        it('no match on that day', (done) => {
            let date: number = Date.parse("2005-07-07T06:00:00+0200")
            matchDAO.findMatchesByDateAndPlayer(date, 2)
                .then(response => {
                    chai.assert(response.length == 0);
                    done();
                })
                .catch(err => console.log(err));
        })
    });



    describe('#findmatchesByDate date different but same day', () => {
        it('should have the same match', (done) => {
            let date: number = Date.parse("2005-07-08")
            matchDAO.findMatchesByDateAndPlayer(date, 2)
                .then(response => {
                    chai.assert(response[0].home.key == 'GS');
                    chai.assert(response[0].away.key == 'HOU');
                    done();
                })
                .catch(err => console.log(err));
        })
    })



    describe('#updateProno', () => {
        after('#findmatchesByDate date different but same day', (done) => {
            let date: number = Date.parse("2005-07-08")
            let prono = new Prono();
            let player = new Player();
            player.username = "Lala";
            player.password = "trop_aps";
            prono.choice = 'HOU';
            prono.player = player;
            console.log("before update")
            let promise = matchDAO.findMatchesByDateAndPlayer(date, 2)
                .then(matches => {
                    console.log(matches);
                    let match = matches[0];
                    match.pronos.push(prono);
                    return match;
                })
            promise.then(match => {
                matchDAO.saveMatch(match);
                done();
            })


            it("player 2 has a prono", (done) => {

                matchDAO.findMatchesByDateAndPlayer(date, 2)
                    .then(matches => {
                        chai.assert(matches[0].pronos.length > 0);
                        done();
                    })
            })


        })
    })

    describe("delete Prono", () => {
        let date: number = Date.parse("2005-07-08");

        it('should be empty after delete', (done) => {

            const promise1 = matchDAO.findMatchesByDateAndPlayer(date, 1)
                .then(matches => {
                    return matches[0].pronos[0];
                })
            const promise2 = promise1.then(prono => {
                pronoDAO.deleteProno(prono);
            })
            promise2.then(() => {
                matchDAO.findMatchesByDateAndPlayer(date, 1)
                    .then(matches => {
                        chai.assert(matches[0].pronos.length > 0);
                        done();
                    })
            })
        })
    })
})

