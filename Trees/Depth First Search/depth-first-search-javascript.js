class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function inorder(root) {
    if (root == null) {
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

function preorder(root) {
    if (root == null) {
        return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

function postorder(root) {
    if (root == null) {
        return;
    }  
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}