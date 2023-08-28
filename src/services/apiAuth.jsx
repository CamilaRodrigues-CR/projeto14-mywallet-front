import axios from "axios";

function signIn (body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/signIn`, body);    
    return promise;
}


function signUp (body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)    
    return promise;
}

function transitions () {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/transitions`)    
    return promise;
}

function signOut(){
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/signOut`)    
    return promise;
}

const apiAuth = {signIn, signUp, transitions, signOut};

export default apiAuth;
