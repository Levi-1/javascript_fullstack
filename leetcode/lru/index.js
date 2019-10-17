//缓存算法
//函数 首字母大写的函数 看作一个类
function LRUCache (title) {
    //构造函数
    this.title = title;
}
// 添加方法
LRUCache.prototype.sayHello = function(){
    console.log(`hello,${this.title}`);
}
//静态方法
LRUCache.buyCar = function(){
    console.log('buy');
}
let cache = new LRUCache('cb');
console.log(cache.sayHello())
LRUCache.buyCar();
console.log(cache.__proto__ == LRUCache.prototype)