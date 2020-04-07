import { v4 as uuidv4 } from 'uuid'
class Worker {
    public id: String;
    public name: String;


    constructor(name) {
        this.id = uuidv4()
        this.name = name
    }
}
export default Worker;