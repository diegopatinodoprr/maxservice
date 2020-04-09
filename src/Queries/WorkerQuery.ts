import { IRepository } from '../Persistance/IRepository.interface';
import { IWorkerQuery } from './IWorkerQuery';
import Worker from 'Models/Worker';
export class WorkerQuery implements IWorkerQuery {
    private repository: IRepository;
   
    constructor(repository) {
        this.repository = repository;
    }
    public get(): [Worker] {
        return this.repository.getWorkers();
    }
    public add(worker: Worker) {
        this.repository.addWorker(worker);
    }
}
