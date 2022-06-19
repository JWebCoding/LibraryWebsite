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
	String series_name;
	String author;
	String first_name;
	String middle_name;
	String last_name;
	String publisher_name;
	String isbn;
	String genre_name;
	String notes;
	

	Integer series_part;
	Integer edition;
	int genre_type;
	int format;
	int pages;
	
	int authorID;
	int publisherID;
	int seriesID;
	int genreID;
	int copyright;
	
	public int getBookID() {
		return bookID;
	}
	public String getTitle() {
		return title;
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
	public String getPublisher_name() {
		return publisher_name;
	}
	public String getIsbn() {
		return isbn;
	}
	public String getGenre_name() {
		return genre_name;
	}
	public String getNotes() {
		return notes;
	}
	public Integer getSeries_part() {
		return series_part;
	}
	public Integer getEdition() {
		return edition;
	}
	public int getGenre_type() {
		return genre_type;
	}
	public Integer getFormat() {
		return format;
	}
	public int getPages() {
		return pages;
	}
	public int getAuthorID() {
		return authorID;
	}
	public int getPublisherID() {
		return publisherID;
	}
	public int getSeriesID() {
		return seriesID;
	}
	public int getGenreID() {
		return genreID;
	}
	public int getCopyright() {
		return copyright;
	}

	
}
