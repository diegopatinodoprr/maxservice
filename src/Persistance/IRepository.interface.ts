import Score from "Models/Score";
import Worker from "Models/worker";

export interface IRepository {
    getscores(): [Score]
    addScore(score: Score)
    addworker(worker: Worker)
    getWorkers(): [Worker]
}
