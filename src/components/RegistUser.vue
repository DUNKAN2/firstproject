<template>
  <div class="limiter">
    <div class="login-container">
      <div class="login-wrap">
        <form class="login-form" v-on:submit.prevent="signUp">

          <span class="login-form-title padding-bottom-48">Registration</span>

            <CustomInput type="text" placeholder="login" v-model="store.login"/>
            <CustomInput type="text" placeholder="name" v-model="store.name"/>
            <CustomInput type="text" placeholder="surname" v-model="store.surName"/>
            <CustomInput type="text" placeholder="email" v-model="store.email"/>
            <PasswordInput v-model="store.password"/>
            <h4 class="error" v-if="showMessage">{{ message }}</h4>
            <h4 class="error" v-if="showAlert">User already exists! Do you want to <router-link to='/sign_up'>sign in</router-link> ?</h4>

            <CustomButton buttonName="sign up"/>  

            <LoadingComponent :style="{display: loading ? 'block' : 'none'}" />
                    
          <div class="text-center padding-top-48">
            <router-link to="/" class="txt2">Back</router-link>
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
    showAlert: false
  }),
  methods: {
    async signUp(){
      this.showAlert = false;  
      this.showMessage = false;
      this.error = '';
      try {
        if (this.store.email === '' || this.store.password === '' || this.store.login === '' || this.store.name === '' || this.store.surName === '') {
          this.showMessage = true;
          return
        }        

        this.loading = true;       
        this.store.putNewProfile();

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
};
</script>
