class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function bfs(root) { 
    let queue = [];
    if (root != null) {
        queue.push(root);
    }    
    let level = 0;
    while(queue.length > 0) {
        console.log("level " + level + ": ");
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let curr = queue.shift(); 
            console.log(curr.val + " ");
            if(curr.left != null) {
                queue.push(curr.left);  
            }
            if(curr.right != null) {
                queue.push(curr.right);
            }  
        }
        level++;
        console.log();
    }
}