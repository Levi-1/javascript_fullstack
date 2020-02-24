module.exports = {
    getName () {
        return delay('jerry', 1000)
    },
    getAge () {
        return 20
    }
}

const delay = (data, tick) => new Promise(resolve =>{
    setTimeout(() => {
        resolve(data)
    }, tick);
})