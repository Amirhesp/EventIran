import axios from 'axios';
export const filtering_reducer = (state=[] , action) => {
    switch (action.type) {

        case "FILTER_ITEMS":
          return axios.get('http://localhost:80/ajaxTest/',{
            params: {
              data: action.data,
              filter : 'true'
            }
          }).then((response)=>{
            return response.data
          });

        case "NO_FILTER":
          return axios.get('http://localhost:80/ajaxTest/',{
            params: {
              data: null,
              filter : 'false'
            }
          }).then((response)=>{
            return response.data;
          });

          default: return state;
          // let xhttp2 = new XMLHttpRequest();
          // console.log("default called");
          // xhttp2.open("GET", "http://localhost:80/ajaxTest/", false);
          // xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          // xhttp2.send();
          // xhttp2.onreadystatechange = function() {
          //   if (this.readyState == 4 && this.status == 200) {
          //     return this.responseText;
          //
          //   }
          // };
          // return xhttp2.onreadystatechange();

    }
}
