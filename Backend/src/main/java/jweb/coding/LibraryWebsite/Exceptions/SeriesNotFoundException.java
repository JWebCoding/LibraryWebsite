package jweb.coding.LibraryWebsite.Exceptions;

public class SeriesNotFoundException extends RuntimeException {
	public SeriesNotFoundException(int id) {
		super(String.format("Series with ID of %d not found.",id));
	}
}
