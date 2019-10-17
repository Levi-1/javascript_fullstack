// const caculateBouns = () => {
// }
let caculateBouns = null;
let categories = {
    's':(salary)=>{
        return salary*60;
    },'a':(salary)=>{
        return salary*24;
    },'b':(salary)=>{
        return salary*18;
    },'c':(salary)=>{
        return salary*15;
    },'d':(salary)=>{
        return salary*12;
    }
}
caculateBouns = (salary,type = 'c') => {//默认参数
    let bouns = categories[type](salary);
    return bouns;
}
console.log(caculateBouns(20000,'s'));