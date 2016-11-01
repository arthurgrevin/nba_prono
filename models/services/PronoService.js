"use strict";
var Prono_1 = require("../entity/Prono");
function findAllProno(connection) {
    return connection.getRepository(Prono_1.Prono).find({
        alias: "prono",
        innerJoinAndSelect: {
            "match": "prono.match",
            "player": "prono.player",
        }
    });
}
exports.findAllProno = findAllProno;
function findPronoById(connection, id) {
    return connection.getRepository(Prono_1.Prono).findOneById(id, {
        alias: 'prono',
        innerJoinAndSelect: {
            "match": "prono.match",
            "player": "prono.player"
        }
    });
}
exports.findPronoById = findPronoById;
function saveProno(connection, prono) {
    return connection.getRepository(Prono_1.Prono).persist(prono);
}
exports.saveProno = saveProno;
function deleteProno(connection, prono) {
    return connection.getRepository(Prono_1.Prono).remove(prono);
}
exports.deleteProno = deleteProno;
//# sourceMappingURL=PronoService.js.map