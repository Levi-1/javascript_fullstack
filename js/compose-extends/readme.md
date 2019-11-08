# es5继承
        BIN.prototype = Object.create(Btn.prototype)
        复制父类的方法
        浅复制
        其中一种方法，将父类的prototype对象一个个复制到BIN
        但是其属性并不能继承

        继承属性
        继承方法
            function Btn(color) {
            this.color = color
        }
        function BIN(color) {
            // 继承父类的属性
            Btn.call(this, color)
        }

        寄生组合式 继承，这也是es6 extends 采用的继承
        BIN.prototype = Object.create(Btn.prototype)
        Btn.call(this, color)       
        BIN.prototype.constructor = BIN;//修正 BIN的constructor

# es6继承
    class buyItNow extends Button{
        //子类的构造函数
         constructor(color) {                
                super(color)//父类的构造函数
                this.innerHtml = '购买'
                let button = document.createElement('button')
                button.innerHTML = this.innerHtml
                button.style.color = this.color
                document.body.appendChild(button)
            }
    }
