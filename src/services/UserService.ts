import ICreateUserRequest from "../http/request/createUserRequest.ts";
import axios from "axios";

const USER_BASE_URL = "http://localhost:8080" + '/api/user';

const UserService = {
    createUser: async (request: ICreateUserRequest) => {
        try {
            await axios.put(`${USER_BASE_URL}/createUser`, request);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
}

export default UserService;