import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f8e5f9e1-2f25-4313-a285-68ae9593cf4c'
    }
})

const anonimInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/` + userId).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/` + userId).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileData(userId) {
        return instance.get('profile/' + userId).then(response => response.data)
    }
}

export const headerAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    }
}