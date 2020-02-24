// 整个后端框架中的外层文件
const app = new(require('./lm'))()
app.start(3000)