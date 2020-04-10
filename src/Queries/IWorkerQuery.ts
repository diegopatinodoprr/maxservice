import Worker from '../Models/Worker'
export interface IWorkerQuery {
    get(): [Worker];
    getbyId(id: string): Worker
    add(worker: Worker);
}
