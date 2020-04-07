import Worker from 'Models/Worker';
import Score from 'Models/Score';
import { IRepository } from './IRepository.interface';
export class Repository implements IRepository {

    private scores:[Score]
    private worers:[Worker]
    constructor(){}
    getscores(): [Score] {
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
    addworker(worker: Worker) {
        throw new Error("Method not implemented.");
    }
    getWorkers(): [Worker] {
        throw new Error("Method not implemented.");
    }
}
