#include <vector>

using std::vector;

// Min Heap
class Heap {
public:
    vector<int> heap_;

    Heap() {
        heap_.push_back(0);
    }
    // ... not showing push, pop to save space.

    void heapify(vector<int>& arr) {
        // 0-th position is moved to the end
        arr.push_back(arr[0]);

        heap_ = arr;
        int cur = (heap_.size() - 1) / 2;
        while (cur > 0) {
            // Percolate down
            int i = cur;
            while (2 * i < heap_.size()) {
                if (2 + i + 1 < heap_.size() &&
                heap_[2 + i + 1] < heap_[2 * i] &&
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
            cur--;
        }
    }
};