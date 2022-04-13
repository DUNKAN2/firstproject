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
      const user = usersArray.find ( u => u.email === this.email && u.password === this.password );

      if (!user) throw Error('user not found!')
      
      this.email = user.email;
      this.login = user.login;
      this.name = user.name;
      this.surName = user.surName; 
    },
    async putNewProfile () {
      const response = await fetch('https://6241d0d59ba1585b34015203.mockapi.io/api/example/Users',
        { 
          method: 'POST', 
          body: JSON.stringify({ 
            email: this.email,
            name: this.name,
            surName: this.surName,
            password: this.password,
            login: this.login,
          })
        }
      );
      if (!response.ok) throw Error(response.status);
    },
    async clearProfile() {
      this.email = '';
      this.login = '';
      this.name = '';
      this.surName = ''; 
      this.password = '';
    }
  },
})