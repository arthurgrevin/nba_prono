"use strict";
var database_1 = require("../database");
var Prono_1 = require("../entity/Prono");
function findAllProno() {
    return database_1.connection.then(function (connection) {
        connection.getRepository(Prono_1.Prono).find();
    });
}
exports.findAllProno = findAllProno;
function findPronoById(id) {
    return database_1.connection.then(function (connection) {
        connection.getRepository(Prono_1.Prono).findOneById(id);
    });
}
exports.findPronoById = findPronoById;
function saveProno(prono) {
    database_1.connection.then(function (connection) {
        connection.getRepository(Prono_1.Prono).persist(prono);
    });
}
exports.saveProno = saveProno;
function deleteProno(prono) {
    database_1.connection.then(function (connection) {
        connection.getRepository(Prono_1.Prono).remove(prono);
    });
}
exports.deleteProno = deleteProno;
//# sourceMappingURL=PronoService.js.map