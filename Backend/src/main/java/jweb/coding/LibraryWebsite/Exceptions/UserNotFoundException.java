package jweb.coding.LibraryWebsite.Exceptions;

public class UserNotFoundException extends RuntimeException{
	public UserNotFoundException( int id) {
		super(String.format("User with ID of %d not found",id));
	}

}
