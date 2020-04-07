import Score from "Models/Score";
import Worker from "Models/Worker";

export interface IRepository {
    getscores(): [Score]
    addScore(score: Score)
    addworker(worker: Worker)
    getWorkers(): [Worker]
}
