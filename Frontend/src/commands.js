const baseURL="http://localhost:8080/api";

class commands {

  getSpecificBook = (id) => {
    return baseURL+`/books/${id}`;
  }

  getTenBooks = () => {
    return baseURL+`/books`;
  }
}

export default new commands();