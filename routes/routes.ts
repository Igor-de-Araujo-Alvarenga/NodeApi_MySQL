import express, {Request, Response} from "express";
import * as PessoaModel from "../models/pessoaModel";
import {Pessoa} from "../types/pessoa";
const pessoaRouter = express.Router();

pessoaRouter.post("/", async (req: Request, res: Response) => {
    const newPessoa: Pessoa = req.body;
    PessoaModel.create(newPessoa, (err: Error, orderId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"orderId": orderId});
    });
  });

  pessoaRouter.get("/:id", async (req: Request, res: Response) => {
    const orderId: number = Number (req.params.id);
    PessoaModel.findOne(orderId, (err: Error, order: Pessoa) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
      res.status(200).json(order);
    })
  });

  pessoaRouter.get("/", async (req: Request, res: Response) => {
    PessoaModel.findAll((err: Error, pessoas: Pessoa[]) => {
      if (err) {
        return res.status(500).json({"errorMessage": err.message});
      }
  
      res.status(200).json({"data": pessoas});
    });
  });

  pessoaRouter.put("/", async (req: Request, res: Response) => {
    const pessoa: Pessoa = req.body;
    PessoaModel.update(pessoa, (err: Error) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).send();
    })
  });
  
  pessoaRouter.delete("/:id", async (req: Request, res: Response) => {
    const orderId: number = Number (req.params.id);
    PessoaModel.DeleteOne(orderId, (err: Error, order: Pessoa) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
      res.status(200).json(order);
    })
  });

  export { pessoaRouter};