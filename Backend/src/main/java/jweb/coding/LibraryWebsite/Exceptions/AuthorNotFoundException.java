package jweb.coding.LibraryWebsite.Exceptions;

public class AuthorNotFoundException extends RuntimeException {
	public AuthorNotFoundException(int id) {
		super(String.format("Author with ID of %d not found.",id));
	}
}
