import axios from "axios";

export const getAllUsers = () => {
    
    return axios.get("http://192.168.7.2:7895/api/users/", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    })
}