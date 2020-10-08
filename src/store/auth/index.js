import axios from 'axios'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3003/user/login', payload)
        .then((response) => {
        //   console.log(response.data)
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('refreshToken', response.data.data.refreshToken)
            localStorage.setItem('id', response.data.data.id)
          }
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3003/user/register', payload)
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
