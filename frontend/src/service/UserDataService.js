import axios from 'axios'


const USER_API_URL = 'http://localhost:8080/api/articles'


class UserDataService {


    retrieveAllUsers() {

        return axios.get(`${USER_API_URL}`);
    }


    retrieveUser(id) {

        return axios.get(`${USER_API_URL}/${id}`);
    }


    deleteUser(id) {

        return axios.delete(`${USER_API_URL}/${id}`);
    }


    updateUser(id, user) {

        return axios.put(`${USER_API_URL}/${id}`, user);
    }


    createUser(user) {

        return axios.post(`${USER_API_URL}`, user);
    }

    
}

export default new UserDataService()