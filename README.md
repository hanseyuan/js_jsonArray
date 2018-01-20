## 1.如何拆分jsonarray
将数组对象

    var d = [
    { "id": "1001123", "name": "值1", "value": "111" },
    { "id": "1001123", "name": "值1", "value": "11111" },
    { "id": "1002123", "name": "值2", "value": "25462" },
    { "id": "1002133", "name": "值2", "value": "23131" },
    { "id": "1002133", "name": "值2", "value": "2315432" },
    { "id": "1003133", "name": "值3", "value": "333333" }
    ]

要获取的是(通过id的前四位数)
    
    [
        {"id":"1001123","name":"值1","value":"111"},
        {"id":"1001133","name":"值1","value":"11111"}
    ]
    [    {"id":"1002123","name":"值2","value":"25462"},
        {"id":"1002133","name":"值2","value":"23131"},
    ]
    [
        {"id":"1002133","name":"值2","value":"2315432"},
        {"id":"1003133","name":"值3","value":"333333"}
    ]
    

程序实现
    
    var kv={};
    //遍历对象数组d
    var key=d[0].id.substring(0,4);
    console.log(key);
    for(var i=0;i<d.length;i++){
        //查找关键词 id的前四位
        var key=d[i].id.substring(0,4);
        //如果对象kv中存在key
        console.log(kv[key]);
        if(kv[key]){
            // 将d[i]添加到kv[key]中
            kv[key].push(d[i]);
        }else{
            // 将d[i]等于kv[key]
            kv[key]=[d[i]];
        }
    }
    console.log(kv);
    //清空d
    d.length=0;
    //将kv(对象数组)赋值给d
    for (key in kv){
        d.push(kv[key]);
    }
    console.log(d);
    


### 2.json数组根据id和父id排序   

json数组

      [
        { id:1, pId:1, name:"父节点1", open:true},
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
####  根据id和父id排序   
    
    [
        {"id":1,"pId":0,"name":"父节点1","open":true},
        {"id":11,"pId":1,"name":"父节点11"},
        {"id":111,"pId":11,"name":"叶子节点111"},
        {"id":112,"pId":11,"name":"叶子节点112"},
        {"id":12,"pId":1,"name":"父节点12"},{"id":121,"pId":12,"name":"叶子节点121"},
        {"id":122,"pId":12,"name":"叶子节点122"},
        {"id":123,"pId":12,"name":"叶子节点123"},
        {"id":124,"pId":12,"name":"叶子节点124"},
        {"id":13,"pId":1,"name":"父节点13","isParent":true},
        {"id":2,"pId":0,"name":"父节点2"},
        {"id":21,"pId":2,"name":"父节点21","open":true},
        {"id":211,"pId":21,"name":"叶子节点211"},
        {"id":212,"pId":21,"name":"叶子节点212"},
        {"id":213,"pId":21,"name":"叶子节点213"},
        {"id":214,"pId":21,"name":"叶子节点214"},
        {"id":22,"pId":2,"name":"父节点22"},
        {"id":221,"pId":22,"name":"叶子节点221"},
        {"id":222,"pId":22,"name":"叶子节点222"},
        {"id":223,"pId":22,"name":"叶子节点223"},
        {"id":224,"pId":22,"name":"叶子节点224"},
        {"id":23,"pId":2,"name":"父节点23"},
        {"id":231,"pId":23,"name":"叶子节点231"},
        {"id":232,"pId":23,"name":"叶子节点232"},
        {"id":233,"pId":23,"name":"叶子节点233"},
        {"id":234,"pId":23,"name":"叶子节点234"},
        {"id":3,"pId":0,"name":"父节点3","isParent":true}
    ]
    
##### 先按id排序

    arr.sort(function (a,b) {
        return (a.id+'') > (b.id+'')? 1:-1;  //+"" 是为了id按code编码
    })
    
    console.log(arr);
    
    /*********************************/
    [
        {"id":1,"pId":0,"name":"父节点1","open":true},
        {"id":11,"pId":1,"name":"父节点11"},
        {"id":111,"pId":11,"name":"叶子节点111"},
        {"id":112,"pId":11,"name":"叶子节点112"},
        {"id":12,"pId":1,"name":"父节点12"},
        {"id":121,"pId":12,"name":"叶子节点121"},
        {"id":122,"pId":12,"name":"叶子节点122"},
        {"id":123,"pId":12,"name":"叶子节点123"},
        {"id":124,"pId":12,"name":"叶子节点124"},
        {"id":13,"pId":1,"name":"父节点13","isParent":true},
        {"id":2,"pId":0,"name":"父节点2"},
        {"id":21,"pId":2,"name":"父节点21","open":true},
        {"id":211,"pId":21,"name":"叶子节点211"},
        {"id":212,"pId":21,"name":"叶子节点212"},
        {"id":213,"pId":21,"name":"叶子节点213"},
        {"id":214,"pId":21,"name":"叶子节点214"},
        {"id":22,"pId":2,"name":"父节点22"},
        {"id":221,"pId":22,"name":"叶子节点221"},
        {"id":222,"pId":22,"name":"叶子节点222"},
        {"id":223,"pId":22,"name":"叶子节点223"},
        {"id":224,"pId":22,"name":"叶子节点224"},
        {"id":23,"pId":2,"name":"父节点23"},
        {"id":231,"pId":23,"name":"叶子节点231"},
        {"id":232,"pId":23,"name":"叶子节点232"},
        {"id":233,"pId":23,"name":"叶子节点233"}
        ,{"id":234,"pId":23,"name":"叶子节点234"},
        {"id":3,"pId":0,"name":"父节点3","isParent":true}
    ]
    /*********************************/
    
#####  获取所有根节点(pId=0)  

    for(var i=0;i<arr.length;i++){
        if(arr[i].pId==0){
            rootNodes.push(arr[i]);
        }
    }
    console.log(JSON.stringify(rootNodes));
    
    
    [
        {"id":1,"pId":0,"name":"父节点1","open":true},
        {"id":2,"pId":0,"name":"父节点2"},
        {"id":3,"pId":0,"name":"父节点3","isParent":true}
    ]
    
#####     遍历根节点,找到所有子节点

    for (var i = 0; i < rootNodes.length; i++) {
        result.push(rootNodes[i]);
        GetChildNodes(rootNodes[i]);
    }
     
    
    
##### 递归

    function GetChildNodes(rootNode) {
        for(var i=0;i<arr.length;i++){
            if(arr[i].pId==rootNode.id){
                result.push(arr[i]);
                GetChildNodes(arr[i]);
            }
        }
    }
    
    
    console.log(JSON.stringify(result));



### 3.JS根据传入的id删除掉json数组中数据?

有一组JSON数据：

    var tempJSON = [
                    {id:1,Name:"peter"},
                    {id:2,Name:"James"},
                    {id:3,Name:"Other"}
                   ];

当传入ids为[1,2]的值是，JS如何删除掉tempJSON数组中id为1,2的数据，最后结果为：

    tempJSON=[{id:3,Name:"Other"}]
    
    
javascript代码
    
    var tempJSON = [
                    {id:1,Name:"peter"},
                    {id:2,Name:"James"},
                    {id:3,Name:"Other"}
                ];
    var newArr = new Array();
    for( var i=0;i<tempJSON.length;i++){
        var j=tempJSON[i];
        if(j.id!=1&&j.id!=2){
            newArr.push(j);
        }
    }
    console.log(newArr);
    
    
    
    