import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface"
class ScoreController implements IControllerBase {
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/", this.index);
    }

    index = (req: Request, res: Response) => {

        const scores = [
            {
                id: 1,
                name: "mLemort",
                value: -1
            },
            {
                id: 1,
                name: "mLemort",
                value: -1
            },
            {
                id: 1,
                name: "mtournier",
                value: -1
            }
        ]

        res.send({ scores });
    }
}

export default ScoreController;
