import { Repository } from "../Persistance/Repository";
import { IWorkerQuery } from "../Queries/IWorkerQuery";
import { WorkerQuery } from "../Queries/WorkerQuery";
import Worker from "Models/Worker";
export class WorkersService {
    private workerQuery: IWorkerQuery;
    constructor() {
        this.workerQuery = new WorkerQuery(new Repository());
    }
    public get(): [Worker] {
        return this.workerQuery.get();
    }
    public add(worker: Worker) {
        this.workerQuery.add(worker);
    }
}
