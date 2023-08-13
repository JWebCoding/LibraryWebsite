package jweb.coding.LibraryWebsite.Exceptions;

public class PublishersNotFoundException extends RuntimeException {
	public PublishersNotFoundException() {
		super("No Publishers Found");
	}
}