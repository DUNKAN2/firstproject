<template>
  <div class="limiter">
    <div class="login-container">
      <div class="login-wrap">
        <form class="login-form" v-on:submit.prevent="signUp">

          <span class="login-form-title padding-bottom-48">Registration</span>

            <CustomInput type="text" placeholder="login" v-model="store.login"/>
            <CustomInput type="text" placeholder="name" v-model="store.name"/>
            <CustomInput type="text" placeholder="Surname" v-model="store.surName"/>
            <CustomInput type="text" placeholder="email" v-model="store.email"/>
            <PasswordInput v-model="store.password"/>
            <h4 class="error" v-if="showMessage">{{ message }}</h4> 

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
    showMessage: false 
  }),
  methods: {
    async signUp(){
      if (this.store.email != '' && this.store.password != '' && this.store.login != '' && this.store.name != '' && this.store.surName != '') {
        this.showMessage = false;
        console.log ('-> sign_up');
        try {
          this.error = '';
          this.loading = true;
          
          const response = await fetch('https://6241d0d59ba1585b34015203.mockapi.io/api/example/Users',
            { 
              method: 'POST', 
              body: JSON.stringify({ 
                email: this.store.email,
                name: this.store.name,
                surName: this.store.surName,
                password: this.store.password,
                login: this.store.login,
              })
            }
          );
          // console.log(response);

          if (!response.ok) throw Error(response.status);

          this.$router.push ('/profile');

        } catch (e) {
          console.log (e);
          this.error = e;
        } finally {
          this.loading = false;        
        }
        
      } else {
        return this.showMessage = true;
      }
    },
  },
};
</script>
