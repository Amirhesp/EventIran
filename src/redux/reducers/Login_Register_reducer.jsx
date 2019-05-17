import axios from 'axios';
export const login_reducer = (state=false , action) => {
    switch (action.type) {

        case "LOGIN":
          return axios({
            method: 'post',
            url: 'http://localhost/postTest.php',
            params: {
              email: action.email,
              password :action.password
            }
          })
          .then((response)=>{
            return response.data
          })
          .catch((error)=>{
             console.log(error);
          });
        default:
            return state;
    }
}


export const register_reducer = (state=false , action) => {
    switch (action.type) {
        case "REGISTER":
          return axios({
            method: 'post',
            url: 'http://localhost/postTest.php',
            params: {
              fristname : action.firstname,
              lastname : action.lastname,
              email: action.email,
              password :action.password
            }
          })
          .then((response)=>{
            return response.data
          })
          .catch((error)=>{
             console.log(error);
          });
        default:
            return state;
    }
}
