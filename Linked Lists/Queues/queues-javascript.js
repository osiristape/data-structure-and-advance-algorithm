class ListNode {    
    constructor (val) {
        this.val = val;
        this.next = null;
    } 
}

class Queue {

    // Implementing this with dummy nodes would be easier!
    constructor() {
        this.left = null;
        this.right = null;
    }

    enqueue(val) {
        const newNode = new ListNode(val);
        if (this.right != null) {  
        // Queue is not empty 
            this.right.next = newNode;
            this.right = this.right.next;
        } else {       
        // Queue is empty             
            this.left = newNode;
            this.right = newNode;
        }
    }

    dequeue() {
        if (this.left == null) {
        // Queue is empty 
            return;
        }
        // Remove left node and return value
        const val = this.left.val;
        this.left = this.left.next;
        return val;    
    }

    print() {
        let cur = this.left;
        let s = "";
        while(cur != null) {
            s+= cur.val + "->";
            cur = cur.next;
        }
        console.log(s)
    }
}
