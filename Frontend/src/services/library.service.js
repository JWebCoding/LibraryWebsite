import http from "../http-common";
class LibraryDataService {

  getAll() {
    return http.get("/all");
  }

  getTenBooks() {
    return http.get("/ten");
  }
  getSpecificBook(id) {
    return http.get(`/specific/${id}`);
  }
  searchForBooks(term) {
    return http.get(`/search/${term}`);
  }
}
export default new LibraryDataService();
