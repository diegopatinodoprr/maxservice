import { v4 as uuidv4 } from 'uuid'
class Score {
    public id
    public workerId
    public value
    public creationDate: Number

    constructor(workerId, value) {
        this.id = uuidv4()
        this.creationDate = Date.now()
        this.workerId = workerId
        this.value = value
    }
}
export default Score;