
import {Pessoa} from "../types/pessoa";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (pessoa: Pessoa , callback: Function) => {
    const queryString = "INSERT INTO pessoa (id, nome) VALUES (?, ?)"
    db.query(
      queryString,
      [pessoa.id, pessoa.name],
      (err, result) => {
        if (err) {callback(err)};
  
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };

  export const findOne = (orderId: number, callback: Function) => {

    const queryString = `SELECT * FROM pessoa WHERE id=?`;
      
    db.query(queryString, orderId, (err, result) => {
      if (err) {callback(err)}
      
      const row = (<RowDataPacket> result)[0];
      const order: Pessoa = {
        id: orderId,
        name : row.nome
      }
      callback(null, order);
      })
  };


  export const findAll = (callback: Function) => {
    const queryString = `SELECT * FROM pessoa`
  
    db.query(queryString, (err, result) => {
      if (err) {callback(err)}
  
      const rows = <RowDataPacket[]> result;
      const pessoas: Array<Pessoa> = [];
  
      rows.forEach(row => {
        const pessoa : Pessoa = {
            id: row.id,
            name: row.nome 
        }
        pessoas.push(pessoa);
      });
      callback(null, pessoas);
    });
  }

  export const update = (pessoa: Pessoa, callback: Function) => {
    const queryString = `UPDATE pessoa SET nome=? WHERE id=?`;
  
    db.query(
      queryString,
      [pessoa.name, pessoa.id,],
      (err, result) => {
        if (err) {callback(err)}
        callback(null);
      }
    );
  }

  export const DeleteOne = (orderId: number, callback: Function) => {

    const queryString = `DELETE FROM pessoa WHERE id=?`;
    db.query(
      queryString,
      [orderId],
      (err, result) => {
        if (err) {callback(err)}
        callback(null);
      }
    );
  };

  
  