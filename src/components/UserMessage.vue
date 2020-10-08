<template>
  <div>
    <button @click="getChat(user.id_user)" class="w-100 btn p-0 btn-user">
      <div class="row no-gutters mt-1">
        <div class="col-2">
          <img src="../assets/icon/profile1.png" alt="" />
        </div>
        <div class="col-8 text-left pl-4">
          <p class="m-0 pt-2" id="user-name">{{user.name}}</p>
          <p id="user-msg">Ayo mabok</p>
        </div>
        <div class="col-2">
          <p class="m-0 pt-2 text-right" id="clock">03.00</p>
          <div id="total-msg">
            <span> 1 </span>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  props: ['user'],
  methods: {
    getChat (id) {
      this.$emit('ayoChat', id)
    }
  }
}
</script>
<style scoped>
#clock {
  font-size: 10px;
}
.btn-user {
  margin-top: 10px;
  margin-left: 0;
}

.btn-user:focus {
  outline: none;
  box-shadow: none;
}
</style>
