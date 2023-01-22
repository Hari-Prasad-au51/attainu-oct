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
       q.push(this.root)
      while(q.length != 0){
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
  print_op_in_levelorder(root){
    let q = []
     q.push(root)
    while(q.length != 0){
      let n = q.shift()
      console.log(n.data)
      if(n.left != null)  q.push(n.left)
      if(n.right != null)  q.push(n.right)
    }
  }
find_leaves_intree(root){
if(root==null)   return root
if(root.left==null&&root.right==null)  console.log(root.data)
this.find_leaves_intree(root.left)
this.find_leaves_intree(root.right)
}
  find_the_height_of_tree(root){
  if(root == null)  return 0
  if(root.left == null && root.right == null)  return 1
  let lh = this.find_the_height_of_tree(root.left)
  let rh = this.find_the_height_of_tree(root.right)
  return Math.max(lh,rh)+1  
}  
  find_the_noof_node_in_tree(root){
    if(root == null)   return 0
    if(root.left == null && root.right == null)  return 1
    let nofl=this.find_the_noof_node_in_tree(root.left)
    let nofr=this.find_the_noof_node_in_tree(root.right)
    return nofl+nofr+1
  }
}


let tree=new Tree()
let arr=[4,2,6,1,3,5,7]
console.log("insert in lev by lev tree")
for(let i=0;i<arr.length;i++){
  tree.insert_in_levelorder(arr[i])
}


console.log(tree.root)
console.log("preorder op")
tree.print_op_in_preorder(tree.root)
console.log("postprder op")
tree.print_op_in_postorder(tree.root)
console.log("inorder op")
tree.print_op_in_inorder(tree.root)
console.log("level order")
tree.print_op_in_levelorder(tree.root)
console.log("leaves")
tree.find_leaves_intree(tree.root)
 let h=tree.find_the_height_of_tree(tree.root)
console.log(h,"height")
let n=tree.find_the_noof_node_in_tree(tree.root)
console.log(n,"no_of_nodes")