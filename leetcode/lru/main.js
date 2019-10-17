//可以被运行的对象叫函数
function LRUCache(capacity) {
    this.capacity = capacity;//容量
    this.obj = {};//储存数据
    //push splice Pop unshift
    this.array = [];//优先级判断
}

LRUCache.prototype.get = function (key) {
    if(this.obj[key]){
        var index = this.array.indexOf(key);
        this.array.splice(index,1);
        this.array.unshift(key);
        return this.obj[key];
    }
    else
    return -1
    
}

LRUCache.prototype.put = function (key, value) {
    if(this.obj[key]){//若值已存在
        this.obj[key] = value;//更新
        //更新其在数组中的优先级
        // 删除
        // 再插入至最高优先级一端
        var index = this.array.indexOf(key);
        this.array.splice(index,1);//从数组中移除从index位置开始共1个元素。
        this.array.unshift(key);
    }    
    if(this.capacity === this.array.length){//容器装满了
       var k = this.array.pop();//将其key在数组中删除
       this.obj[k] = undefined;//在json中删除key对应的 键值对
    }
    this.obj[key] = value;
    this.array.unshift(key);//存放至数组最前方
}


let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));
console.log(cache.array,cache.obj);