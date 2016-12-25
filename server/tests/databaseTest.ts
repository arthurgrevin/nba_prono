process.env.NODE_ENV='test'
import 'reflect-metadata'
import {getDatabase} from '../dao/database'
import * as chai from 'chai'
describe('database',()=>{
    
    describe('#getDatabase',()=>{
        it('get test when NODE_ENV is test',()=>{
            chai.assert(getDatabase() == './storage-test')
        })
        
    })

})
