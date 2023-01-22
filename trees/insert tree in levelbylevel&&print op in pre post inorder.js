class Node{
  constructor(val){
    this.data = val
    this.left = null
    this.right =null
  }
}
class Tree{
  constructor(){
    this.root = null
  }
  insert_in_levelorder(val){
    if(this.root == null){
      this.root = new Node(val)
    }
    else{
      let new_node = new Node(val)
      let q = []
      let ql = q.push(this.root)
      while(ql!=0){
       let n = q.shift()
        if(n.left == null){
          n.left = new_node
          break
        }
        else{
          q.push(n.left)
        }
        if(n.right == null){
          n.right = new_node
          break
        }
        else{
          q.push(n.right)
        }
      }     
    }
  }
  print_op_in_preorder(root){
    if(root == null)   return
    console.log(root.data)
   this.print_op_in_preorder(root.left)
   this.print_op_in_preorder(root.right)
  }
  print_op_in_postorder(root){
    if(root == null)  return
    this.print_op_in_postorder(root.left)
    this.print_op_in_postorder(root.right)
    console.log(root.data)
  }
  print_op_in_inorder(root){
    if(root == null)   return
    this.print_op_in_inorder(root.left)
    console.log(root.data)
    this.print_op_in_inorder(root.right)
  }
}
let tree=new Tree()
let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
  tree.insert_in_levelorder(arr[i])
}
console.log(tree.root)
tree.print_op_in_preorder(tree.root)
console.log("***")
tree.print_op_in_postorder(tree.root)
console.log("***")
tree.print_op_in_inorder(tree.root)
