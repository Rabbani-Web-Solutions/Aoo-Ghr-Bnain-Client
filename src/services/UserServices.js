import GenericServices from "./GenericServices";
import jwt_decode from "jwt-decode";
class userServices extends GenericServices {



  login = (userName, password) =>

    new Promise((resolve, reject) => {

      console.log(userName , password);

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/auth", { userName, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
         
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (username, email, password , role , amount, ids) =>
    new Promise((resolve, reject) => {


      console.log(amount)
      console.log(ids)


      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/register", { username, email, password , role , amount, ids })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    handleToken = (token) =>
    new Promise((resolve, reject) => {


      console.log(token)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/mycheckout", { token })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    contact = (username, email, query) =>
    new Promise((resolve, reject) => {


      console.log(username)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/contact", { username, email, query })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    save = (name , elements ,width , height, totalLayer , id) =>
    new Promise((resolve, reject) => {

      var data = JSON.stringify(elements);

      console.log(width)

      console.log(height)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/save", { name , data ,width , height,totalLayer, id })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });
  
     update = (sketchId , elements ,width , height, totalLayer , id) =>
    new Promise((resolve, reject) => {

      var data = JSON.stringify(elements);

      console.log(id)

      console.log(height)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/update", { sketchId , data ,width , height,totalLayer, id })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    change = (sub , role) =>
    new Promise((resolve, reject) => {

      console.log(role)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/change", { sub , role })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    updatePass = (email, password, role) =>
    new Promise((resolve, reject) => {

      console.log(email)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/updatePass", { email, password , role })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    

    getSketch = (id) =>
    new Promise((resolve, reject) => {

      console.log(id)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/getSketch", { id })
        .then((res) => {
          resolve(res);
        
          
        })  
        .catch((err) => {
          reject(err);
        });
    });

    delSketch = (id) =>
    new Promise((resolve, reject) => {

      console.log(id)

      this.post("https://aoo-ghr-bnain-fyp.herokuapp.com/delSketch", { id })
        .then((res) => {
          resolve(res);
        
          
        })  
        .catch((err) => {
          reject(err);
        });
    });

    isLoggedin = localStorage.getItem("token") ? true : false;

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token2");
    window.location.href = "/";
  };

  getLoggedinfo = () => {
    try {
      let jwt = localStorage.getItem("token");
      var decode = jwt_decode(jwt);
      return decode;
    } catch (error) {
      console.log("error");
    }
  };

  
  isAdmin = () => {
    if (this.isLoggedIn) {
      if (this.getLoggedinfo().role === "admin") return true;
      else return false;
    } else return false;
  };
}

let UserServices = new userServices();
export default UserServices;
