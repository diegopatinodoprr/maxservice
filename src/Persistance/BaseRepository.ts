import Worker from '../Models/Worker';
import Score from '../Models/Score';
export class BaseRepository {
    private static internalScores: [Score];
    private static internalWorkers: [Worker];
    public static scores(): [Score] {
        if (this.internalScores == null) {
            this.internalScores = [null];
        }
        return this.internalScores;
    }

    public static workers(): [Worker] {
        if (this.internalWorkers == null) {
            this.internalWorkers = [null];
        }
        return this.internalWorkers;
    }
}
