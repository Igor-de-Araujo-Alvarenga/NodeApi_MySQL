"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOne = exports.update = exports.findAll = exports.findOne = exports.create = void 0;
const db_1 = require("../db");
const create = (pessoa, callback) => {
    const queryString = "INSERT INTO pessoa (id, nome) VALUES (?, ?)";
    db_1.db.query(queryString, [pessoa.id, pessoa.name], (err, result) => {
        if (err) {
            callback(err);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
const findOne = (orderId, callback) => {
    const queryString = `SELECT * FROM pessoa WHERE id=?`;
    db_1.db.query(queryString, orderId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const order = {
            id: orderId,
            name: row.nome
        };
        callback(null, order);
    });
};
exports.findOne = findOne;
const findAll = (callback) => {
    const queryString = `SELECT * FROM pessoa`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const pessoas = [];
        rows.forEach(row => {
            const pessoa = {
                id: row.id,
                name: row.nome
            };
            pessoas.push(pessoa);
        });
        callback(null, pessoas);
    });
};
exports.findAll = findAll;
const update = (pessoa, callback) => {
    const queryString = `UPDATE pessoa SET nome=? WHERE id=?`;
    db_1.db.query(queryString, [pessoa.name, pessoa.id,], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
const DeleteOne = (orderId, callback) => {
    const queryString = `DELETE FROM pessoa WHERE id=?`;
    db_1.db.query(queryString, [orderId], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.DeleteOne = DeleteOne;
