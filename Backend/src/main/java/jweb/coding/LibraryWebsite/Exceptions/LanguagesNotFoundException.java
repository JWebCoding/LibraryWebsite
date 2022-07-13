package jweb.coding.LibraryWebsite.Exceptions;

public class LanguagesNotFoundException extends RuntimeException {
	public LanguagesNotFoundException() {
		super("No Languages Found");
	}
}
