import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "480cccb7-5dd0-480e-a8eb-ac9a2fb33b9b"
    }
});

export const authAPI = {
    login(email, password) {
        return instance.post(`auth/login`, { email, password });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    me() {
        return instance.get(`auth/me`);
    }
}