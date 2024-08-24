class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function search(root, target) {
    if (root == null) {
        return false;
    }

    if (target > root.val) {
        return search(root.right, target);
    } else if (target < root.val) {
        return search(root.left, target);
    } else {
        return true;
    }    
}
