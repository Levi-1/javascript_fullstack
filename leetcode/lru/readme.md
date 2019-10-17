- 什么是this   
- es5
    js中，函数是一等公民
    js的过去 没有class 关键字
    function LRUCache
    类的构造函数
    定义了一个类
    new LRUCache 可以被实例化
    new 发生了什么？
    生成了一个对象 {} Object
    new 在内存中生成了一个空的对象
    构造函数 this 指向要生成的对象 加上属性 。

    面向对象 
      类 ，   构造函数 ，方法 ， 属性 
    class    constructor
    function  函数本身   prototype添加   this 进行设置
    函数具有prototype属性
    火车头 constructor prototype对象
    基于原型的面向对象

- 任何函数都有prototype属性，其值为对象

- 任何对象都有__proto__属性，指向构造函数的prototype属性
    js的面向对象，类和实例的关系，不是父子关系，没有血缘
    基于原型的

- new的过程 
    构造函数被执行，内部创造一个this，指向对象 添加属性
    对象的__proto__属性找到原型链的方法
    cache instanceof LRUCache
    JS中没有类的概念，LRUCache也是对象

- es6 7 8 9
