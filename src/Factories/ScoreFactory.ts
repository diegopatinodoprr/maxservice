import Score from "../Models/Score";

export class ScoreFactory{
public static buildScore(json):Score{
    return new Score(json.workerId,json.value)
}

}