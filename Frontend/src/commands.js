const baseURL="http://localhost:8080/api";

class commands {

  getSpecificBook = (id) => {
    return baseURL+`/books/${id}`;
  }

  getTenBooks = () => {
    return baseURL+`/books10`;
  }
}

export default new commands();