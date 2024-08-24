// Implementing a stack is trivial using a dynamic array
// (which we implemented earlier).
class Stack {
    constructor() {
        this.stack = new Array();                                                                   
    }

    push(n) {
        this.stack.push(n);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }
}
