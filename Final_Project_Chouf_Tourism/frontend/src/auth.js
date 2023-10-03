class auth {
  static authenticateUser(token) {
    //token bdu yeje mn lbackend
    localStorage.setItem("token", token);
  }

  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static deAuthenticateUser() {
    localStorage.removeItem("token");
  }

  static getToken() {
    return localStorage.getItem("token");
  }
}

export default auth;
