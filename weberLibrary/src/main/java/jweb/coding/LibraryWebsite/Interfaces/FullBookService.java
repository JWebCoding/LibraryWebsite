package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.FullBook;

public interface FullBookService {
	public abstract List<FullBook> getBooks();
	public abstract List<FullBook> getTwentyBooks();
	public abstract FullBook getSpecificBook(int id);
	public abstract List<FullBook> searchForBook(String searchTerm);
}
