package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;


@Entity
public class Book {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotEmpty
	int bookID;
	
	String title;
	String genre_name;
	String publisher_name;
	String series_name;
	String author;
	
	@Transient
	String first_name;
	@Transient
	String middle_name;
	@Transient
	String last_name;

	int copyright;
	int format;
	int pages;
	
	String isbn;

	public int getBookID() {
		return bookID;
	}

	public String getTitle() {
		return title;
	}

	public String getGenre_name() {
		return genre_name;
	}

	public String getPublisher_name() {
		return publisher_name;
	}

	public String getSeries_name() {
		return series_name;
	}

	public String getAuthor() {
		return author;
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

	public int getCopyright() {
		return copyright;
	}

	public int getFormat() {
		return format;
	}

	public int getPages() {
		return pages;
	}

	public String getIsbn() {
		return isbn;
	}

}
