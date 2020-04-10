import { IRepository } from '../Persistance/IRepository.interface';
import { IWorkerQuery } from './IWorkerQuery';
import { _ } from 'lodash'
import Worker from 'Models/Worker';
export class WorkerQuery implements IWorkerQuery {
    private repository: IRepository;
    constructor(repository) {
        this.repository = repository;
    }
    getbyId(id: string): any {
        const result  = _.filter(this.repository.getWorkers(), (o)=>{return o.id === id})
        return result
    }
    public get(): [Worker] {
        return this.repository.getWorkers();
    }
    public add(worker: Worker) {
        this.repository.addWorker(worker);
    }
}
