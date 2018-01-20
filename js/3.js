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