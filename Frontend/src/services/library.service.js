import http from "../http-common";
class LibraryDataService {

  getAll() {
    return http.get("/books");
  }

  getTenBooks() {
    return http.get("/books10");
  }
  getSpecificBook(id) {
    return http.get(`/books/${id}`);
  }
}
export default new LibraryDataService();
