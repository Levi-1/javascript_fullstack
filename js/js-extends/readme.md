## 原型链
1. 
    实例通过 .__proto__ 指向原型对象
    类通过 .prototype指向原型对象
    原型对象通过 .constructor指向类

    实例
    a: {
        a.属性,
        __proto__: { A类的prototype
            constructor,
            __proto__:{}
        }
    }