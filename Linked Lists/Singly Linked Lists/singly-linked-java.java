/*
public class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}
*/

// Implementation for Singly Linked List
public class SinglyLinkedList {
    ListNode head;
    ListNode tail;

    public SinglyLinkedList() {
        head = new ListNode(-1);
        tail = head;
    }

    public void insertEnd(int val) {
        tail.next = new ListNode(val);
        tail = tail.next; 
    }

    public void remove(int index) {
        int i = 0;
        ListNode curr = head;
        while (i < index && curr != null) {
            i++;
            curr = curr.next;
        }
        
        // Remove the node ahead of curr
        if (curr != null) {
            curr.next = curr.next.next;
        }
    }

    public void print() {
        ListNode curr = head.next;
        while (curr != null) {
            System.out.print(curr.val + " -> ");
            curr = curr.next;
        }

        System.out.println();
    }
    
}
