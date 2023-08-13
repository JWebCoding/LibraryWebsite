package jweb.coding.LibraryWebsite.Exceptions;

public class BookNotFoundException extends RuntimeException {
	
	public BookNotFoundException(int id) {
		super(String.format("Book with ID of %d not found.",id));
	}
}
