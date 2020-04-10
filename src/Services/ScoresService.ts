import { IScoreQuery } from "../Queries/IScoreQuery";
import { ScoreQuery } from "../Queries/ScoreQuery";
import { Repository } from "../Persistance/Repository";
import Score from "Models/Score";

export class ScoresService  {
    private scoreQuery:IScoreQuery   
    constructor() {
        this.scoreQuery = new ScoreQuery(new Repository()) 
        
    }
    public get(): [Score] {
        return this.scoreQuery.get()
    }
    public add(score: Score){
        this.scoreQuery.add(score) 
    }

}
