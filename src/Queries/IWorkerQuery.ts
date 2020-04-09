import Worker from '../Models/Worker'
export interface IWorkerQuery {
    get(): [Worker];
    add(worker: Worker);
}
