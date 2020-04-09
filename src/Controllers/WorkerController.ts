import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface"

import Worker from "../Models/Worker"

import { json } from "body-parser";
import { IWorkerQuery } from "Queries/IWorkerQuery";
class WorkerController implements IControllerBase {
    public path = "/api";
    public router = express.Router();
    private workerQuery: IWorkerQuery
    constructor(workerQuery) {
        this.workerQuery = workerQuery

        this.initRoutes();
    }

    public initRoutes() {

        this.router.get("/api/worker", this.getWorker);
        this.router.post("/api/worker", this.addWorker);
    }

    getWorker = (req: Request, res: Response) => {

        const worker = this.workerQuery.get()

        res.send({ worker });
    }
    addWorker = (req: Request, res: Response) => {

        let worker = new Worker(req.body.name)
        this.workerQuery.add(worker)
        res.status(200).send({
            success: true,
            message: 'successfully inserted worker',
            worker: worker

        });
    }
}

export default WorkerController;
