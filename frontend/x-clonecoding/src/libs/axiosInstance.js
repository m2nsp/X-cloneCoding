import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    // 콘텐츠 타입
    "Content-Type": "application/json"
  },
});

export default axiosInstance;