module.exports = {

    interval: '*/3 * * * * *',
    handler () {
        console.log('定时任务 3秒一次' + new Date())
    }
}