import Score from '../Models/Score';
export interface IScoreQuery {
    get(): [Score]
    add(score: Score)

}


