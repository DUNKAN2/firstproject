<template>
  <div class="limiter">
    <div class="login-container">
      <div class="login-wrap">
        <form class="login-form" v-on:submit.prevent="signIn" >

          <span class="login-form-title padding-bottom-48">Wellcome</span>

          <CustomInput type="text" placeholder="email" v-model="store.email"/>

          <PasswordInput v-model="store.password"/>

          <h4 class="error" v-if="showMessage">{{ message }}</h4>
          <h4 class="error" v-if="showAlert">User not found! Do you want to <router-link to='/sign_up'>sign up</router-link> ?</h4>
          <CustomButton buttonName="пагнали"/>

          <LoadingComponent :style="{display: loading ? 'block' : 'none'}"/>
          
          <div class="text-center padding-top-115">
            <span class="txt1">Don’t have an account? </span>
            <router-link to="/sign_up" class="txt2"> Sign Up</router-link>
          </div>

        </form>
      </div>
    </div>
  </div> 
</template>

<script>
import CustomInput from './CustomInput.vue'
import PasswordInput from './PasswordInput.vue'
import LoadingComponent from './LoadingComponent.vue'
import CustomButton from './ButtonComponent.vue'
import { userStore } from '../store/UserStore.js'

export default {
  components: {CustomInput,PasswordInput,LoadingComponent,CustomButton},
  setup() {
    const store = userStore()
    return { store }
  }, 
  data: () => ({
    error:'',
    loading: false,
    message:'These fields cannot be empty!',
    showMessage: false,
    showAlert: false,
  }),
  methods: {
    async signIn(){
      this.showAlert = false;  
      this.showMessage = false;
      this.error = '';
      try {
        if (this.store.email === '' || this.store.password === '') {
          this.showMessage = true;
          return
        }

        this.loading = true;
        await this.store.getUserProfile();        
        this.$router.push ('/profile');
        
      } catch (e) {
        console.log (e);
        this.error = e;
        this.showAlert = true;
      } finally {
        this.loading = false;        
      }
    },
  },
}
</script>

<style>
  .error {
    text-align: center;
    color: rgb(196, 65, 65);
    font-family: sans-serif;
    font-size: 1rem;    
  }
  .limiter {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
  }
  .login-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0px;
    background: #f2f2f2;
  }
  .login-wrap {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 40px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
  }
  .login-form {
    width: 100%;
  }
  .login-form-title {
    display: block;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
  }
  .padding-bottom-48 {
    padding-bottom: 48px;
  }
  .padding-top-48 {
    padding-top: 48px;
  }
  .padding-top-115 {
    padding-top: 115px;
  }
  .text-center {
    text-align: center;
  }
  .txt1 {
    font-size: 13px;
    color: #666;
    line-height: 1.5;
  }
  .txt2 {
    font-size: 13px;
    color: #333;
    line-height: 1.5;
  }
</style>
