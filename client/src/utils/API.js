import axios from "axios";
import Auth from "./Auth";

const headers = () => {
  const options = {};
  // if authenticated create Authorization header to add to api calls
  if (Auth.isAuthenticated()) {
    options["headers"] = {
      "Authorization": `Bearer ${Auth.getToken()}`
    }
  }
  return options;
}

export default {
  
  login: function(loginInfo) {
    // send user login info to API
    return axios.post("/api/auth/login", loginInfo);
  },
  signup: function(signupInfo) {
    // send user signup info to API
    return axios.post("/api/auth/signup", signupInfo);
  },
  updateMath: function(guestScore) {
    // return guest score to the database
    return axios.post("/api/mathupdate", { score: guestScore });
  },
  updateMinesweeper: function(){
    return axios.post("/api/minesupdate");
  },
  updateQuiz: function(){
    return axios.post("/api/feelgoodquiz");
  }
};