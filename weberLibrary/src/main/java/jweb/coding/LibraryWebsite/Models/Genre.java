package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Genre {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int genreID;
	
	String genre_name;
	
	int genre_type;

	public int getGenreID() {
		return genreID;
	}

	public String getGenre_name() {
		return genre_name;
	}

	public int getGenre_type() {
		return genre_type;
	}
	
	
}
