class StackDataStructure {

    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 5
    }

    isEmpty() {
       
        return this.stackControl.length < 1
        
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE
    }

    push(n) {
        
        this.stackControl.push(n)
        
        return this.stackControl
    }

    pop() {

    }

}

const stackDataStructure = new StackDataStructure