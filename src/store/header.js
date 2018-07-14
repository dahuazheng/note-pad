const header = {
  state: {
    title: '便签',
    page: 'home',
    showSearchBox: false
  },
  mutations: {
    openSearchBox(state, isShow) {
      this.state.showSearchBox = isShow
    }
  },
  actions: {},
  getters: {}
}

export default header

