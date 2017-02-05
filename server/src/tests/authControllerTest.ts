

import * as chai from 'chai';
import * as sinon from 'sinon';
import { AuthController } from '../controller/AuthController';
import { PlayerDAO } from '../dao/PlayerDAO';


describe('AuthController', () => {
    const playerDAOmock = sinon.mock(PlayerDAO)
    const authController: AuthController = new AuthController();
    describe("#loginRightCredentials", () => {
        it("should return payload with token", () => {

        });
    });
})