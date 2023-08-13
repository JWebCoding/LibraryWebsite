package jweb.coding.LibraryWebsite.Exceptions;

public class GenresNotFoundException extends RuntimeException{
	
	public GenresNotFoundException () {
		super("No Genres Found");
	}
}
