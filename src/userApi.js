import * as axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-KEY": "ddf9b7e1-ae79-454b-9403-4fa870ef5765"
    }
  }
)

// axios.get("https://social-network.samuraijs.com/api/1.0/users")
// return response.data.items
// console.log(response.data.items, 'userApi');

export const userApi = {
  authMe(userId) {
    return axiosInstance.get(`/auth/me`)
    .then(response => {
      return response
      // console.log(response.data, 'userApi authMe');
    })
  },
  getItem(userId) {
    return axiosInstance.get(`profile/${userId}`)
    .then(response => {
      return response.data
      // console.log(response.data, 'userApi getItem');
    })
  },
  getList(currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
      // console.log(response.data.items, 'userApi');
    })
  },
  follow(userId) {
    return axiosInstance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`)
  }
}
