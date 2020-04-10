import { IScoreQuery } from "../Queries/IScoreQuery";
import { ScoreQuery } from "../Queries/ScoreQuery";
import { Repository } from "../Persistance/Repository";
import Score from "../Models/Score";
import { WorkerQuery } from "../Queries/WorkerQuery";
import { ScoreFactory } from "../Factories/ScoreFactory";

export class ScoresService {
    private scoreQuery: IScoreQuery
    private workerQuery: WorkerQuery
    constructor() {
        const repository = new Repository()
        this.scoreQuery = new ScoreQuery(repository)
        this.workerQuery = new WorkerQuery(repository)
    }
    public get(): [Score] {
        return this.scoreQuery.get()
    }
    public add(json): any {

        const score = ScoreFactory.buildScore(json)
        if (this.workerQuery.getbyId(score.workerId).length == 0) {
            throw new Error("worker not exist");
        }
        this.scoreQuery.add(score)
        return score
    }
}
