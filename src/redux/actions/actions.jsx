

export const filtering = (data) => {
  if(data.filter===true)
    return{
      type: "FILTER_ITEMS",
      data:data
    }
  return {
    type: "NO_FILTER",

  }
};
export const searching = (query) =>{
  return {
    type:"SEARCH",
    payload:query
  }
}
export const loginAction = (email , password) =>{
  return{
    type:"LOGIN",
    email : email,
    password : password
  }
}
export const registerAction = (fname , lname , email , password) =>{
  return{
    type:"REGISTER",
    firstname : fname,
    lastname : lname,
    email : email,
    password : password
  }
}
