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
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books", headers());
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id, headers());
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id, headers());
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData, headers());
  },
  login: function(loginInfo) {
    // send user login info to API
    return axios.post("/api/auth/login", loginInfo);
  },
  signup: function(signupInfo) {
    // send user signup info to API
    return axios.post("/api/auth/signup", signupInfo);
  }
};