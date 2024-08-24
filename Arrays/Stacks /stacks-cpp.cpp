#include <vector>

using std::vector;

// Implementing a stack is trivial using a dynamic array
// (which we implemented earlier).
class Stack {
public:
    vector<int> stack_;

    Stack() {};

    void push(int n) {
        stack_.push_back(n);
    }

    int pop() {
        int res = stack_[stack_.size() - 1];
        stack_.pop_back();
        return res;
    }
};
