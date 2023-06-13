import axios from "axios";

const baseURL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api'
export default function getApiInstance(){
    return axios.create({
        baseURL:baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
}