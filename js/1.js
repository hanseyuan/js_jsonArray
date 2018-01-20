var d = [
            { "id": "1001123", "name": "值1", "value": "111" },
            { "id": "1001123", "name": "值1", "value": "11111" },
            { "id": "1002123", "name": "值2", "value": "25462" },
            { "id": "1002133", "name": "值2", "value": "23131" },
            { "id": "1002133", "name": "值2", "value": "2315432" },
            { "id": "1003133", "name": "值3", "value": "333333" }
        ];

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
