class QueueDataStructure {

    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 5
    }

    isEmpty() {
        return true
    }

    canEnqueue() {
        if (this.queueControl.length == 0) {
            return false
        } else {
            return true
        }
    }

    enqueue(n) {
        this.queueControl.unshift(n)
        return this.queueControl
    }

    dequeue() {
        
        
    }

}

const queueDataStructure = new QueueDataStructure