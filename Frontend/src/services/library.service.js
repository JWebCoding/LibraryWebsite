import http from "./http-common";
class LibraryDataService {

  getAllAuthors() {
    return http.get("/authors/all");
  }

  getAllBooks() {
    return http.get("/books/all");
  }

  getAllGenres() {
    return http.get("/genres/all");
  }

  getAllLanguages() {
    return http.get("/languages/all");
  }

  getAllPublishers() {
    return http.get("/publishers/all");
  }

  getAllSeries() {
    return http.get("/series/all");
  }

  getTenBooks() {
    return http.get("/books/ten");
  }
  getSpecificBook(id) {
    return http.get(`/books/specific/${id}`);
  }
  searchForBooks(term) {
    return http.get(`/books/search/${term}`);
  }

  createNewBook(object) {
    return http.post("/books/create", {object});
  }

  createNewAuthor(object) {
    return http.post("/authors/create", {object});
  } 
}
export default new LibraryDataService();
