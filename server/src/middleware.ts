
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { CONF } from "./conf";

export const check_token = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.params.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, CONF.key_jwt, function (err, decoded) {
            if (err) {
                return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req['decoded'] = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(401).send({
            success: false,
            message: 'No token provided.'
        });

    }

};