import { v4 as uuidv4} from 'uuid'

class Item{

    constructor(text){
        this.text = text
        this.id = uuidv4()
        this.done = false
    }
}

export default Item;