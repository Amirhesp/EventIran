import axios from 'axios';
export const search_reducer = (state=[] , action) => {
    switch (action.type) {

        case "SEARCH":
          return axios.get('http://localhost:80/ajaxTest/',{
            params: {
              search: action.payload,
              filter : 'true'
            }
          }).then((response)=>{
            return response.data
          });
        default:
            return state;
    }
}
