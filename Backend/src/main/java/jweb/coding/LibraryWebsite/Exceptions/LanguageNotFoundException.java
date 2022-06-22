package jweb.coding.LibraryWebsite.Exceptions;

public class LanguageNotFoundException extends RuntimeException {
	public LanguageNotFoundException(int id) {
		super(String.format("Language with ID of %d not found.",id));
	}
}
