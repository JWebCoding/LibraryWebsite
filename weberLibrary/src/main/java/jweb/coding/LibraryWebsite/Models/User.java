package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int userID;
	
	@NotEmpty
	String user_name;
	String user_login;
	String user_pass;
	
	public int getUserID() {
		return userID;
	}
	public String getUser_name() {
		return user_name;
	}
	public String getUser_login() {
		return user_login;
	}
	public String getUser_pass() {
		return user_pass;
	}
}
