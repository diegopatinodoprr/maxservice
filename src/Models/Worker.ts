import { v4 as uuidv4 } from 'uuid'
import { _ } from 'lodash'
class Worker {
    public id: string;
    public name: string;
    public icon: string

    constructor(name? :string  ,icon?: string ) {
        this.id = uuidv4()
        this.name = name
        this.icon = icon

    }
}
export default Worker