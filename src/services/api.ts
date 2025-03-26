import axios from "axios";
import { useAuthStore } from '@/stores/auth.ts'
import router from '@/router'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if(authStore.accessToken){
    config.headers['Authorization'] = `Bearer ${authStore.accessToken}`;
  }

  return config;
});

api.interceptors.response.use((response) => response, async (error) => {
  const authStore = useAuthStore();
  const originalRequest = error.config;
  if (error.config.url === 'refresh') {
    console.log('Refresh token expired, logging out...');
    //authStore.logout();
    await router.push('/login');
    return Promise.reject(error);
  }
  if(error.response.status === 401 && !originalRequest._retry){
    originalRequest._retry = true;
    try {
      const refresh = await api.post('refresh')

      authStore.accessToken = refresh.data.access;
      originalRequest.headers['Authorization'] = `Bearer ${authStore.accessToken}`;
      return api(originalRequest)

    }catch (error){
      console.log('Refresh token expired, logging out...');
      console.log(error);
      router.push('/login');
    }
  }
  return Promise.reject(error);
});


export default api;
