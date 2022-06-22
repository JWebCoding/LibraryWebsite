package jweb.coding.LibraryWebsite.Exceptions;

public class GenreNotFoundException extends RuntimeException {
	public GenreNotFoundException(int id) {
		super(String.format("Genre with ID of %d not found.",id));
	}
}
