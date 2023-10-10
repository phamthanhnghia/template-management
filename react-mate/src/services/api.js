import axios from 'axios';

// Tạo một instance của Axios với các cài đặt mặc định
const axiosInstance = axios.create({
  baseURL: 'http://your-api-url.com', // Thay đổi thành URL của API thực tế
});

// Hàm gọi API để đăng nhập
export const login = (email, password) => {
  return axiosInstance.post('/login', {
    email,
    password,
  });
};

// Hàm gọi API để lấy danh sách người dùng
export const getUserList = (token) => {
  return axiosInstance.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};