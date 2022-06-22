package jweb.coding.LibraryWebsite.Exceptions;

public class PublisherNotFoundException extends RuntimeException {
	public PublisherNotFoundException(int id) {
		super(String.format("Publisher with ID of %d not found.",id));
	}
}	
