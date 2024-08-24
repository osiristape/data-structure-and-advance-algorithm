#include <iostream>

using std::cout;
using std::endl;

class TreeNode {
    public:
        int val_;
        TreeNode* left = nullptr;
        TreeNode* right = nullptr;

        TreeNode(int val) {
            val_ = val;
        }
};

void inorder(TreeNode* root) {
    if (!root) {
        return;
    }
    inorder(root->left);
    cout << root->val_ << endl;
    inorder(root->right);
}

void preorder(TreeNode* root) {
    if (!root) {
        return;
    }
    cout << root->val_ << endl;
    preorder(root->left);
    preorder(root->right);
}

void postorder(TreeNode* root) {
    if (!root) {
        return;
    }
    postorder(root->left);
    postorder(root->right);
    cout << root->val_ << endl;
}