package jweb.coding.LibraryWebsite.Exceptions;

public class SeveralSeriesNotFoundException extends RuntimeException {
	public SeveralSeriesNotFoundException() {
		super("No Series Found");
	}
}
