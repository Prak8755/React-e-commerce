export async function getLocalStgUser() {
    try {
      let data = localStorage.getItem("user");
      if (data === null) {
        throw new Error("Oops you are not registered , Sign up and then login");
      }
      let newData = JSON.parse(data);
      return newData;
    } catch (err) {
      throw err;
    }
  }

//
  export async function setLocalStgUser(data) {
    try {
      await localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
      throw new Error("something went wrong");
    }
  }


  //logged in user gets saved to local storage
export const setLoggedInUser=function(user){
    localStorage.setItem('login',JSON.stringify(user));
  }
  
  //to get login details of logged in user
  export const getLoggedInUser=function(){
    return JSON.parse(localStorage.getItem('login'));
  }
  
  
