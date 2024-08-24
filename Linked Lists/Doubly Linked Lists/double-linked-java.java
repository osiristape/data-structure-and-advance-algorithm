/*
public class DoublyLinkedListNode {
    
    int val;
    DoublyLinkedListNode next;
    DoublyLinkedListNode prev;

    public DoublyLinkedListNode(int val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
*/

// Implementation for Doubly Linked List
public class DoublyLinkedList {
    DoublyLinkedListNode head;
    DoublyLinkedListNode tail;

    public DoublyLinkedList() {
        head = new DoublyLinkedListNode(-1);
        tail = new DoublyLinkedListNode(-1);
        head.next = tail;
        tail.prev = head;
    }

    public void insertFront(int val) {
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(val);
        newNode.prev = head;
        newNode.next = head.next;
        
        head.next.prev = newNode;
        head.next = newNode;
    }

    public void insertEnd(int val) {
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(val);
        newNode.next = tail;
        newNode.prev = tail.prev;
        
        tail.prev.next = newNode;
        tail.prev = newNode;
    }

    public void removeFront() {
        head.next.next.prev = head;
        head.next = head.next.next;
    }   

    public void removeEnd() {
        tail.prev.prev.next = tail;
        tail.prev = tail.prev.prev;
    }   
    
    public void print() {
        DoublyLinkedListNode curr = head.next;
        while (curr != tail) {
            System.out.print(curr.val + " -> ");
            curr = curr.next;
        }           
        System.out.println();
    }
}