#include <iostream>

using std::cout;
using std::endl;

class ListNode {
    public:
        int val_;
        ListNode* next = nullptr;

        ListNode(int val) {
            val_ = val;
        }
};

class Queue {
public:
    // Implementing this with dummy nodes would be easier!
    ListNode* left = nullptr;
    ListNode* right = nullptr;

    Queue() {}

    void enqueue(int val) {
        ListNode* newNode = new ListNode(val);

        // Queue is non-empty
        if (right != nullptr) {
            right->next = newNode;
            right = right->next;
        } 
        // Queue 
        else {
            left = right = newNode;
        }
    }

    int dequeue() {
        // Queue is empty
        if (left == nullptr) {
            return -1; // Better to throw an exception
        }
        // Remove left node and return value
        int val = left->val_;
        left = left->next;
        return val;
    }

    void print() {
        ListNode* curr = left;
        while (curr != nullptr) {
            cout << curr->val_ << " -> ";
            curr = curr->next;
        }
        cout << endl;
    }
};