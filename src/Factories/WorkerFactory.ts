import Worker from '../Models/Worker'
import { Pictures } from '../Helpers/Pictures'
import {_} from 'lodash'
export class WorkerFactory {
    public static buildWorker(json): Worker {
        json.icon = Pictures["p"+json.icon]
        const result: Worker = new Worker()
        _.map(json, (value:any, key:string)=>{
             result[key] = value
                }
            );
        return result
    }

}