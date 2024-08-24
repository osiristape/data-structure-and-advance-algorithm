#include <vector>

using std::vector;

// Min Heap
class Heap {
public:
    vector<int> heap_;

    Heap() {
        heap_.push_back(0);
    }

    void push(int val) {
        heap_.push_back(val);
        int i = heap_.size() - 1;

        // Percolate up
        while (i > 1 && heap_[i] < heap_[i / 2]) {
            int tmp = heap_[i];
            heap_[i] = heap_[i / 2];
            heap_[i / 2] = tmp;
            i = i / 2;
        }
    }

    int pop() {
        if (heap_.size() == 1) {
            // Normally we would throw an exception if heap is empty.
            return -1;
        }
        if (heap_.size() == 2) {
            int res = heap_[heap_.size() - 1];
            heap_.pop_back();
            return res;
        }

        int res = heap_[1];
        // Move last value to root
        heap_[1] = heap_[heap_.size() - 1];
        heap_.pop_back();
        int i = 1;
        // Percolate down
        while (2 * i < heap_.size()) {
            if (2 * i + 1 < heap_.size() && 
            heap_[2 * i + 1] < heap_[2 * i] &&
            heap_[i] > heap_[2 * i + 1]) {
                // Swap right child
                int tmp = heap_[i];
                heap_[i] = heap_[2 * i + 1];
                heap_[2 * i + 1] = tmp;
                i = 2 * i + 1;
            } else if (heap_[i] > heap_[2 * i]) {
                // Swap left child
                int tmp = heap_[i];
                heap_[i] = heap_[2 * i];
                heap_[2 * i] = tmp;
                i = 2 * i;
            } else {
                break;
            }
        }
        return res;
    }

    int top() {
        if (heap_.size() > 1) {
            return heap_[1];
        }
        // Normally we would throw an exception if heap is empty.
        return -1;
    }
};