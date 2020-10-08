<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 chat-row pt-4">
          <div v-if="profile">
            <div class="profileMe">
      <button class="btn" @click="getCloseProfile" style="cursor: pointer;">x</button>
            <ProfileDetail :user='userProfile'/>
            </div>
          </div>
          <div class="chat">
            <div class="head-chat d-flex justify-content-between">
              <h5 id="head-title">Telegram</h5>
              <div>
                <div
                  class="modal-menu shadow d-flex justify-content-between"
                  id="menulist"
                >
                  <button class="btn">
                    <img src="../assets/icon/group1.png" />
                  </button>
                  <button class="btn">
                    <img src="../assets/icon/group1.png" />
                  </button>
                  <button class="btn">
                    <img src="../assets/icon/group1.png" />
                  </button>
                </div>
              </div>
              <button
                @click="setMenu()"
                class="btn menu-btn"
                id="btn-menu-header"
              >
                <img src="../assets/icon/Menu.png" />
              </button>
            </div>
            <div :class="menuHead">
              <div class="menu-row shadow p-3">
                <button class="btn d-flex text-white" @click="getSetting()">
                  <img class="text-left" src="../assets/icon/Settings.png" />
                  <p class="mb-2">Settings</p>
                </button>
                <button class="btn d-flex text-white">
                  <img src="../assets/icon/Contacts.png" />
                  <p class="mb-2">Contact</p>
                </button>
                <button class="btn d-flex text-white">
                  <img src="../assets/icon/Calls.png" />
                  <p class="mb-2">Calls</p>
                </button>
                <button class="btn d-flex text-white">
                  <img src="../assets/icon/SaveMessage.png" />
                  <p class="mb-2">Save messages</p>
                </button>
                <button class="btn d-flex text-white">
                  <img src="../assets/icon/invited.png" />
                  <p class="mb-2">Invited friends</p>
                </button>
                <button class="btn d-flex text-white">
                  <img src="../assets/icon/FAQ.png" />
                  <p class="mb-2">FAQ</p>
                </button>
              </div>
            </div>
            <div class="list-search-msg mt-4 d-flex justify-content-between">
              <div class="md-form mt-0">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Type your message"
                  aria-label="Search"
                />
              </div>
              <button class="btn" id="btn-menu-header">
                <img src="../assets/icon/Plus.png" />
              </button>
            </div>
            <div class="list-status mt-3 d-flex justify-content-between">
              <button class="btn">All</button>
              <button class="btn btn-important">Important</button>
              <button class="btn">Unread</button>
            </div>
            <div class="scroll mt-2 pr-1">
              <div v-for="(item, index) in listUser" :key="index">
                <button class="w-100 btn p-0 btn-user" @click="getChat(item)">
                  <div class="row no-gutters mt-1">
                    <div class="col-2">
                      <img
                        id="img-list"
                        :src="`http://localhost:3003/${item.image}`"
                        alt=""
                      />
                    </div>
                    <div class="col-8 text-left pl-4">
                      <p class="m-0 pt-2" id="user-name">{{ item.name }}</p>
                      <p id="user-msg">Haii...</p>
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
            </div>
          </div>
        </div>
        <div class="col-md-9 chat-msg pt-4 text-center d-none d-sm-block">
          <div v-if="chatBox">
            <div class="row menu-top bg-white">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-12 text-left">
                    <div class="other-user-chat p-2 d-flex">
                      <div>
                        <img :src="`http://localhost:3003/${imgUser}`" alt="" />
                      </div>
                      <div class="ml-3 mt-1 username-other">
                        <h5 class="m-0">{{ nameChat }}</h5>
                        <p class="">online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="scroll-chat pt-3">
              <div v-for="(item, index) in listMsg" :key="index">
                <div v-if="item.from_ === nameuser">
                  <p class="we-chat text-right ml-auto mr-2">{{ item.chat }}</p>
                </div>
                <div v-else>
                  <p class="other-chat text-left mr-auto ml-2">
                    {{ item.chat }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-9 chat-portal p-3">
                <form @submit.prevent="sendMessage()" class="d-flex">
                  <input
                    v-model="message"
                    class="form-control"
                    type="text"
                    placeholder="Readonly input here…"
                  />
                  <button class="btn btn-danger">send</button>
                </form>
              </div>
            </div>
          </div>
          <div v-else>
            <p id="msg-default">Please select a chat to start messaging</p>
          </div>
        </div>
        <div class="col-md-9 chat-msg pt-4 text-center d-blcok d-sm-none position-absolute">
          <div v-if="chatBox">
            <div class="row menu-top bg-white">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-12 text-left">
                    <div class="other-user-chat p-2 d-flex">
                      <div>
                        <button class="btn" @click="closeSM()">x</button>
                        <img :src="`http://localhost:3003/${imgUser}`" alt="" />
                      </div>
                      <div class="ml-3 mt-1 username-other">
                        <h5 class="m-0">{{ nameChat }}</h5>
                        <p class="">online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="scroll-chat pt-3">
              <div v-for="(item, index) in listMsg" :key="index">
                <div v-if="item.from_ === nameuser">
                  <p class="we-chat text-right ml-auto mr-2">{{ item.chat }}</p>
                </div>
                <div v-else>
                  <p class="other-chat text-left mr-auto ml-2">
                    {{ item.chat }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-9 chat-portal p-3">
                <form @submit.prevent="sendMessage()" class="d-flex">
                  <input
                    v-model="message"
                    class="form-control"
                    type="text"
                    placeholder="Readonly input here…"
                  />
                  <button class="btn btn-danger">send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Io from 'socket.io-client'
import ProfileDetail from '../components/ProfileDetail'
export default {
  data () {
    return {
      menuHead: 'hide',
      menu: true,
      socket: Io('http://localhost:3003'),
      message: '',
      listMsg: [],
      chatBox: false,
      listUser: [],
      nameChat: '',
      userProfile: [],
      profile: false,
      id: this.$route.query.idsecret,
      nameuser: this.$route.query.username,
      imgUser: '',
      userSelect: []
    }
  },
  components: {
    ProfileDetail
  },
  methods: {
    setMenu () {
      this.menu = !this.menu
      if (!this.menu === true) {
        this.menuHead = 'show'
      } else {
        this.menuHead = 'hide'
      }
    },
    sendMessage () {
      this.socket.emit('send-message', {
        sender: this.nameuser,
        recevier: this.nameChat,
        message: this.message
      })
      this.message = ''
    },
    getChat (item) {
      this.chatBox = true
      this.nameChat = item.name
      this.imgUser = item.image
      this.socket.emit('get-message', {
        sender: this.nameuser,
        recevier: this.nameChat
      })
    },
    getSetting () {
      this.profile = true
      this.menuHead = 'hide'
    },
    getCloseProfile () {
      this.profile = false
    },
    closeSM () {
      this.chatBox = false
    }
  },
  mounted () {
    this.socket.emit('getAll', {
      id: this.id,
      sender: this.nameuser
    })
    this.socket.on('userList', (data) => {
      this.listUser = data
    })
    this.socket.on('list-message', (data) => {
      // this.listMsg = []
      this.listMsg = data
    })
    this.socket.emit('join-room', {
      user: this.nameuser
    })
    this.socket.emit('getM', [])
    this.socket.on('profile', (data) => {
      const id = this.$route.query.idsecret
      data.forEach((e) => {
        if (e.id_user === parseInt(id)) {
          this.userProfile = e
        } else {
          this.userSelect.push(e)
        }
      })
    })
  }
}
</script>
<style>
#img-list {
  margin-top: 5px;
  width: 60px;
  border-radius: 10px;
}
.profileMe {
  position: absolute;
  background-color: #ffffff;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100vh;
}
.btn-user {
  margin-top: 10px;
  margin-left: 0;
}

.btn-user:focus {
  outline: none;
  box-shadow: none;
}
.scroll {
  overflow: auto;
  height: calc(100vh - 190px);
}
.scroll-chat {
  overflow: auto;
  height: calc(100vh - 130px);
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar {
  display: none;
}

.chat-portal {
  /* border: 1px solid black; */
  bottom: 0px;
  position: fixed;
  /* height: 60px;
  padding-top: 8px; */
  box-sizing: border-box;
  /* max-width: 100%; */
  background-color: #ffffff;
}
/*  */
.other-user-chat img {
  margin-top: 8px;
  width: 40px;
  /* margin-left: 15px; */
}

.other-chat {
  /* position: relative;
  overflow: auto; */
  /* border: 1px solid black; */
  width: fit-content;
  color: #7e98df;
  /* display: table; */
  background-color: #ffffff;
  padding: 10px;
  font-size: 14px;
  /* padding-bottom: 0px; */
  border-radius: 10px 20px 20px 5px;
}
.we-chat {
  /* position: relative;
  overflow: auto; */
  /* border: 1px solid black; */
  width: fit-content;
  color: #ffffff;
  /* display: table; */
  background-color: #7e98df;
  padding: 10px;
  /* float: right; */
  font-size: 14px;
  /* padding-bottom: 0px; */
  border-radius: 10px 10px 5px 20px;
}

.menu-top {
  margin-top: -24px;
  height: 70px;
}

.chat-row {
  background-color: #ffffff;
  position: relative;
}
.menu-btn:focus {
  outline: none;
  box-shadow: none;
}
#head-title {
  font-size: 25px;
  font-weight: bold;
  color: #7e98df;
}
.list-search-msg {
  position: relative;
}

#menu-chat-top {
  margin-top: -24px;
  background-color: #ffffff;
}

.username-other h5 {
  font-size: 16px;
  padding-top: 2px;
}

.username-other p {
  font-size: 12px;
  color: #7e98df;
}

.head-chat {
  position: relative;
}

#user-name {
  font-size: 18px;
  font-weight: bold;
}

#msg-default {
  padding-top: 290px;
  color: #848484;
}

#total-msg {
  height: 22px;
  width: 22px;
  border-radius: 100%;
  background-color: #57cad5;
  color: white;
  float: right;
  text-align: center;
}

#user-msg {
  font-size: 14px;
  color: #7e98df;
}

.list-status .btn {
  font-weight: bold;
}

.list-status .btn-important {
  background-color: #7e98df;
  border-radius: 20px;
  color: #ffffff;
}

.chat-msg {
  background-color: #fafafa;
}

.show {
  display: block;
  margin-left: -369px;
}

.hide {
  display: none;
  transition: 3s;
}

.modal-menu {
  /* border: 1px solid black; */
  display: none !important;
  position: absolute;
  width: 80%;
  border-radius: 10px;
  background-color: #7e98df;
  padding: 1px;
}

.menu-row {
  border-radius: 30px 5px 30px 30px;
  height: 300px;
  width: 62%;
  background-color: #7e98df;
  z-index: 99;
  position: absolute;
  right: 34px;
  color: #ffffff;
}

.menu-row .btn {
  font-size: 16px;
}
.menu-row img {
  width: 22px;
  margin-right: 10px;
}
.logo-i img {
  width: 70px;
  padding: 10px;
}

@media (max-width: 576px) {
  .mom {
    display: none;
  }
  .container {
    padding: 0px;
  }
  .show {
    display: block;
    margin-left: -400px;
  }

  .hide {
    display: none;
    transition: 3s;
  }
  .menu-row {
    width: 70%;
  }
}
</style>
