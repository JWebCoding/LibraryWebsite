package jweb.coding.LibraryWebsite.Exceptions;

public class AuthorsNotFoundException extends RuntimeException {
	
	public AuthorsNotFoundException() {
		super ("No Authors Found");
	}
}