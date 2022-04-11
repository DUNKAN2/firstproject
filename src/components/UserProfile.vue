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
          <h4 class="error" v-if="showAlert">User not found! Do you want to <router-link to='/sign_up'>sign up</router-link> ?</h4>
          <LoadingComponent :style="{display: loading ? 'block' : 'none'}"/>
        
          <div class="text-center padding-top-115">
            <router-link to="/" class="txt2">Back</router-link>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingComponent from './LoadingComponent.vue'
import { userStore } from '../store/UserStore.js'

export default {
  components:{LoadingComponent},
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
  created () {
    this.getProfile()
  },
  methods: {
    async getProfile() {
      try {
        this.error = '';
        this.loading = true;
        
        this.store.getUserProfile();

      } catch (e) {
        console.log (e);
        this.error = e;
        this.showAlert = true;
      } finally {
        this.loading = false;
      }
    }
  } 
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
</style>