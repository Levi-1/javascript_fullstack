import { mapActions } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange (query) {
      this.query = query.trim()
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ])
  }
}