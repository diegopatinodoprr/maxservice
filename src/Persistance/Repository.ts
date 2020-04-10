import Worker from '../Models/Worker';
import Score from '../Models/Score'
import { _ } from 'lodash'
import { IRepository } from './IRepository.interface';
import { BaseRepository } from './BaseRepository'
export class Repository implements IRepository {

    private scores: [Score] = BaseRepository.scores()
    private workers: [Worker] = BaseRepository.workers()
    constructor() {}
    getScores(): [Score] {
        if (this.scores == null) {
            this.scores = [null]
        }
        return _.filter(this.scores, (o) => { return o != null; })
    }
    addScore(score: Score) {
        if (this.scores == null) {
            this.scores = [score]
        } else {
            this.scores.push(score)
        }
    }
    addWorker(worker: Worker) {
        if (this.workers == null) {
            this.workers = [worker]
        } else {
            this.workers.push(worker)
        }
    }
    getWorkers(): [Worker] {
        if (this.workers == null) {
            this.workers = [null]
        }
        return _.filter(this.workers, function (o) { return o != null; })
    }
}
