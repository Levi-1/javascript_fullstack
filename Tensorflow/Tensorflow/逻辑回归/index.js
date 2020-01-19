import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'

import {
    getData
} from './data.js';

window.onload = async () => {
    const data = getData()
    tfvis.render.scatterplot(
        { name: '数据'},
        { values: data}
    )

    //生成一个模型
    const model = tf.sequential()
    //神经网络
    model.add(tf.layers.dense({
        units: 1,
        inputShape: [2],
        activation: 'sigmoid' // 激活函数
    }))
    //算法
    model.compile({
        loss: tf.losses.logLoss, //损失函数
        optimizer: tf.train.adam(0.1) // 优化器
    })

    const input = data.map(p => [p.x, p.y])

    const output = data.map(p => p.lable)

    await model.fit(tf.tensor(input), tf.tensor(output), {
        batchSize: 40,
        epochs: 20,
        callbacks:tfvis.show.fitCallbacks(
            { name: 'test' },
            ['loss']
        )
    })
    const point = [-1, -2]
    const res = model.predict(tf.tensor([point]))
    res.print()

}