const state = {
    baseURL: '',
    prePageName: '',
    prePagePath:'',
    currentPageName: '',
    currentPagePath:''
  }
 
  const mutations = {
    SET_BASEURL: (state, url) => {
      state.baseURL = url
    },
    SET_SERVER_ERROR: (state, error) => {
      state.serverError = error
    },
    SET_PRE_PAGE_NAME: (state, pageName) => {
      state.prePageName = pageName
    },
    SET_PRE_PAGE_PATH: (state, pagePath) => {
     state.prePagePath = pagePath
   },
    SET_CURRENT_PAGE_NAME: (state, pageName) => {
      state.currentPageName = pageName
    },
    SET_CURRENT_PAGE_PATH: (state, pagePath) => {
     state.currentPagePath = pagePath
   }
  }
 
  const actions = {
    changeBaseUrl({
      commit
    }, url) {
      commit('SET_BASEURL', url)
    },
    addServerError({
      commit
    }, error) {
      commit('SET_SERVER_ERROR', error)
    },
    changePrePageName({
      commit
    }, pageName) {
      commit('SET_PRE_PAGE_NAME', pageName)
    },
    changePrePagePath({
     commit
   }, pagePath) {
     commit('SET_PRE_PAGE_PATH', pagePath)
   },
    changeCurrentPageName({
      commit
    }, pageName) {
      commit('SET_CURRENT_PAGE_NAME', pageName)
    },
    changeCurrentPagePath({
     commit
   }, pagePath) {
     commit('SET_CURRENT_PAGE_PATH', pagePath)
   }
  }
 
  const user = {
      state,
      mutations,
      actions
  }
 
  export default user
 