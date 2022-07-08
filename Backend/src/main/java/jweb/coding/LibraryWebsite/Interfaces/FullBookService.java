package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import jweb.coding.LibraryWebsite.Models.Book;
import jweb.coding.LibraryWebsite.Models.FullBook;

public interface FullBookService {
	public abstract void updateBook(int id, FullBook book);
	public abstract void deleteBook(int id);
	public abstract List<FullBook> getBooks();
	public abstract List<FullBook> getTenBooks();
	public abstract Optional<FullBook> getSpecificBook(int id);
	public abstract List<FullBook> searchForBook(String searchTerm);
}
