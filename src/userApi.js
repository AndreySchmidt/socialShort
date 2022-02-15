import * as axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-KEY": "mykey"
    }
  }
)

// axios.get("https://social-network.samuraijs.com/api/1.0/users")
// return response.data.items
// console.log(response.data.items, 'userApi');

export const userApi = {
  getList(currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
      console.log(response.data.items, 'userApi');
    })
  },
  follow(userId) {
    return axiosInstance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`)
  }
}
