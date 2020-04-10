import { v4 as uuidv4 } from 'uuid'
import { Url } from 'url';
class Worker {
    public id: String;
    public name: String;
    public icon: Url

    constructor(name:String ,icon: Url ) {
        this.id = uuidv4()
        this.name = name
        this.icon = icon


    }
}
export default Worker;