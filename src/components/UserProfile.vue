<template>
    <div class="limiter">
    <div class="login-container">
      <div class="login-wrap">
        <form class="login-form">

          <div>
            <span class="form-avatar">
              <img :src="avatar" alt="huila">
            </span>
            
            <h1>login: {{ store.login }}</h1>
            <h1>name: {{ store.name }}</h1>
            <h1>surname: {{ store.surName }}</h1>
            <h1>email: {{ store.email }}</h1>
          </div>
        
          <div class="text-center padding-top-115">
            <i @click="store.clearProfile()" class="txt2">
              <router-link to="/">Back</router-link>
            </i>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from '../store/UserStore.js'

export default {
  setup() {
    const store = userStore()
    return { store }
  }, 
  data: () => ({
    avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/240px-OOjs_UI_icon_userAvatar.svg.png',
    error:'',
    loading: false,
    showAlert: false,
  }),
  methods: {} 
}
</script>

<style>
.form-avatar {
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
}
.form-avatar img {
  top: 0; 
  right: 0; 
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
h1 {
  font-size: 25px;
  color: #333;
  line-height: 1.2;
  text-align: center;
}
i {
  font-style: normal
}
</style>