import { defineStore } from 'pinia'

export const userStore = defineStore('userProfile', {
  state: () => ({
    login:'',
    email:'',
    password:'',
    name:'',
    surName:'',
  }),
  actions: {
    async getUserProfile() {
      const response = await fetch('https://6241d0d59ba1585b34015203.mockapi.io/api/example/Users', 
      { methods: 'GET' });
      // console.log(response);
      if (!response.ok) throw Error(response.status);

      const usersArray = await response.json();
      // console.log(usersArray);
      const user = usersArray.find ( ({email, password}) => email === this.email && password === this.password );
      
      this.email = user.email;
      this.login = user.login;
      this.name = user.name;
      this.surName = user.surName; 
    },
  },
})