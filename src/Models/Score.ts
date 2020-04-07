import { v4 as uuidv4 } from 'uuid'
class Score {
    public id 
    public name
    public value

    constructor( name, value ) {
        this.id = uuidv4()
        this.name = name
        this.value = value
        
    }
}
export default Score;