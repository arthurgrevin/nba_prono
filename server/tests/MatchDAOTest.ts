process.env.NODE_ENV = 'test'
import 'reflect-metadata'

import {MatchDAO} from "../dao/MatchDAO"
import { connection } from "../dao/database";
import * as chai from 'chai'

describe('MatchDAO', () => {
    let matchDAO:MatchDAO;
    beforeEach( () => {
        matchDAO = new MatchDAO(connection)
     });

    describe('#findMatches',()=>{
        it('get a not empty list of Matches',(done)=>{
            matchDAO.findMatches()
                .then(response=>{
                    done()
            })
                .catch(err=>console.log(err))
        })
    })

})