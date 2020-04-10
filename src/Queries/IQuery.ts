import { IScoreQuery } from './IScoreQuery';
import Score from '../Models/Score';
import { IRepository } from '../Persistance/IRepository.interface';
export class ScoreQuery implements IScoreQuery {
    private repository:IRepository
    private scores: [Score];
    constructor(repository) {
        this.repository = repository
        
    }
    public get(): [Score] {
        return this.repository.getScores()
    }
    public add(score: Score){
        console.log(score)
        this.repository.addScore(score) 
    }

}
