<template>
  <div>
    <div class="profile-box col-12 p-0">
        <div
          class="col-12 name mb-1 p-0 d-flex justify-content-start align-items-center"
        >
        </div>
        <div
          class="col-12 d-flex flex-column justify-content-center align-items-center w-100 p-0"
          style="width: 80px"
        >
          <img
            style="width: 80px"
            :src="`http://localhost:3003/${user.image}`"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 name mb-3 p-0 text-center">
          <h6   >
            {{ user.name }}
          </h6>
          <p style="font-size: 14px">{{ user.email }}</p>
          <button class="btn btn-danger" v-b-modal="'modalku'">asfjaskfj</button>
        </div>
        <div class="col-12 name p-0">
          <h6 class="ml-3 text-left">Account</h6>
        </div>
        <div class="col-12 p-0">
          <h6 class="ml-3 text-left" style="font-weight: 400">+62-085-0887-999</h6>
        </div>
        <div class="col-12 p-0">
          <h6 class="ml-3 text-left" style="font-weight: 300">
            click to change number
          </h6>
        </div>
        <div class="col-12 p-0">
          <hr />
        </div>
        <div class="col-12 p-0">
          <h6 class="ml-3 text-left">{{ user.email }}</h6>
        </div>
        <div class="col-12 p-0">
          <h6 class="ml-3 text-left" style="font-weight: 400">
            {{ user.username }}
          </h6>
        </div>
        <div class="col-12 p-0">
          <hr />
        </div>
        <div class="col-12 p-0">
          <h6 class="ml-3 text-left">Im a Junior Front end Developer</h6>
        </div>
        <div class="col-12 p-0">
          <h6 class="ml-3 text-left" style="font-weight: 300">Bio</h6>
        </div>
        <div class="col-12 p-0">
          <hr />
        </div>
        <div class="col-12 mb-3 p-0">
          <h6 class="ml-3 text-left">Settings</h6>
        </div>
        <div class="col-12 mb-3 p-0">
          <div class="col-12 d-flex align-items-center mb-3">
            <img src="../assets/icon/group1.png" class="icon-settings mr-2" />
            <h6 class="text-left m-0">Notification and sounds</h6>
          </div>
          <div class="col-12 d-flex align-items-center mb-3">
            <img src="../assets/icon/group1.png" class="icon-settings mr-2" />
            <h6 class="text-left m-0">Privacy and Security</h6>
          </div>
          <div class="col-12 d-flex align-items-center mb-3">
            <img src="../assets/icon/group1.png" class="icon-settings mr-2" />
            <h6 class="text-left m-0">Data and Storage</h6>
          </div>
          <div class="col-12 d-flex align-items-center mb-3">
            <img src="../assets/icon/group1.png" class="icon-settings mr-2" />
            <h6 class="text-left m-0">Chats setting</h6>
          </div>
          <div class="col-12 d-flex align-items-center mb-3">
            <img src="../assets/icon/group1.png" class="icon-settings mr-2" />
            <h6 class="text-left m-0">Device</h6>
          </div>
          <div @click="logout()" class="col-12 d-flex align-items-center mb-3">
            <img src="../assets/icon/group1.png" class="icon-settings mr-2" />
            <h6 class="text-left m-0">Logout</h6>
          </div>
        </div>
      </div>
      <ModalEdit/>
  </div>
</template>
<script>
import ModalEdit from './ModalEdit'
export default {
  props: ['user'],
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('refreshToken')
      window.location = '/login'
    }
  },
  components: {
    ModalEdit
  }
}
</script>
<style scoped>
.profile-box {
    top: -10px;
}
</style>
