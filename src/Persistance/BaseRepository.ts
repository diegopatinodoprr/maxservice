import Worker from '../Models/Worker';
import Score from '../Models/Score';
import { Pictures } from '../Helpers/Pictures';
export class BaseRepository {
    private static internalScores: [Score] = [null];
    private static internalWorkers: [Worker]= [null];
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

    public static seedWokers(){
        const w1 = new Worker("MLemort",Pictures.p1)
        w1.id = "665ea8f4-30f7-4f7d-8fe5-b12d3d8febc1"
        const w2 = new Worker("MTurnier",Pictures.p2)
        w1.id = "78ba82e9-3b86-48a6-b603-beb9f3b3be6a"
        this.internalWorkers.push(w1,w2)
    }
}
