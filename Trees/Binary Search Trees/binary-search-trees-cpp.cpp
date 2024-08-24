class TreeNode {
    public:
        int val_;
        TreeNode* left = nullptr;
        TreeNode* right = nullptr;

        TreeNode(int val) {
            val_ = val;
        }
};

bool search(TreeNode* root, int target) {
    if (!root) {
        return false;
    }

    if (target > root->val_) {
        return search(root->right, target);
    } else if (target < root->val_) {
        return search(root->left, target);
    } else {
        return true;
    }
}
