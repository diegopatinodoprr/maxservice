import Worker from 'Models/Worker';
import Score from 'Models/Score';
import { IRepository } from './IRepository.interface';
export class Repository implements IRepository {

    private scores:[Score]
    private workers:[Worker]
    constructor(){}
    getScores(): [Score] {
        if (this.scores == null)
        {
            this.scores = [null]
        }
        return this.scores
    }
    addScore(score: Score) {
        if (this.scores == null)
        {
            this.scores = [score]
        } else {
            this.scores.push(score)
        }
        

    }
    addWorker(worker: Worker) {
        if (this.workers == null)
        {
            this.workers = [worker]
        } else {
            this.workers.push(worker)
        }
    }
    getWorkers(): [Worker] {
        if (this.workers == null)
        {
            this.workers = [null]
        }
        return this.workers
    }
}
