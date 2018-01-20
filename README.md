
#### 4.ajax获取到json数据后，如何筛选json满足特定值的对象？？

    [
    {
        "province":"广东",
        "item":[
            {
                "ID":"1",
                "province_id":"7",
                "title":"广东小吃 好吃真好吃",
                "imgUrl":"http://xxxx/images/item/7_001.jpg",
                "link":"https://xxxxxxxxx"
            },
            {
                "ID":"2",
                "province_id":"7",
                "title":"广东炒饭 香喷喷爱上",
                "imgUrl":"http://xxxx/images/item/7_001.jpg",
                "link":"https://xxxxxxxxx"
            }
        ]
    },
    {
        "province":"江西",
        "item":[
            {
                "ID":"1",
                "province_id":"8",
                "title":"江西小吃 好吃不上火",
                "imgUrl":"http://xxxx/images/item/7_001.jpg",
                "link":"https://xxxxxxxxx"
            },
            {
                "ID":"2",
                "province_id":"8",
                "title":"江西炒饭 香喷喷",
                "imgUrl":"http://xxxx/images/item/7_001.jpg",
                "link":"https://xxxxxxxxx"
            }
        ]
    },
    {
        "province":"广西",
        "item":[
            {
                "ID":"1",
                "province_id":"9",
                "title":"优质酱卤牛肉",
                "imgUrl":"http://xxxx/images/item/7_001.jpg",
                "link":"https://xxxxxxxxx"
            },
            {
                "ID":"2",
                "province_id":"9",
                "title":"农家自制豆制品豆干豆腐",
                "imgUrl":"http://xxxx/images/item/7_001.jpg",
                "link":"https://xxxxxxxxx"
            }
        ]
    }
]


如上面是ajax获取到的json数据，我想要找到title="炒饭"(模糊搜索)所在的对象(符合条件的对象可能不止一个，只要符合都找出来)，结果为：

    {
    "ID":"2",
    "province_id":"7",
    "title":"广东炒饭 香喷喷爱上",
    "imgUrl":"http://xxxx/images/item/7_001.jpg",
    "link":"https://xxxxxxxxx"
    },
    {
        "ID":"2",
        "province_id":"8",
        "title":"江西炒饭 香喷喷",
        "imgUrl":"http://xxxx/images/item/7_001.jpg",
        "link":"https://xxxxxxxxx"
    }
    

    var oJson = [{
    "province": "广东",
    "item": [{
        "ID": "1",
        "province_id": "7",
        "title": "广东小吃 好吃真好吃",
        "imgUrl": "http://xxxx/images/item/7_001.jpg",
        "link": "https://xxxxxxxxx"
    }, {
        "ID": "2",
        "province_id": "7",
        "title": "广东炒饭 香喷喷爱上",
        "imgUrl": "http://xxxx/images/item/7_001.jpg",
        "link": "https://xxxxxxxxx"
    }]
    }, {
        "province": "江西",
        "item": [{
            "ID": "1",
            "province_id": "8",
            "title": "江西小吃 好吃不上火",
            "imgUrl": "http://xxxx/images/item/7_001.jpg",
            "link": "https://xxxxxxxxx"
        }, {
            "ID": "2",
            "province_id": "8",
            "title": "江西炒饭 香喷喷",
            "imgUrl": "http://xxxx/images/item/7_001.jpg",
            "link": "https://xxxxxxxxx"
        }]
    }, {
        "province": "广西",
        "item": [{
            "ID": "1",
            "province_id": "9",
            "title": "优质酱卤牛肉",
            "imgUrl": "http://xxxx/images/item/7_001.jpg",
            "link": "https://xxxxxxxxx"
        }, {
            "ID": "2",
            "province_id": "9",
            "title": "农家自制豆制品豆干豆腐",
            "imgUrl": "http://xxxx/images/item/7_001.jpg",
            "link": "https://xxxxxxxxx"
        }]
    }];
    
    
    var aSearch = [];
    oJson.forEach(function(ele){//循环外层数组
        var aTemp = ele.item.filter(function(i){
            return i.title.includes('炒饭'); // 过滤符合要求的item数组
        });
        aSearch = aSearch.concat(aTemp); // 将符合要求的数组合并到aSearch;
    });
    console.log(aSearch);  
    
    
    
