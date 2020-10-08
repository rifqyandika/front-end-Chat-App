<template>
  <div>
    <div id="wrapper">
      <form>
        <div class="head d-flex">
          <router-link to="/login"
            ><img src="../assets/icon/back.png"
          /></router-link>
          <h5 id="title" class="mx-auto">Reset Password</h5>
        </div>
        <p id="welcome-title">You'll get messages soon on your e-mail</p>
        <div class="input-group" id="input-email">
          <label for="email-input">Email</label>
          <input type="email" />
        </div>
        <button class="btn w-100 btn-login" type="sumbit">Send</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
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
  height: 500px;
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
  width: 100px;
  border: 1px solid#848484;
}
#with-login::after {
  content: "";
  display: block;
  right: 0;
  top: 60%;
  position: absolute;
  width: 100px;
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
