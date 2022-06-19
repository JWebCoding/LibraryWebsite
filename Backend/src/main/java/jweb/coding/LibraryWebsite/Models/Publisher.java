package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Publisher {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int publisherID;
	
	String publisher_name;
	String publisher_location;
	public int getPublisherID() {
		return publisherID;
	}
	public String getPublisher_name() {
		return publisher_name;
	}
	public String getPublisher_location() {
		return publisher_location;
	}
	
	
}
