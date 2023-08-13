package jweb.coding.LibraryWebsite.Interfaces;

import jweb.coding.LibraryWebsite.Models.User;

public interface UserService {
	public abstract User getSpecificUser(int id);
}
