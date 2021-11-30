class Node{
    constructor(val) {
        this.val=val;
        this.right=null;
        this.left=null;
    }
}
class BST {
    constructor() {
        this.root=null;
    }
    create(val) {
        var node = new Node(val);
        if (!this.root) {
            this.root = node;
            return;
        } 
        var current=this.root;
        const addSide = side => {
            if (!current[side]) {
              current[side] = node;
              return this;
            };
            current = current[side];
        };
        while (true) {
            if (val === current.val) return this;
            if (val < current.val) addSide('left');
            else addSide('right');
        }
    }

    //centre,left,right Traversal
    preOrder() {
        let visited = [],
            current = this.root;
      
        let traverse = node => {
          visited.push(node.val);
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
        };
      
        traverse(current);
        return visited;
      }

      //left,center,right Traversal
      inOrder() {
        let visited = [],
        current = this.root;
  
    let traverse = node => {
      if (node.left) {
        console.log("left", node.val);
          traverse(node.left)
      };
      console.log("visited", node.val);
      visited.push(node.val);
      if (node.right) { 
         traverse(node.right);
      }
    };
  
    traverse(current);
    console.log(visited);

      }
  
    
}

var tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);
console.log(tree.preOrder());
console.log(tree.inOrder());