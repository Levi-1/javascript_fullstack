 var tree = {
value: 1,
left: {
    value: 2,
    left: {
    value: 4
    }
},
right: {
    value: 3,
    left: {
    value: 5,
    left: {
        value: 7
    },
    right: {
        value: 8
    }
    },
    right: {
    value: 6
    }
}
}
 // 先序遍历 + 递归
var preOrder = function (node) {
    if(node){
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

// 深度优先便利
var preOrderUnRecur = function(node) {
    if (!node){
        throw new Error('Empty Tree')
    }
    var stack = []
    stack.push(node)
    while (stack.length !== 0) {
        node = stack.pop()
        console.log(node.value)
        if(node.right)
            stack.push(node.right)
        if(node.left)
            stack.push(node.left)
    }
}
preOrderUnRecur(tree)


console.log('...............................................')
//广度优先
var BreadthFirstUnrecur = function(Btree) {
    if (!Btree){
        throw new Error('Empty Tree')
    }
    let stack = []
    stack.push(Btree)
    while (stack.length) {
        Btree = stack.shift()
        console.log(Btree.value)
        if (Btree.left)
            stack.push(Btree.left)
        if (Btree.right)
            stack.push(Btree.right)
    }
}

BreadthFirstUnrecur(tree)