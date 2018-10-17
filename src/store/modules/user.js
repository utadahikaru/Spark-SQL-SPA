const state = {
    isAuthed: false,
    token: '',
    userName: '',
    userAccount: '',
    privileges: 1,
}

const mutations = {
    SET_IS_AUTHED: (state) => {
        state.isAuthed = true
    },
    UNSET_IS_AUTHED: (state) => {
        state.isAuthed = false
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    UNSET_TOKEN: (state, token) => {
        state.token = ''
    },
    SET_USERACCOUNT: (state, userAccount) => {
        state.userAccount = userAccount
    },
    SET_USERNAME: (state, userName) => {
        state.userName = userName
    },
    SET_PRIVILEGES: (state, privileges) => {
        state.privileges = privileges
    },
    UNSET_USER_DATA: (state) => {
        state.name = ''
        state.userName = ''
        state.privileges = 1
    }
}

const actions = {
    activeToken({
        commit
    }, data) {
        commit('SET_TOKEN', data.token)
        commit('SET_USERACCOUNT', data.userAccount)
        commit('SET_USERNAME', data.userName)
        commit('SET_PRIVILEGES', data.privileges)
        commit('SET_IS_AUTHED')
    },
    addToken({
        commit
    }, data) {
        commit('SET_TOKEN', data.token)
        localStorage.token = data.token
        commit('SET_USERACCOUNT', data.userAccount)
        commit('SET_USERNAME', data.userName)
        commit('SET_PRIVILEGES', data.privileges)
        localStorage.userData = JSON.stringify(data)
        commit('SET_IS_AUTHED')
    },
    logout({
        commit
    }) {
        commit('UNSET_TOKEN')
        localStorage.token = ''
        commit('UNSET_USER_DATA')
        localStorage.userData = ''
        commit('UNSET_IS_AUTHED')
    }
}

const user = {
    state,
    mutations,
    actions
}

export default user