<template>
  <div>
    <div v-if="Loading">
      <div class="splash">
            <div class="splash-img">
                <div class="d-flex justify-content-center">
                    <img class="animate__animated animate__bounce" src="../assets/icon/splash.png" >
                </div>
            </div>
        </div>
    </div>
    <div v-else id="wrapper">
      <form @submit.prevent="getLogin">
        <h5 id="title">Login</h5>
        <p id="welcome-title">Hi, Welcome back</p>
        <div class="input-group" id="input-email">
          <label for="email-input">Email</label>
          <input v-model="input.email" type="email" />
        </div>
        <div class="input-group" id="input-password">
          <label for="password-input">Password</label>
          <input v-model="input.password" type="password" />
        </div>
        <h6 id="forgot-passwrd" class="text-right">
          <router-link to="/resetpassword">Forgot Password ?</router-link>
        </h6>
        <button class="btn w-100 btn-login" type="sumbit">Login</button>
        <h6 id="with-login" class="pb-1">Login With</h6>
        <button type="button" class="btn w-100 btn-google mb-3">Google</button>
        <div class="register">
          <h6 id="account" class="text-center">
            Don't have an account ?
            <router-link to="/register">Signup</router-link>
          </h6>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
      input: {
        email: null,
        password: null
      },
      Loading: true
    }
  },
  methods: {
    getLogin () {
      this.actionLogin(this.input)
        .then((response) => {
          if (response.data.code === 500) {
            alert('Email or password invalid')
            this.input.email = ''
            this.input.password = ''
          } else {
            const name = response.data.data.name
            const id = response.data.data.id
            this.$router.push({
              path: '/home',
              query: {
                idsecret: id,
                username: name
              }
            })
          }
        })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  },
  mounted () {
    setTimeout(() => {
      this.Loading = false
    }, 3000)
  }
}
</script>
<style scoped>
.splash {
    background-color: #7E98DF;
    width: 100%;
    height: 100vh;
}

.splash-img {
    padding-top: 230px;
  /* display: inline-block; */
  animation: shake 1s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  animation-iteration-count: infinite;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

#wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
}
form {
  width: 350px;
  padding: 30px;
  position: relative;
  border-radius: 25px;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}
#title {
  text-align: center;
  margin-bottom: 20px;
  color: #7e98df;
}
#welcome-title {
  font-size: 12px;
  color: #232323;
}
.input-group input {
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid#232323;
}
.input-group:focus {
  border-color: inherit;
  box-shadow: none;
}
.input-group label {
  color: #848484;
  font-size: 14px;
}
#input-email {
  padding-bottom: 20px;
}
#input-password {
  padding-bottom: 25px;
}
#forgot-passwrd {
  font-size: 14px;
  color: #7e98df;
  padding-bottom: 12px;
}
.btn-login {
  border-radius: 70px;
  background-color: #7e98df;
  color: white;
  transition: 0.5s;
}
.btn-login:hover {
  background-color: #96ace9;
  transition: 0.5s;
}
#with-login {
  padding-top: 12px;
  color: #848484;
  font-size: 12px;
  text-align: center;
  position: relative;
}

#with-login::before {
  content: "";
  display: block;
  left: 0;
  top: 60%;
  position: absolute;
  width: 90px;
  border: 1px solid#848484;
}

#with-login::after {
  content: "";
  display: block;
  right: 0;
  top: 60%;
  position: absolute;
  width: 90px;
  border: 1px solid#848484;
}
.btn-google {
  border-radius: 70px;
  border: 1px solid #7e98df;
  color: #7e98df;
}
#account {
  font-size: 14px;
  color: #313131;
}
@media (max-width: 576px) {
  form {
    width: 100%;
    box-shadow: none;
    margin: 5px;
  }
  #wrapper {
    background-color: #fff;
  }
}
</style>
