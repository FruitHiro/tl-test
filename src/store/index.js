import { createStore } from 'vuex'
import users from '@/mocks/users'

export default createStore({
    state: {
        users,
        login: '',
        orders: '',
        status: ''
    },
    mutations: {
        setLogin (state, data) {
            state.login = data
        },
        setOrders (state, data) {
            state.orders = data
        },
        setStatus (state, data) {
            state.status = data
        },
    },
    getters: {
        filteredUsers (state) {
            return state.users.filter((user) => {
                const reg = new RegExp(`${state.login}`, 'i')
                let suitableLogin = !!state.login ? user.login.search(reg) > -1 : true
                let suitableOrder = !!state.orders ? user.orders === +state.orders : true
                let suitableStatus = !!state.status ? user.status.search(state.status) > -1 : true

                return suitableLogin && suitableOrder && suitableStatus
            })
        }
    }
})
