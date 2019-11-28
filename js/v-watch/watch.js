class watcher {
    constructor (opts) {
        this.$data = opts.data
        this.$watch = opts.watch
        for (const key in opts.data) {
            this.setData(key, opts.data[key])
        }
    }
    setData (_key, _val) {
        Object.defineProperty(this, _key, { // this将上下文指向当前对象
            get () {
                return _val
            },
            set (val) {
                const oldval = _val
                if (oldval === val)
                    return val
                _val = val
                this.$watch[_key] && typeof this.$watch[_key] ==='function' && (
                    this.$watch[_key].call(this, val, oldval)
                )
                return val
            }
        })
    }
}

