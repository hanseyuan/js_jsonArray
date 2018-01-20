var arr =[
    { id:1, pId:0, name:"父节点1", open:true},
    { id:11, pId:1, name:"父节点11"},
    { id:21, pId:2, name:"父节点21", open:true},
    { id:111, pId:11, name:"叶子节点111"},
    { id:112, pId:11, name:"叶子节点112"},
    { id:223, pId:22, name:"叶子节点223"},
    { id:12, pId:1, name:"父节点12"},
    { id:121, pId:12, name:"叶子节点121"},
    { id:122, pId:12, name:"叶子节点122"},
    { id:124, pId:12, name:"叶子节点124"},
    { id:13, pId:1, name:"父节点13", isParent:true},
    { id:2, pId:0, name:"父节点2"},
    { id:211, pId:21, name:"叶子节点211"},
    { id:212, pId:21, name:"叶子节点212"},
    { id:234, pId:23, name:"叶子节点234"},
    { id:123, pId:12, name:"叶子节点123"},
    { id:213, pId:21, name:"叶子节点213"},
    { id:214, pId:21, name:"叶子节点214"},
    { id:22, pId:2, name:"父节点22"},
    { id:221, pId:22, name:"叶子节点221"},
    { id:222, pId:22, name:"叶子节点222"},
    { id:224, pId:22, name:"叶子节点224"},
    { id:23, pId:2, name:"父节点23"},
    { id:231, pId:23, name:"叶子节点231"},
    { id:232, pId:23, name:"叶子节点232"},
    { id:233, pId:23, name:"叶子节点233"},
    { id:3, pId:0, name:"父节点3", isParent:true}
];

var rootNodes = []; //根节点
var result = []; //结果集合

//先按id排序
arr.sort(function (a,b) {
    return (a.id+'') > (b.id+'')? 1:-1;  //+"" 是为了id按code编码
})

//获取所有根节点(pId=0)
for(var i=0;i<arr.length;i++){
    if(arr[i].pId==0){
        rootNodes.push(arr[i]);
    }
}

//遍历根节点,找到所有子节点
for(var i=0;i<rootNodes.length;i++){
    result.push(rootNodes[i]);
    GetChildNodes(rootNodes[i]);
}

//递归
function GetChildNodes(rootNode) {
    for(var i=0;i<arr.length;i++){
        if(arr[i].pId==rootNode.id){
            result.push(arr[i]);
            GetChildNodes(arr[i]);
        }
    }
}

console.log(JSON.stringify(result));
//console.log(JSON.stringify(rootNodes));
//console.log(JSON.stringify(arr));