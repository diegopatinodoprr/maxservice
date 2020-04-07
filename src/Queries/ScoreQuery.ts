import { IScoreQuery } from './ScoreQuery.interface';
import Score from '../Models/Score';
import { IRepository } from '../Persistance/IRepository.interface';
export class ScoreQuery implements IScoreQuery {
    private repository:IRepository
    private scores: [Score];
    constructor(repository) {
        this.repository = repository
        
    }
    public get(): [Score] {
        return this.repository.getscores()
    }
    public add(score: Score){
        this.repository.addScore(score) 
    }

}
