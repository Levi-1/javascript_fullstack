- 类数组对象
1. 能够通过 arguments[0],arguments[1] 此种方式取出值
2. 拥有length属性
3. 类数组 ->真数组 array.from 

- this绑定的方式
谁调用，绑定谁
有多个this绑定
obj.fn < call/apply/bind < new 绑定的优先级

- arguments
每个函数中都能使用的变量，是一个对象 
 传给函数的所有的参数,箭头函数无arguments

arguments:{
        0: fn,
        1: 123,
        length: 2
    }                
