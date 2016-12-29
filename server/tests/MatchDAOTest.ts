process.env.NODE_ENV = 'test'
import 'reflect-metadata'

import {MatchDAO} from "../dao/MatchDAO";
import {Match} from "../entities/Match";
import { connection } from "../dao/database";
import * as chai from 'chai'
describe('MatchDAO', () => {
    let matchDAO:MatchDAO = new MatchDAO(connection);
    beforeEach( () => {
        matchDAO = new MatchDAO(connection)
     });

     before("#findMatches",(done)=>{
         let date:Date = new Date("11/26/2016")
            let matchTest :Match = new Match()
            matchTest.date = date;
            matchTest.home = 'GS';
            matchTest.away = 'OKC';             
            matchDAO.saveMatch(matchTest)
                    .then(response=>{
                        done()
                    })
                    .catch(err=>console.log('err'))
     })

    describe('#findMatches',()=>{
        it('get a not empty list of Matches',(done)=>{
            let date:Date = new Date("11/26/2016")
            
            matchDAO.findMatches()
                .then(response=>{
                    chai.assert(response[0].home == 'GS')
                    chai.assert(response[0].away =='OKC')
                    chai.assert.deepEqual(response[0].date,date,date.toString())
                    done()
            })
                .catch(err=>console.log(err))
        })
    })



    

})