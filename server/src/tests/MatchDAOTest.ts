process.env.NODE_ENV = 'test';
import 'reflect-metadata';

import { MatchDAO } from "../dao/MatchDAO";
import { TeamDAO } from "../dao/TeamDAO";
import { Match } from "../entities/Match";
import { Prono } from "../entities/Prono";
import { Team } from "../entities/Team";
import { Player } from "../entities/Player";
import { connection } from "../dao/database";
import * as chai from 'chai'
describe('MatchDAO', () => {
    const matchDAO: MatchDAO = new MatchDAO(connection);
    const teamDAO: TeamDAO = new TeamDAO(connection);
    beforeEach(() => {
    });

    before("#findMatches", (done) => {
        const player: Player = {
            username: "Arthur",
            password: "test",

        }
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
        prono.match = matchTest;
        console.log(matchTest)
        promises.then(() => matchDAO.saveMatch(matchTest)
            .then(response => {
                done()
            })
            .catch(err => console.log(err)))
    })

    describe('#findMatches', () => {
        it('get a not empty list of Matches', (done) => {
            let date: number = Date.parse("2005-07-08T06:00:00+0200")
            console.log("ldsfh")
            matchDAO.findMatches()
                .then(response => {
                    console.log(response)
                    chai.assert(response[0].home.key == 'GS')
                    chai.assert(response[0].away.key == 'HOU')
                    chai.assert.deepEqual(response[0].date, date, date.toString())
                    done()
                })
                .catch(err => console.log(err))
        })
    })

    describe('#findmatchesByDate', () => {
        it('query matches by date', (done) => {
            let date: number = Date.parse("2005-07-08")
            matchDAO.findMatchesByDay(date, 0)
                .then(response => {
                    console.log(response)
                    chai.assert(response.length > 0)
                    done()
                })
                .catch(err => console.log(err))
        })
    })





})