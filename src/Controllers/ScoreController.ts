import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface";
import Score from "../Models/Score";
import { ScoresService } from "../Services/ScoresService";
class ScoreController implements IControllerBase {
    public path = "/api";
    public router = express.Router();
    private scoreServie: ScoresService
    constructor() {
        this.scoreServie = new ScoresService()

        this.initRoutes();
    }

    public initRoutes() {

        this.router.get("/api/score", this.getScores);
        this.router.post("/api/score", this.addScore);
    }

    getScores = (req: Request, res: Response) => {

        const scores = this.scoreServie.get()

        res.send({ scores });
    }
    addScore = (req: Request, res: Response) => {

        let score = Object.setPrototypeOf(req.body, Score.prototype)
        for (var k in req.body){
        
        console.log(k+ " : "+ req.body[k])
        }
        this.scoreServie.add(score)
        res.status(200).send({
            success: true,
            message: 'successfully inserted score'
        });
    }
}

export default ScoreController;
