package jweb.coding.LibraryWebsite.Exceptions;

public class BooksNotFoundException extends RuntimeException{

	public BooksNotFoundException() {
		super("No books were found.");
	}
}