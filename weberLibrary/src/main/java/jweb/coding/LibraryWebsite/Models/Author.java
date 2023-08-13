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
	String author_name;

	public int getAuthorID() {
		return authorID;
	}
	public String getAuthor_name() {
		return author_name;
	}

	
	
}
