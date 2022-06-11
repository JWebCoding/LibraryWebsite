package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Book;

public interface BookService {
	public abstract void createBook(Book book);
	public abstract void updateBook(int id, Book book);
	public abstract void deleteBook(int id);
	public abstract List<Book> getBooks();
	public abstract List<Book> getTenBooks();
	public abstract List<Book> getSpecificBook(int id);
	public abstract List<Book> searchForBook(String searchTerm);
}
