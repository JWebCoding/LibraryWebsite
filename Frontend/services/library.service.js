import http from "../http-common";
class LibraryDataService {
  getAll() {
    return http.get("/books");
  }
  get(id) {
    return http.get(`/books/${id}`);
  }
}
export default new LibraryDataService();
