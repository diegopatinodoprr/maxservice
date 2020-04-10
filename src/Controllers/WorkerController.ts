import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface";
import { WorkersService } from "../Services/WorkersService";

class WorkerController implements IControllerBase {
    public path = "/api";
    public router = express.Router();
    private workerservice: WorkersService
    constructor() {
        this.workerservice = new WorkersService()

        this.initRoutes();
    }

    public initRoutes() {

        this.router.get("/api/worker", this.getWorker);
        this.router.post("/api/worker", this.addWorker);
    }

    getWorker = (req: Request, res: Response) => {

        const workers = this.workerservice.get()

        res.send(workers );
    }
    addWorker = (req: Request, res: Response) => {
        const result = this.workerservice.add(req.body)
        res.status(200).send({
            success: true,
            message: 'successfully inserted worker',
            worker: result

        });
    }
}

export default WorkerController;
