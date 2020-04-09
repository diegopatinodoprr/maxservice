import Score from "Models/Score";
import Worker from "Models/Worker";

export interface IRepository {
    getScores(): [Score]
    addScore(score: Score)
    addWorker(worker: Worker)
    getWorkers(): [Worker]
}
