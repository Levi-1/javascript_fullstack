# 拷贝
     赋值操作 基础数据类型为深拷贝
     赋值操作 引用类型为浅拷贝

    Object.assign(a, a2) 
    array.slice()       拷贝的数据类型为基础数据类型时，为深拷贝，当为引用数据类型时，为浅拷贝
    
    let b = JSON.parse(JSON.stringify(a)) // deepcopy,将a转换为字符串，再将字符转为json