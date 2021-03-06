package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Author {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int authorID;
	
	String first_name;
	String middle_name;
	String last_name;

	public int getAuthorID() {
		return authorID;
	}
	public String getFirst_name() {
		return first_name;
	}
	public String getMiddle_name() {
		return middle_name;
	}
	public String getLast_name() {
		return last_name;
	}
	
	
}
