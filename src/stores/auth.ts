import { defineStore } from 'pinia';
import  api  from '@/services/api.ts';
import  router  from '@/router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.accessToken
    }
  },
  actions: {
    async login( credentials ) {
      try {
        const response = await api.post('/login', credentials);
        console.log(response);
        this.accessToken = response.data.access;
        router.push('/');

      }catch(error) {
        console.error(error);
      }
    },
    async logout() {
      try{
        const response = await api.post('/logout');
        console.log(response);
        this.accessToken = null;
        router.push('/login');
      }catch(error) {
        console.error(error);
      }
    }
  }
})
